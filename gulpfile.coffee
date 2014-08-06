gulp = require("gulp")
gutil = require("gulp-util")
bower = require("bower")
concat = require("gulp-concat")
sass = require("gulp-sass")
minifyCss = require("gulp-minify-css")
rename = require("gulp-rename")
coffee  = require 'gulp-coffee'
gutil   = require 'gulp-util'
plumber = require 'gulp-plumber'

paths = {sass: ["./scss/**/*.scss"]}

gulp.task "default", ["watchCoff"]

gulp.task "sass", (done) ->
  gulp.src("./scss/ionic.app.scss").pipe(sass()).pipe(gulp.dest("./www/css/")).pipe(minifyCss(keepSpecialComments: 0)).pipe(rename(extname: ".min.css")).pipe(gulp.dest("./www/css/")).on "end", done
  return

gulp.task 'coffee', ->
  gulp.src('coffee/**/*.coffee')
  .pipe(plumber())
  .pipe(coffee({
    bare: true
   }))
  .pipe(gulp.dest('www/js/'))
  .on('error', gutil.log)

gulp.task "scripts", ->
  gulp.src("www/js/**/*.js")
  .pipe(concat("dist/app.js"))
  .pipe gulp.dest("www/")

gulp.task "watch", ->
  gulp.watch paths.sass, ["sass"]
  return

gulp.task 'watchCoff', ()->
  gulp.watch('coffee/**/*.coffee', ['coffee', 'scripts'])
  .on 'change', (event)->
    console.log 'Fichier Modifier '+event.path

gulp.task "install", ["git-check"], ->
  bower.commands.install().on "log", (data) ->
    gutil.log "bower", gutil.colors.cyan(data.id), data.message
    return


gulp.task "git-check", (done) ->
  unless sh.which("git")
    console.log "  " + gutil.colors.red("Git is not installed."), "\n  Git, the version control system, is required to download Ionic.", "\n  Download git here:", gutil.colors.cyan("http://git-scm.com/downloads") + ".", "\n  Once git is installed, run '" + gutil.colors.cyan("gulp install") + "' again."
    process.exit 1
  done()
  return

"use strict";
const gulp = require("gulp");
const { dest, src } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css() {
  return src("./Content/src/Styles/Sass/styles.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("./wwwroot/css/"));
}

exports.css = css;

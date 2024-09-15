import { src, dest, watch, series } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import imagemin from "gulp-imagemin";
import uglify from "gulp-uglify";

const sass = gulpSass(dartSass);

const path = {
  images: "./src/img/*.{png,jpg}",
  sass: "./src/scss/*.scss",
  js: "./src/js/*.js",
};

const buildImg = () => {
  return src(path.images, {
    encoding: false,
  })
    .pipe(imagemin())
    .pipe(dest("./build/img"));
};

const buildStyles = () => {
  return src(path.sass)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("./build/styles"));
};

const buildJs = () => {
  return src(path.js)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest("./build/script"));
};

export default () => {
  watch([path.sass], { ignoreInitial: false }, series(buildStyles));

  watch([path.images], { ignoreInitial: false }, series(buildImg));

  watch([path.js], { ignoreInitial: false }, series(buildJs));
};

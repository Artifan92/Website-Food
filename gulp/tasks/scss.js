import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename'; // Переименование
import cleanCss from 'gulp-clean-css'; // Сжатие CSS
import webpCss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорніх префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Групировка мадиа запросов

const sass = gulpSass(dartSass);

const scss = () => {
	return (
		app.gulp
			.src(app.path.src.scss, { sourcemaps: app.isDev })
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: 'SCSS',
						message: 'Error: <%= error.message %> ',
					})
				)
			)
			.pipe(app.plugins.replace(/@img\//g, '../img/'))
			.pipe(
				sass({
					outputStyle: 'expanded',
				})
			)
			.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
			.pipe(
				app.plugins.if(
					app.isBuild,
					webpCss({
						webpClass: '.webp',
						noWebpClass: '.no-webp',
					})
				)
			)
			.pipe(
				app.plugins.if(
					app.isBuild,
					autoprefixer({
						grid: true,
						cascade: true,
						overrideBrowserslist: ['last 3 versions'],
					})
				)
			)
			// Выгрузка и сжатей и нет версии стилей
			.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.css)))
			.pipe(app.plugins.if(app.isBuild, cleanCss()))
			.pipe(
				rename({
					extname: '.min.css',
				})
			)
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(app.gulp.dest(app.path.buildLocalServer.css))
			.pipe(app.plugins.browserSync.stream())
	);
};

export default scss;

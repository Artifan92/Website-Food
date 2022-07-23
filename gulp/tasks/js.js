import webpack from 'webpack-stream';

const js = () => {
	return app.gulp
		.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'JS',
					message: 'Error: <%= error.message %> ',
				}),
			),
		)
		.pipe(
			webpack({
				mode: app.isBuild ? 'production' : 'development',
				entry: './src/js/main.js',
				output: {
					filename: 'main.min.js',
				},
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env'],
								},
							},
						},
					],
				},
			}),
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.gulp.dest(app.path.buildLocalServer.js))
		.pipe(app.plugins.browserSync.stream());
};

export default js;

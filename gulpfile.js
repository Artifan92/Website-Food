// Основной модуль
import gulp from 'gulp';

// Импорт путей
import path from './gulp/config/path.js';

// Импорт общих плагинов
import plugins from './gulp/config/plugins.js';

// Импорт задач
import server from './gulp/tasks/server.js';
import copy from './gulp/tasks/copy.js';
import reset from './gulp/tasks/reset.js';
import html from './gulp/tasks/html.js';
import scss from './gulp/tasks/scss.js';
import js from './gulp/tasks/js.js';
import images from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import svgSprive from './gulp/tasks/svgSprive.js';
import zip from './gulp/tasks/zip.js';
import ftp from './gulp/tasks/ftp.js';
import newFolder from './gulp/tasks/newFolder.js';

// Передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	gulp,
	path,
	plugins,
};

// Наблюдатель за изменениями в файлах
const watcher = () => {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
};

// Построение сценариев выполнения задач
const mainTasks = gulp.parallel(html, scss, js, images, copy);
const watcherServer = gulp.parallel(watcher, server);
const converterFonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const deployZip = gulp.series(reset, converterFonts, mainTasks, zip);
const deployFTP = gulp.series(reset, converterFonts, mainTasks, ftp);

const dev = gulp.series(reset, converterFonts, mainTasks, watcherServer);
const build = gulp.series(reset, converterFonts, mainTasks);

// Экспорт сценариев
export { svgSprive, dev, build, deployZip, deployFTP, newFolder };

// Выполнение сценария по умолчанию
gulp.task('default', dev);

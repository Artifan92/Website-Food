import replace from 'gulp-replace'; // Поиск и замена
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)
import browserSync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверка обновления
import ifPlugin from 'gulp-if'; // Условное ветвление
import del from 'del'; // Удаление
import fs from 'fs';

const plugins = {
	replace,
	plumber,
	notify,
	browserSync,
	newer,
	del,
	fs,
	if: ifPlugin,
};

export default plugins;

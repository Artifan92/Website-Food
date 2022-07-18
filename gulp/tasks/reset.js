const reset = () => {
	return app.plugins.del(app.path.clean);
};

const resetServer = () => {
	return app.plugins.del(app.path.cleanServerFolder, { force: true });
};

export { reset, resetServer };

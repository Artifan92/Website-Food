const reset = () => {
	return app.plugins.del(app.path.clean);
};

export default reset;

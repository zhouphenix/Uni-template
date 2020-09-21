export default (app, option = {}) => {
	let mixins = {
		api: require(`@/api/${option.name}`)
	}
	
	app.mixins = app.mixins || []
	app.mixins.push(mixins)
	return app
}

export default (app, option = {}) => {
	const TAG = "[mixins->index]"
	let mixins = {
		data() {
			return {
				api: require(`@/api/${option.name}`)
			}
		},

		onLoad() {
			console.log(TAG, "onLoad ");
		},
		onReady() {
			console.log(TAG, "onReady ");
		},
		onShow() {
			console.log(TAG, "onShow ");
		},
		onHide() {
			console.log(TAG, "onHide ");
		},
		onUnload() {
			console.log(TAG, "onUnload ");
		}

	}

	app.mixins = app.mixins || []
	app.mixins.push(mixins)
	return app
}

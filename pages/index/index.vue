<template>
	<view>
		主页
	</view>
</template>

<script>
	import {
		before,
		after,
		around
	} from './decorator.js'
	export default window.$mixinsCommon({
		data() {
			return {

			};
		},
		@around
		onLoad() {
			console.log('onload');
		},


		methods: {

			// @before
			test() {
				console.log('test::')
			}
		}
	}, {
		name: 'page/index',
		get: 'get',
		res: (data) => {
			return {
				data: {}
			}
		}
	})
</script>

<style lang="scss">

</style>

<template>
	<view>
		<!-- 左侧显示略缩图、图标 -->
		<uni-list>
			<uni-list-item v-for="(item, index) in records" :show-extra-icon="true" :thumb-size="item.thumbSize" :extra-icon="item.extraIcon"
			 :title="item.title" :note="item.note" :rightText="item.rightText"></uni-list-item>
		</uni-list>


	</view>
</template>

<script>
	import {
		before,
		after,
		around
	} from './decorator.js'
	import {
		deltaTime
	} from '@/decorators/index.js'

	export default window.$mixinsCommon({
		data() {
			return {
				records: [{
					extraIcon: {
						color: '#4cd964',
						size: '22',
						type: 'plusempty'
					},
					thumbSize: 'lg',
					title: '创建出版，搭建粗略的框架，提交github',
					note: '2020/09/21',
					rightText: 'TODO'
				},{
					extraIcon: {
						color: '#4cd964',
						size: '22',
						type: 'plusempty'
					},
					thumbSize: 'lg',
					title: '调试@decorator',
					note: '包括@before、 @around、 @after 、@deltaTime\n2020/09/22',
					rightText: 'TODO'
				}]
			};
		},

		@deltaTime
		@before('1', 2, ['12'], _ => {})
		onLoad() {
			console.log('onload')

		},


		methods: {

			// @around
			test() {
				console.log('test::')
			},

			switchChange(e) {
				console.log("switchChange: ", e);
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

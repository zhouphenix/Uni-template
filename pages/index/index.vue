<template>
	<view>
		<!-- 左侧显示略缩图、图标 -->
		<uni-list>
<<<<<<< HEAD
			<uni-list-item v-for="(item, index) in records" :key="index" :show-extra-icon="true" :thumb-size="item.thumbSize"
			 :extra-icon="item.extraIcon" :title="item.title" :note="item.note" :rightText="item.rightText"></uni-list-item>
=======
			<uni-list-item v-for="(item, index) in records" :show-extra-icon="true" :thumb-size="item.thumbSize" :extra-icon="item.extraIcon"
			 :title="item.title" :note="item.note" :rightText="item.rightText"></uni-list-item>
>>>>>>> 8b511bdf8bd06d6f08abd17762bbcd2553f6511a
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
<<<<<<< HEAD
				}, {
=======
				},{
>>>>>>> 8b511bdf8bd06d6f08abd17762bbcd2553f6511a
					extraIcon: {
						color: '#4cd964',
						size: '22',
						type: 'plusempty'
					},
					thumbSize: 'lg',
					title: '调试@decorator',
<<<<<<< HEAD
					note: '包括@before、 @around、 @after 、@deltaTime,\n使用范围：在page页面内使用， App.vue 不会生效\n2020/09/22',
					rightText: 'TODO'
				}].reverse()
			};
		},



		// @deltaTime
		// @before('1', 2, ['12'], _ => {})
		onLoad() {
			console.log('onload')
			this.api.get()
				.then(res => {
					console.log("res: ", res);
				})
				.catch(e => {
					console.error('error:', e)
				})
=======
					note: '包括@before、 @around、 @after 、@deltaTime\n2020/09/22',
					rightText: 'TODO'
				}]
			};
		},

		@deltaTime
		@before('1', 2, ['12'], _ => {})
		onLoad() {
			console.log('onload')

>>>>>>> 8b511bdf8bd06d6f08abd17762bbcd2553f6511a
		},

		methods: {
<<<<<<< HEAD
=======

>>>>>>> 8b511bdf8bd06d6f08abd17762bbcd2553f6511a
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

# Uni-template

基于aop，继承思想，搭建一个uni-app框架模板(暂时想到哪里写到哪里)

## 一、 修饰器 @decorator
> 文章： [ECMAScript 6 入门- 装饰器](https://es6.ruanyifeng.com/#docs/decorator)

**【注意】** 
+ 1. 不带参数写法
	```JavaScript
	export const deltaTime = (target, property, descriptor) => do(target, property, descriptor)
	}
	```
+ 2. 带参数写法
	```JavaScript
	export const deltaTime = function(...args) {
		return (target, property, descriptor) => do(target, property, descriptor, args)
	}
	```
	
## 二、网络请求， 众多封装库中选择了[yinchengnuo/uni_request](https://github.com/yinchengnuo/uni_request)
### 2.1 为什么选择它？
	1. 封装是官方提供的uni.request, 够标准 ; 
	2. 代码小，够简洁 （200多行）; 
	3. 其中封装的方式可借鉴学习（比如定义拦截器， 代理Proxy使用， 还有如何去封装修改固有的接口调用模式）
### 2.2 为什么没有直接拿来用？
	1. 别人的代码总是看着不顺眼^_^（爱找茬是不!）
	2. 方便加入自己的需求
	3. 顺便带着问题梳理下逻辑
### 2.3 如何调用？
	
+ GET请求
	```
	// api/page/module1.js
	export function get() {
		return request.get(url, data, header)
	}
	// page/module1.vue
	this.api.get()
		.then(res => {
			console.log("res: ", res);
		})
		.catch(e => {
			console.error('error:', e)
		})
	```
+ 自定义请求
	```
	// api/page/module1.js
	export function request(args) {
		return request.request(args)
	}
	// page/module1.vue
	this.api.request({
			url,
			method ,
			data,
			header,
			reqIntercept ,
			resIntercept
		})
		.then(res => {
			console.log("res: ", res);
		})
		.catch(e => {
			console.error('error:', e)
		})
	```

+ Download请求
	```
	// api/page/module1.js
	export function downloadFile(onProgressUpdate) {
		return request.download(url, onProgressUpdate, data, header)
	}
	// page/module1.vue
	let downloadCallback = res => {
		console.log('下载进度回调：', res)
	}
	this.api.downloadFile(downloadCallback)
		.then(res => {
			console.log("res: ", res);
		})
		.catch(e => {
			console.error('error:', e)
		})
	```
+ 取消请求
	```
	const task = request.get(url) 
	task.then(res => {
	    console.log(res)
	}).catch(e => console.error(e)) // 网络请求失败：主动取消
	task.abort()
	```

## 附1 await + async 注意，在异步事件中使用， 同步事件中会特别耗时

## 附2 [Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight respon](https://blog.csdn.net/yangyiboshigou/article/details/78738228)


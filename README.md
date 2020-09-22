# Uni-template
基于aop，继承思想，搭建一个uni-app框架模板 

## 修饰器 @decorator
> 文章： [ECMAScript 6 入门- 装饰器](https://es6.ruanyifeng.com/#docs/decorator)

**【注意】** 
1. 不带参数写法
	`JavaScript
	export const deltaTime = (target, property, descriptor) => do(target, property, descriptor, args)
	}
	`
2. 带参数写法
	`JavaScript
	export const deltaTime = function(...args) {
		return (target, property, descriptor) => do(target, property, descriptor, args)
	}
	`

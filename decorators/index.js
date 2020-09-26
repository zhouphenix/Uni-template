/**
 * 计算时间差decorator
 * 使用 @deltaTime function $name(){}
 */
export const deltaTime = function(target, key, descriptor) {
	const {
		value
	} = descriptor
	descriptor.value = function(...ss) {
<<<<<<< HEAD
		let start =  Date.now()
		let res = value.apply(this, ss)
		let diff =  Date.now() - start
=======
		let start = new Date().getTime()
		let res = value.apply(this, ss)
		let diff = new Date().getTime() - start
>>>>>>> 8b511bdf8bd06d6f08abd17762bbcd2553f6511a
		console.log(`Action-[${key}] 执行时间：△t = ${diff} ms`);
		return res
	};

	return descriptor
}
<<<<<<< HEAD

/**
 * 性能上报，用于异步方法decorator
 * 使用 @deltaTime function $name(){}
 */
export const report = function(target, key, descriptor) {
	const {
		value
	} = descriptor
	descriptor.value = async function(...ss) {
		let start = Date.now()
		let res = await value.apply(this, ss)
		let diff = Date.now() - start
		console.log(`Action-[${key}] 异步执行时间：△t = ${diff} ms`);
		return res
	};

	return descriptor
}
=======
>>>>>>> 8b511bdf8bd06d6f08abd17762bbcd2553f6511a

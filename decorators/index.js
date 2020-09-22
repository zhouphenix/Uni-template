/**
 * 计算时间差decorator
 * 使用 @deltaTime function $name(){}
 */
export const deltaTime = function(target, key, descriptor) {
	const {
		value
	} = descriptor
	descriptor.value = function(...ss) {
		let start = new Date().getTime()
		let res = value.apply(this, ss)
		let diff = new Date().getTime() - start
		console.log(`Action-[${key}] 执行时间：△t = ${diff} ms`);
		return res
	};

	return descriptor
}

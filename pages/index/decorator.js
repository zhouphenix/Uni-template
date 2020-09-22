const doBefore = function(target, key, descriptor, ...args) {
	const {
		value
	} = descriptor
	descriptor.value = function(...ss) {
		console.log(`Action-${key} 触发埋点!before: args ->`, args);
		let res = value.apply(this, ss)
		return res
	}

	return descriptor
};

/**
 * decorator修饰function， 在函数执行前执行
 */
export const before = function(...args) {
	return (target, property, descriptor) => doBefore(target, property, descriptor, args)
}


const doAfter = function(target, key, descriptor, ...args) {
	const {
		value
	} = descriptor
	descriptor.value = function(...ss) {
		let res = value.apply(this, ss)
		console.log(`Action-${key} 触发埋点!after`);
		return res
	};
	return descriptor
};

/**
 * decorator修饰function， 在函数执行后执行
 */
export const after = function(...args) {
	return (target, property, descriptor) => doAfter(target, property, descriptor, args)
}


const doAround = function(target, key, descriptor, ...args) {
	const {
		value
	} = descriptor
	console.log('around::', target, key, descriptor);
	descriptor.value = function(...ss) {
		console.log(`Action-${key} 触发埋点around ->before!`);
		let res = value.apply(this, ss)
		console.log(`Action-${key} 触发埋点around ->after!`);
		return res
	};

	return descriptor
};


/**
 * decorator修饰function， 执行在函数执行前后
 */
export const around = function(...args) {
	return (target, property, descriptor) => doAround(target, property, descriptor, args)
}

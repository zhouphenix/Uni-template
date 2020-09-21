export const before = function(target, key, descriptor) {
	const {
		value
	} = descriptor
	descriptor.value = function(...args) {
		console.log(`Action-${key} 触发埋点!before`);
		let res = value.apply(this, args)
		return res
	}

	return descriptor
};
export const after = function(target, key, descriptor) {
	const {
		value
	} = descriptor
	descriptor.value = function(...args) {
		let res = value.apply(this, args)
		console.log(`Action-${key} 触发埋点!after`);
		return res
	};
	return descriptor
};
export const around = function(target, key, descriptor) {
	const {
		value
	} = descriptor
	console.log('around::', target, key, descriptor);
	descriptor.value = function(...args) {
		console.log(`Action-${key} 触发埋点around ->before!`, args);
		let res = value.apply(this, args)
		console.log(`Action-${key} 触发埋点around ->after!`);
		return res
	};

	return descriptor
};

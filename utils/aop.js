const TAG = '[aop]'
Function.prototype._before = function(beforefn) {
	let _self = this;
	return function() {
		beforefn.apply(this, arguments);
		return _self.apply(this, arguments);
	};
};
Function.prototype._after = function(afterfn) {
	let _self = this;
	return function() {
		let ret = _self.apply(this, arguments);
		afterfn.apply(this, arguments);
		return ret;
	};
};
Function.prototype._around = function(beforefn, afterfn) {
	let _self = this;
	return function() {
		beforefn.apply(this, arguments);
		let ret = _self.apply(this, arguments);
		afterfn.apply(this, arguments);
		return ret;
	};
};

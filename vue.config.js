const constVar = require('./utils/constant.js')
module.exports = {

	chainWebpack: config => {
		// 添加环境变量,项目中当作常量使用，效果同.env
		config.plugin("define")
			.tap(args => {
				// 全局变量
				for (let key in constVar) { // 循环赋值
					args[0]['process.env'][key] = constVar[key]
				}
				console.log("全局常量定义(重启生效) args: ", args);

				return args;
			});
	}

}

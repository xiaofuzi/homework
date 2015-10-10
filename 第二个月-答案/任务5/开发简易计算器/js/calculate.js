var calculator = {
	expression: '2-1+3-22222*2',
	init: function(){
		this.parseExpression();
	},
	parseExpression: function(){
		var expArray = [];	//表达式数组
		var numArray = [];	//运算数数组
		var opArray = [];	//操作符数组
		
		//操作符以及其优先级
		var operator = {
			'+': 1,
			'-': 1,
			'*': 2,
			'/': 2
		}

		//判断是否为操作符
		function _equalOper(s){
			for( var i in operator){
				if(s == i){
					console.log("operator", s);
					return true;
				}
			}
			return false;
		}

		var expStr = this.expression;
		var startIndex = 0;
		//2-1+3-22222*2
		for(var i = 0; i < expStr.length; i++){
			var tmp = '';
			if(_equalOper(expStr[i])){
				tmp = expStr.substring(startIndex, i);
				startIndex = i - 0 + 1;
				expArray.push(tmp);
			}else {
				tmp = expStr.substr(startIndex);
				expArray.push(tmp);
			}
			console.log('expArray01',expArray);
		}
	}
};

(function(){
	calculator.init();
})();
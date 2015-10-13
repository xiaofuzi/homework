//操作符以及其优先级
var operator = {
	'+': 1,
	'-': 1,
	'*': 2,
	'/': 2
}

var calculator = {
	expression: '1+2-9*1',
	expressionArray: [],
	numArray: [],	//运算数数组
	opArray: [],	//操作符数组
	calculateNum: 30, //堆栈限制
	init: function(){
		this.parseExpression();
	},
	//判断是否为操作符
	_equalOper:function(s){
		for( var i in operator){
			if(s == i){
				return true;
			}
		}
		return false;
	},
	//中缀计算
	_oper: function(params1, params2, op){
		//先出栈的为第二个参数
		console.log("操作符：", op);
		var p1 =  parseInt(params2);
		var p2 =  parseInt(params1);
		var result = 0;
		switch(op){
			case '+':
				result = p1 + p2;
			break;
			case '-':
				result = p1 - p2;
			break;
			case '*':
				result = p1 * p2;
			break;
			case '/':
				if(p2 == 0){
					alert("除数不能为0！");
				}else{
					result = p1 / p2;
				}
			break;
		}
		return result;
	},
	//操作数栈与操作符栈合成表达式数组
	generateExpression: function(){
		var tmpArray = [];
		var index = 1;
		tmpArray[0] = calculator.numArray[0];
		console.log("操作数栈11：", calculator.numArray);
		console.log('运算符栈11:', calculator.opArray);
		for(var i = 1; i <= calculator.opArray.length; i++){
			tmpArray[index] = calculator.opArray[i-1];
			index += 1;
			tmpArray[index] = calculator.numArray[i];
			index += 1;
			console.log("index:", index);
		}
		console.log("tmpArray", tmpArray);
		calculator.expressionArray = tmpArray;
	},
	parseExpression: function(){
		var expArray = [];	//表达式数组

		//得到表达式数组
		var expStr = this.expression;
		var startIndex = 0;
		//2-1+3-22222*2
		for(var i = 0; i < expStr.length; i++){
			var tmp = '';
			if(calculator._equalOper(expStr[i])){
				tmp = expStr.substring(startIndex, i);
				startIndex = i - 0 + 1;
				//操作数与操作符分隔开存储
				expArray.push(tmp);
				expArray.push(expStr[i]);
			}else if(i == (expStr.length-1)) {
				tmp = expStr.substr(startIndex);
				expArray.push(tmp);
			}
		}
		this.expressionArray = expArray;
		calculator.calculate();
	},
	calculate: function(){
		//表达式数组
		var _arrayExp = this.expressionArray;
		var _opArray = [];
		var _numArray = [];
		var _tmpResult = 0;
		//1-4*2+2
		console.log("表达式数组：", _arrayExp);
		_arrayExp.forEach(function(e, index){
				if(_arrayExp.length == 3){
					console.log("表达式数组aaaaaaa：", _arrayExp);
					_tmpResult = calculator._oper(_arrayExp[2], _arrayExp[0], _arrayExp[1]);
						
					console.log("输出结果",_tmpResult);
					//将所得结果以及操作符分别压栈
					_numArray.push(_tmpResult);
				}else if(calculator._equalOper(e)){
					//遇到第一个操作符将其压栈
					if(_opArray.length == 0 ){
						_opArray.push(e);
						console.log('_opArray:',_opArray);
					}else if(operator[_opArray[_opArray.length - 1]] >= operator[e]){	
						//取到的操作符	比栈顶的优先级低或相等的情况
						//取栈顶数计算
						_tmpResult = calculator._oper(_numArray.pop(), _numArray.pop(), _opArray.pop());
						
						console.log("输出结果",_tmpResult);
						//将所得结果以及操作符分别压栈
						_numArray.push(_tmpResult);
						_opArray.push(e);
					}else{
						//若取到的操作符优先级比栈顶的更高，则压栈
						_opArray.push(e);
						console.log('_opArray:',_opArray);
					}
				}else{
					_numArray.push(e);
					console.log("操作数栈99999：", _numArray);
				}
				calculator.opArray = _opArray;
				calculator.numArray = _numArray;
				
				console.log("操作数栈：", _numArray);
				console.log('运算符栈:',_opArray);
			})
		calculator.calculateNum -= 1;
		console.log('calculateNum',calculator.calculateNum);
		calculator.generateExpression();
		if(calculator.calculateNum == 0){
			return 0;
		}
		if(this.expressionArray.length != 1){
			console.log("操作数栈qqqqq：", calculator.numArray);
			console.log('运算符栈:', calculator.opArray);
			calculator.calculate();
		}else{
			console.log("输出结果1111",_arrayExp[0]);
			return 0;
		}
	}
};

(function(){
	calculator.init();
})();

/*
else if(index == (_arrayExp.length - 1)){
				_numArray.push(e);
				//取栈顶数计算
				_tmpResult = calculator._oper(_numArray.pop(), _numArray.pop(), _opArray.pop());
				
				//将所得结果以及操作符分别压栈
				_numArray.push(_tmpResult);
				console.log("输出结果",_tmpResult);
				console.log("_opArray-length:", _opArray);
				//取到最后一个数后将栈中的元素出栈计算
				for( var i = 0; i < _opArray.length; i++){
					_tmpResult = calculator._oper(_numArray.pop(), _numArray.pop(), _opArray.pop());
					//将所得结果以及操作符分别压栈
					_numArray.push(_tmpResult);
					console.log("输出结果",_tmpResult);
					console.log("_opArray-length:", _opArray);
				}
			}
*/
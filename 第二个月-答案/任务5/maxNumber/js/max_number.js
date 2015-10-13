var maxNum = {
	charArray: '',
	maxChar: '',
	maxCounter: 0,
	maxCharArray: [],
	init: function(){
		this.getCharArray();
	},
	getCharArray: function(){
		var inputStr = document.getElementById("inputStr");
		var calculateBtn = document.getElementById("calculateBtn");
		_this = this;
		calculateBtn.onclick = function(){
			_this.charArray = inputStr.value;
			_this.calculate();
		}
	},
	calculate: function(){
		var chars = this.charArray;

		var maxChar = '';		//出现次数最多的字母
		var maxCounter = 0;		//出现最多的次数
		var maxCharArray = []	//出现最多字母的索引
		var charObj = {};		//字符对象{'a': counter}

		for(var e in chars){
			var tempChar = chars[e];
			if(charObj[tempChar]){
				charObj[tempChar] += 1;
				//出现次数最多的情况统计
				if(maxCounter < charObj[tempChar]){
					maxCounter = charObj[tempChar];
					maxChar = chars[e];
				}
			}else{
				charObj[tempChar] = 1;
			}
		}

		if(maxCounter == 0){
			//说明没有重复出现的字符
			maxChar = chars[0];
			maxCounter = 1;
			maxCharArray = [0];
		}else{
			//找到出现次数最多的字母的索引
			for(var e in chars){
				if(chars[e] == maxChar){
					maxCharArray.push(e);
				}
			}
		}

		this.maxChar = maxChar;
		this.maxCounter = maxCounter;
		this.maxCharArray = maxCharArray;
		
		this.resultView();
	},
	//将结果输出到界面
	resultView: function(){
		var maxChar = document.getElementById("maxChar");
		var maxCounter = document.getElementById("maxCounter");
		var strIndex = document.getElementById("strIndex");

		maxChar.innerHTML = this.maxChar;
		maxCounter.innerHTML = this.maxCounter;

		var maxCharArray = this.maxCharArray;

		var charIndex = '';
		for(var c in maxCharArray){
			charIndex += (maxCharArray[c] + ',');
		}
		charIndex = charIndex.substr(0, charIndex.length - 1);	//去掉最后一个逗号
		strIndex.innerHTML = charIndex;

	}
};

(function(){
	maxNum.init();
})();
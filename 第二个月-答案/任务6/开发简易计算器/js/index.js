var calculator = {
    firstNum: 0,
    secondNum: 0,
    result: 0,
    operator: '+',
    init: function(){
        this.resultData();
    },
    clear: function(){
        var resultArea = document.getElementById('resultArea');
        resultArea.innerHTML = 0;
        calculator.firstNum = 0;
        calculator.secondNum = 0;
        calculator.result = 0;
        calculator.operator = '+';
    },
    //将运算结果输出
    output: function(){
        var resultArea = document.getElementById('resultArea');
        console.log("result",calculator.result);
        if(!isNaN(calculator.result) ){
            resultArea.innerHTML = calculator.result;
        }else{
            calculator.clear();
            alert("输入错误，请重新输入！")
        }
    },
    calculate: function(){
        calculator.result = parseInt(calculator.result);
        calculator.firstNum = parseInt(calculator.firstNum);
        calculator.secondNum = parseInt(calculator.secondNum);

        console.log("result01",calculator.firstNum);
        console.log("result02",calculator.secondNum);
        switch(this.operator){
            case '+': 
                calculator.result = calculator.firstNum  + calculator.secondNum; 
                break;
            case '-': 
                calculator.result = calculator.firstNum  - calculator.secondNum;
                break;
            case '*': 
                calculator.result = calculator.firstNum  * calculator.secondNum; 
                break;
            case '/': 
                if(calculator.secondNum == 0){
                    alert('除数不能为零！');
                }else{
                    calculator.result = calculator.firstNum  / calculator.secondNum;
                }
                break;
        }
        calculator.firstNum = calculator.result;
        calculator.secondNum = 0;
        calculator.output();
    },
    resultData: function(){
        var btns = document.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++){
            btns[i].addEventListener('click', function(){
                var btnValue = this.value;
                if(btnValue >= 0 && btnValue <= 9){
                    calculator.firstNum += btnValue;
                    var resultArea = document.getElementById('resultArea');
                    resultArea.innerHTML = parseInt(calculator.firstNum);
                }else if(btnValue == -1){
                    calculator.clear();
                }else if(btnValue == '='){
                    calculator.calculate();
                }else{
                    calculator.operator = btnValue;
                    console.log('calculator.operator',calculator.operator);
                    calculator.calculate();
                    calculator.firstNum = 0;
                }                
            })   
        }
    }    
};

(function(){
    calculator.init();
    var num = 2;
    console.log(typeof(typeof(num)));
    if (typeof(num) == 'numbe'){
        alert('请输入数字');
        return;
    };
})();

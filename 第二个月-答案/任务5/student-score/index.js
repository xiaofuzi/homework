var studentScore = {
    score: '',
    init: function(){
        this.getScore();
    },
    getScore: function(){
        var scoreValue = document.getElementById("studentScore");
        var scoreBtn = document.getElementById("checkScore");

        scoreBtn.onclick = function(){
            studentScore.score = scoreValue.value;
            if(studentScore.score == ''){
                //尚未输入成绩的情况
                studentScore._finalScore("您尚未输入成绩，请重新输入！");
                return 0;
            }
            studentScore._calculate();
            //studentScore._calculateTwo();
        }
    },
    _calculate: function(){
        var score = studentScore.score; //输入参数，用Switch语句来做判断
        switch (true) {
            case score > 90 && score <= 100:
                studentScore._finalScore("1等生");
                break;
            case score > 80 && score <= 90:
                studentScore._finalScore("2等生");
                break;
            case score > 70 && score <= 80:
                studentScore._finalScore("3等生");
                break;
            case score > 60 && score <= 70:
                studentScore._finalScore("4等生");
                break;
            case score > 50 && score <= 60:
                studentScore._finalScore("5等生");
                break;
            case score > 40 && score <= 50:
                studentScore._finalScore("6等生");
                break;
            case score > 30 && score <= 40:
                studentScore._finalScore("7等生");
                break;
            case score > 20 && score <= 30:
                studentScore._finalScore("8等生");
                break;
            case score > 10 && score <= 20:
                studentScore._finalScore("9等生");
                break;
            case score >= 0 && score <= 10:
                studentScore._finalScore("差生");
                break;
            default:
                studentScore._finalScore("请输入0到100的数字！");
                break;
        }
    },
    //if else的实现方式
    _calculateTwo: function(){
        var score = studentScore.score;
            if(score > 90 && score <= 100){
                studentScore._finalScore("1等生");
            }else if(score > 80 && score <= 90){
                studentScore._finalScore("2等生");
            }else if(score > 70 && score <= 80){
                studentScore._finalScore("3等生");
            }else if(score > 60 && score <= 70){
                studentScore._finalScore("4等生");
            }else if(score > 50 && score <= 60){
                studentScore._finalScore("5等生");
            }else if(score > 40 && score <= 50){
                studentScore._finalScore("6等生");
            }else if(score > 30 && score <= 40){
                studentScore._finalScore("7等生");
            }else if(score > 20 && score <= 30){
                studentScore._finalScore("8等生");
            }else if(score > 10 && score <= 20){
                studentScore._finalScore("9等生");
            }else if(score >=0 && score <= 10){
                studentScore._finalScore("差生");
            }else{
                studentScore._finalScore("请输入0到100的数字！");
            }
    },
    _finalScore: function(str){
        var finalScore = document.getElementById("finalScore");
        finalScore.innerHTML = str;
    }
};

(function(){
    studentScore.init();
})()
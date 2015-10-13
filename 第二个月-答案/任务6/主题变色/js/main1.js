function ifcolor(){
	var color = localStorage.getItem("color");
	if(color!=null)
	{
		setObjBgcolor(color);
	}
}
function green(){
	setObjBgcolor('#99cc66');
}
function red(){
	setObjBgcolor('#ff6666');
}
function yellow(){
	setObjBgcolor('#ffff66');
}
function blue(){
	setObjBgcolor("#0099cc");
}
function setObjBgcolor(b){
	document.getElementById("menu").style.backgroundColor = b;
	document.getElementById("snyg").style.color= b;
	document.getElementById("sjjy").style.color = b;
	document.getElementById("ohd").style.color = b;
	document.getElementById("atb").style.color = b;
	document.getElementById("fnw").style.color = b;
	document.getElementById("g").style.color = b;
	document.getElementById("h").style.color = b;
	document.getElementById("s").style.color = b;
	localStorage.setItem("color",b);
}
/*
* 登录注册切换
*/
$(function(){
	$("#fregister").click(function(){
		$this = $(this);
		$("#fdregister").show();
		$("#fdlogin").hide();
		
		$("#fregister").addClass('active');
		$("#flogin").removeClass('active');	
	})

	$("#flogin").click(function(){
		$this = $(this);
		$("#fdregister").hide();
		$("#fdlogin").show();

		$("#fregister").removeClass('active');
		$("#flogin").addClass('active');	
	})
})
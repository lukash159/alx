$(document).ready(function(){
	
	$("div").css("background", "gray");
	
	$("#zielony").click(function(){
		$("div").css("background", "green")
	});
	
	$("#niebieski").click(function(){
		$("div").css("background", "blue")
	});
	
	$("#zolty").click(function(){
		$("div").css("background", "yellow")
	});
});
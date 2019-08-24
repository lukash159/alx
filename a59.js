$(document).ready(function(){
	
	$("div").css("background", "gray");
	
	$("p").click(function(){
		
		$("div").css("background", $(this).attr("id"))
		
	});
	
	
});
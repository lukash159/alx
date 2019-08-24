$(document).ready(function(){ 

	$("#ukryj").click(function(){
		$("div").hide();
	});

	$("#pokaz").click(function(){
		$("div").show();
	});
	
	$("#sDown").click(function(){
		$("div").slideDown();
	});
	
	$("#sUp").click(function(){
		$("div").slideUp();
	});
	
	$("#fIn").click(function(){
		$("div").fadeIn();
	});
	
	$("#fOut").click(function(){
		$("div").fadeOut();
	});
	
}); 
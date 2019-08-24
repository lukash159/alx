$(document).ready(function(){ 

	$(".dodaj").click(function(){
		$("#napisTestowy").addClass($(this).parent().attr("id"));
	});

	$(".usun").click(function(){
		$("#napisTestowy").removeClass($(this).parent().attr("id"));
	});
	
	
}); 
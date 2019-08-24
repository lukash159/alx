$(document).ready(function(){
	let licznik=0;
	$("img").mouseover(function(){
		licznik++;
		$("span").html(licznik);
	});
	
});
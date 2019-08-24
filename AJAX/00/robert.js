$(document).ready(function(){
	
	$("#addContact").click(function(){
		addContact();
	});
	
});

function addContact(){

	$.ajax({
	
		type: "POST",
		url: "plik.php",
		data: {
			"imie" : $("#imie").val(),
			"nazwisko" : $("#nazwisko").val(),
			"telefon" : $("#telefon").val()
		},
		dataType: "json",
		success: function(data){
			console.log(data);
		},
		beforeSend: function(){
			$("#preloader").css("display", "block");
		},
		complete: function(){
			$("#preloader").css("display", "none");
		},
		error: function(xhr){
			console.log(xhr.responseText);
		}
	
	});
}
document.addEventListener("DOMContentLoaded",function(){
	
	document.querySelector("#save").addEventListener("click",function(){
		
		setCookie("name",document.querySelector("#name").value,10);
		setCookie("surname",document.querySelector("#surname").value,10);
		
	});
	
	document.querySelector("#show").addEventListener("click",function(){
		
		alert(showCookie("name")+" "+showCookie("surname"));
		
	});
	
	document.querySelector("#del").addEventListener("click",function(){
		
		delCookie("name");
		delCookie("surname");
		
	});
});

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires;
}

function showCookie(name) {
	var decodedCookie = (document.cookie);  
	var ca = decodedCookie.split(';');
	for (let i=0; i<ca.length; i++) {
		cookieName = ca[i].split("=")[0];
		cookieVal = ca[i].split("=")[1];
		
		if ((cookieName).trim() == name) {
			return(cookieVal);
		}
	}
}

function delCookie(cname) {
	var d = new Date();
	d.setTime(d.getMonth()-1);
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=;" + expires;
}
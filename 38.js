document.addEventListener("DOMContentLoaded",function(){
	
	document.querySelector("#setCookie").addEventListener("click",function(){
		
		setCookie("ALX","KursJS",10);
		
	});
	
	document.querySelector("#showCookie").addEventListener("click",function(){
		
		showCookie("ALX");
		
	});
	
	document.querySelector("#delCookie").addEventListener("click",function(){
		
		delCookie("ALX");
		
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
			alert(cookieVal);
		}
	}
}

function delCookie(cname) {
	var d = new Date();
	d.setTime(d.getMonth()-1);
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=;" + expires;
}
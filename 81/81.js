function add(produkt,cena)
{
	let ile = parseInt(document.querySelector("#"+produkt+"").value);
	if (ile>0)
	{
	
	let znaleziono=false;
	
	var decodedCookie = (document.cookie);  
	var ca = decodedCookie.split(';');
	for (let i=0; i<ca.length; i++) {
		cookieName = ca[i].split("=")[0];
		cookieVal = ca[i].split("=")[1];
		
		if ((cookieName).trim() == "produkt"+produkt) {
			znaleziono=true;
			break;
		}
	}
	
	if(znaleziono == true)
	{
		cookieValTab = cookieVal.split("|");
		ile+=parseInt(cookieValTab[0]);
		setCookie("produkt"+produkt,ile+"|"+cena+"|"+produkt,10);		
	}
	else
	{
		setCookie("produkt"+produkt,ile+"|"+cena+"|"+produkt,10);		
	}
	
	show();
	}
	else
	{
		alert("Podałeś wartość poniżej zera");
	}
}

function show()
{
	let html ="<ul>"
	var decodedCookie = (document.cookie);  
	var ca = decodedCookie.split(';');
	for (let i=0; i<ca.length; i++) {
		cookieName = ca[i].split("=")[0];
		cookieVal = ca[i].split("=")[1];
		
		if 	(((cookieName).trim() == "produktRower") || 
			((cookieName).trim() == "produktTelewizor") ||
			((cookieName).trim() == "produktTelefon") ||
			((cookieName).trim() == "produktTablet"))
		{			
			value = cookieVal.split("|")
			
			html+="<li>";
			html+="Produkt: "+value[2];
			html+=" ilosc:"+value[0];
			html+=" cena:"+value[1];
			html+=" wartość:"+value[1]*value[0];
			html+=" <a href='#' onclick=\"del('"+value[2]+"')\">usun</a>";
			html+="</li>";
		}
	}
	html+="</ul>";
	
	document.querySelector("#koszyk").innerHTML=html;
}

function del(produkt)
{
	let znaleziono=false;
	
	var decodedCookie = (document.cookie);  
	var ca = decodedCookie.split(';');
	for (let i=0; i<ca.length; i++) {
		cookieName = ca[i].split("=")[0];
		cookieVal = ca[i].split("=")[1];
		
		if ((cookieName).trim() == "produkt"+produkt) {
			znaleziono=true;
			break;
		}
	}
	
	if(znaleziono == true)
	{
		cookieValTab = cookieVal.split("|");
		ile=parseInt(cookieValTab[0])-1;
		
		if(ile==0)
		{
			setCookie("produkt"+produkt,ile+"|"+cookieValTab[1]+"|"+produkt,-10);
		}
		else
		{
			setCookie("produkt"+produkt,ile+"|"+cookieValTab[1]+"|"+produkt,10);
		}
	}
	
	
	show();

	
}








function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires;
}
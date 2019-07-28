
function wyslij(){

	// tutaj kod JS :)
	
	imie = document.querySelector("form input[name='imie']").value;
	document.querySelector("#imie").innerText=imie;
	
	nazwisko = document.querySelector("form input[name='nazwisko']").value;
	document.querySelector("#nazwisko").innerText=nazwisko;
	
	miasto = document.querySelector("form select[name='miasto']").value;
	document.querySelector("#miasto").innerText=miasto;
		
	technologie = document.querySelectorAll("form input[type='checkbox']");
	let tech="";
	for(let el of technologie)
	{
		if(el.checked)
		{
			tech+=el.value+" ";
		}
	}
	document.querySelector("#technologie").innerText=tech;
	
	stanowisko = document.querySelectorAll("form input[type='radio']");
	let stan = "";
	for(let i=0;i<stanowisko.length;i++)
	{
		
		if(stanowisko[i].checked)
		{
		
			stan = stanowisko[i].value;
			break;
		}
	}
	document.querySelector("#stanowisko").innerText=stan;
	
	uwagi = document.querySelector("form textarea[name='uwagi']").value;
	document.querySelector("#uwagi").innerText=uwagi;
	
	let errors = document.querySelectorAll(".error");
	for (let er of errors)
	{
		er.innerHTML="";
	}
	
	if(imie=="")
	{
		document.querySelector("#error_imie").innerText="błąd!";
	}
	
	if(nazwisko=="")
	{
		document.querySelector("#error_nazwisko").innerText="błąd!";
	}
	
	if(miasto=="")
	{
		document.querySelector("#error_miasto").innerText="błąd!";
	}
	
	if(tech=="")
	{
		document.querySelector("#error_technologia").innerText="błąd!";
	}
	
	if (stan == "")
	{
		document.querySelector("#error_stanowisko").innerText="błąd!";
	}
}




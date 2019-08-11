

function addUser()
{
	//console.clear();
	let imie = document.querySelector("#imie").value;
	let nazwisko = document.querySelector("#nazwisko").value;
	let telefon = document.querySelector("#telefon").value;	
	
	kontakt = new Kontakt(imie, nazwisko, telefon);
	
	
	kontaktyFromStorage=JSON.parse(localStorage.getItem("Kosiazka"));
	if(kontaktyFromStorage!=null)
	{
		kontaktyFromStorage.push(kontakt);
		localStorage.setItem("Kosiazka",JSON.stringify(kontaktyFromStorage));
	}
	else
	{
		let dane=[];
		dane.push(kontakt);
		localStorage.setItem("Kosiazka",JSON.stringify(dane));
	}

	show();
}

function delAll()
{
	localStorage.clear();
}

function show()
{
		kontaktyFromStorage=JSON.parse(localStorage.getItem("Kosiazka"));
		
		let html ="<ul>"
		for (let i=0;i<kontaktyFromStorage.length;i++)
		{
			html+="<li>";
			html+="Imie: "+kontaktyFromStorage[i].imie;
			html+=" Nazwisko:"+kontaktyFromStorage[i].nazwisko;
			html+=" Nr telefonu:"+kontaktyFromStorage[i].telefon;
			html+=" <a href='#' onclick=\"del('"+i+"')\">usun</a>";
			html+="</li>";
		}
		html+="</ul>";
		document.querySelector("#showUser").innerHTML=html;
	}
	
function del(index)
{
	
	kontaktyFromStorage=JSON.parse(localStorage.getItem("Kosiazka"));
	kontaktyFromStorage.splice(index,1);
	localStorage.setItem("Kosiazka",JSON.stringify(kontaktyFromStorage));
	
	show();
}
	
class Kontakt
	{
		constructor(imie, nazwisko, telefon)
		{
			this.imie=imie,
			this.nazwisko=nazwisko,
			this.telefon=telefon
			
		}
	}
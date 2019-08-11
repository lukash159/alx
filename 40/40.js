document.addEventListener("DOMContentLoaded",function(){

document.querySelector("#save").addEventListener("click",function(){
		
		let imie = document.querySelector("#imie").value;
		let nazwisko = document.querySelector("#nazwisko").value;
		let email = document.querySelector("#email").value;
		let login = document.querySelector("#login").value;
		let haslo = document.querySelector("#haslo").value;
		
		myObj = new Dane(imie, nazwisko, email, login, haslo);
		localStorage.setItem("Dane", JSON.stringify(myObj));
		
	});
	
document.querySelector("#read").addEventListener("click",function(){
		
		odczytane = localStorage.getItem("Dane");
		
		mObj=JSON.parse(odczytane);
		
		console.log(mObj);
		
	});
});


class Dane 
{
	constructor(imie, nazwisko, email, login, haslo)
	{
			this.imie=imie,
			this.nazwisko=nazwisko,
			this.email=email,
			this.login=login,
			this.haslo=haslo
	}
}

var button1 = document.getElementById("button1");

button1.addEventListener("mouseover", affiche_message);


function affiche_message() {
	document.getElementById('resultat').innerHTML = 'Bonjour ' + document.getElementById('nom').value + ' ' + document.getElementById('prenom').value;document.getElementById('resultat').style = 'background-color: blue; color: white';
}

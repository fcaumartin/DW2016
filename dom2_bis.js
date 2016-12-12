// Avant
	function Affiche() {
		document.getElementById('resultat').innerHTML = 
		'Bonjour ' + 
		document.getElementById('nom').value + 
		' ' + 
		document.getElementById('prenom').value;
	}


	var btn1 = document.getElementById('btn1');

	btn1.addEventListener("click", Affiche);


// Apres !!!

	var btn1 = document.getElementById('btn1');

	btn1.addEventListener("click", function () {
		document.getElementById('resultat').innerHTML = 
		'Bonjour ' + 
		document.getElementById('nom').value + 
		' ' + 
		document.getElementById('prenom').value;
	});
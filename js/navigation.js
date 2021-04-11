/*****************************************************
*
*	This script is used to navigate into our web page
*
******************************************************/





// /!\ : on utilise $(document).on("click", ".btnPanier", function() et PAS (.btnPanier).click()
$(document).on("click", "#btnPanier", function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			document.body.innerHTML = this.responseText;
    	}
    }
     xhttp.open("GET", "http://localhost:7800/src/livraison_index.html");
     xhttp.send();

    // Initiailize map
     setTimeout(function(){ initializeMap() }, 200);



});

// Go back to the main menu
$(document).on("click", "#btnMainMenu", function() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			document.body.innerHTML = this.responseText;
    	}
    }
     xhttp.open("GET", "http://localhost:7800/index.html");
 	 xhttp.send();
});


// Go back to the butchers
$(document).on("click", "#btnBoucherie", function() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			document.body.innerHTML = this.responseText;
    	}
    }
     xhttp.open("GET", "http://localhost:7800/src/boucherie_index.html");
 	 xhttp.send();
});



// Go to the fiche article
$(document).on("click", ".btnFicheArticle", function() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			document.body.innerHTML = this.responseText;
    	}
    }
     xhttp.open("GET", "http://localhost:7800/src/fiche_produit.html");
 	 xhttp.send();
});



function initializeMap() {
	// On initialise la carte sur les coordonnées GPS de Paris
    let macarte = L.map('carte').setView([48.852969, 2.349903], 13)

    L.Routing.control({
    // Nous personnalisons le tracé
    lineOptions: {
        styles: [{color: '#ff8f00', opacity: 1, weight: 7}]
    },

    // Nous personnalisons la langue et le moyen de transport
    router: new L.Routing.osrmv1({
        language: 'fr',
        profile: 'car', // car, bike, foot
    }),

    waypoints: [
        L.latLng(48.37259, -4.58709),
        L.latLng(48.36263, -4.56703)
    ],
    routeWhileDragging: true,

    geocoder: L.Control.Geocoder.nominatim()
	}).addTo(macarte)

    // On charge les tuiles depuis un serveur au choix, ici OpenStreetMap France
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte)
}








// Go to the delivery menu 
$(document).on("click", ".btnDelivery", function() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			document.body.innerHTML = this.responseText;
    	}
    }
     xhttp.open("GET", "http://localhost:7800/src/delivery.html");
 	 xhttp.send();
});



// REFRESH THE WHOLE PAGE
$(document).on("click", ".btnFullPage", function() {
	console.log("Ask for a page");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	document.body.innerHTML = this.responseText;
    	}
    }
     xhttp.open("GET", "http://localhost:7800/src/ajax_request.html");
     xhttp.send();

});


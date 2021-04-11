/*****************************************************
*
*	This script is used to navigate into our web page
*
******************************************************/



// // Load the navigation menu when starting the DOCUMENT
// $(document).ready(function() {
//   // Handler for .ready() called.
//   var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 	    if (this.readyState == 4 && this.status == 200) {
// 	      document.getElementById("mainContainer").innerHTML =
// 	      this.responseText;
//     	}
//     }
//      xhttp.open("GET", "http://localhost:7800/src/main_menu.html");
//      xhttp.send();
// });



// Open the butchers shop on btnButchers id button click
// /!\ : on utilise $(document).on("click", ".btnButchers", function() et PAS (.btnButchers).click()
$(document).on("click", ".btnButchers", function() {
	console.log("butchers pressed");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			document.body.innerHTML = this.responseText;
    	}
    }
     xhttp.open("GET", "http://localhost:7800/src/butchers_shop.html");
     xhttp.send();

});



// Go back to the main menu
$(document).on("click", ".btnMainMenu", function() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			document.body.innerHTML = this.responseText;
    	}
    }
     xhttp.open("GET", "http://localhost:7800/src/main_menu.html");
 	 xhttp.send();
});


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



$(document).on("click", "#btnBuy", function() {
	console.log("You are buying smthing.");
});



/*

// load needs jQuery min.js version
//$("#btnButchers").load("butchers_shop.html");

*/

$(document).on("click", ".select-mod-livraison", function() {
 	let mode = $(this).text();
    $("#currentModLivraison").html(mode);
});

$(document).on("click", ".select-mod-fct", function() {
 	let mode = $(this).text();
    $("#currentModFonctionnement").html(mode);
});


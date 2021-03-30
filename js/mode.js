$(".select-mod-livraison").click(function(){
    let mode = $(this).text();
    $("#currentModLivraison").html(mode);
});

$(".select-mod-fct").click(function(){
    let mode = $(this).text();
    $("#currentModFonctionnement").html(mode);
});
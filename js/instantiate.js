// Fichier JS pour instancier les articles du site

//Création des différents articles
var fraise = new Article("fraise", "5€", "1Kg", "../img/fraises.png");
var baguette = new Article("baguette", "2€", "800g", "../img/pain.png", "cat-pain");
var camembert = new Article("camembert", "1.5€", "200g", "../img/fromage.png", "cat-fromage");
var pizzaFromage = new Article("pizza 4 fromages", "3€", "500g", "../img/pizza.png", "cat-pizza");
var pinard = new Article("bon pinard", "3€", "70cl", "../img/vin.png", "cat-vin");
//Affichage des différents articles
var articlesToAppend = [fraise,baguette,camembert,pizzaFromage,pinard];
for (var i = 0; i < articlesToAppend.length; i++) {
	articlesToAppend[i].displayArticle(".insert-article");
}

//Affichage des articles par catégories
$(".toggleArticles").click(function(){
	$(".article-template").toggle();
});
$(".painBtn").click(function(){
	$(".cat-pain").toggle();
});
$(".fromageBtn").click(function(){
	$(".cat-fromage").toggle();
});
$(".pizzaBtn").click(function(){
	$(".cat-pizza").toggle();
});
$(".vinBtn").click(function(){
	$(".cat-vin").toggle();
});
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

//Liste pour stocker les catégories sélectionnées, afin d'éviter d'avoir plusieurs mêmes catégories dans la liste
const categoryList = [];

//Si aucun élement n'est présent dans la zone, cette dernière est cachée
function showSelectedRayons() {
	// Si la zone ne contient aucune catégorie, alors elle est cachée
	if ($(".insert-rayon").text().length == 0) {
		$('.toggleOnSelect').hide();
	}
	// Sinon, on demande/maintient l'affichage
	else {
		$('.toggleOnSelect').show();
	}
}

function appendCategory(category) {
	//Définit le template de la catégorie sélectionnée, contient le nom et un bouton pour la retirer de la liste
	let template = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
						<h7 class='categoryName'></h7>
				  		<button type="button" class="close removeArticleCategory" data-dismiss="alert" aria-label="Close">
				    		<span aria-hidden="true">&times;</span>
				  		</button>
					</div`;
	template = template.replace("<h7 class='categoryName'></h7>", "<h7 class='categoryName'>"+category+"</h7>");
	$(".insert-rayon").append(template);
	showSelectedRayons();
}

//Affichage de la catégorie sélectionnée
$(document).on("click", ".category", function() {
	let nomCategory = $(this).text();
	//On s'assure que la catégorie que choisie ne l'est pas déjà (qu'elle ne fait pas partie de la liste JS)
	if (!categoryList.includes(nomCategory)) {
		//On ajoute la catégorie à la liste JS
		categoryList.push(nomCategory);
		//On affiche la catégorie sur le site Web
		appendCategory(nomCategory);
	}
});

//Gestion du retrait d'une catégorie de la liste
$(document).on("click", ".removeArticleCategory", function() {
	//On vient chercher le nom de la catégorie contenue dans la balise h7 voisine (grâce à prev())
	const categoryToRemove = $(this).prev().text();
	//On s'assure que la catégorie était bien dans la liste JS
	if (categoryList.includes(categoryToRemove)) {
		//On retire l'occurence de cette catégorie dans la liste
		categoryList.splice(categoryList.indexOf(categoryToRemove), 1);
	}
	//On rajoute un petit délai avant l'appel de la fonction pour attendre l'animation de suppression de catégorie
	setTimeout(function() { showSelectedRayons(); }, 150);
});
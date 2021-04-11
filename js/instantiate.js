// Fichier JS pour instancier les articles du site

//Création des différents articles
	//Catégorie Pain
const painBoule = new Article("Boule de pain", "0,79€", "200g", "img/pain-boule.jpg", "cat-pain");
const painBaguette = new Article("Baguette de pain", "0,99€", "350g", "img/pain-baguette.jpg", "cat-pain");
const painPave = new Article("Pavé de pain", "1,50€", "400g", "img/pain-pave.jpg", "cat-pain");
const painNordique = new Article("Pain Nordique", "2,20€", "250g", "img/pain-nordique.jpg", "cat-pain");
	//Catégorie Patisserie
const patisserieMadeleine = new Article("Madeleines", "3€", "1Kg", "img/patisserie-madeleines.jpg", "cat-patisserie");
const patisserieBeignets = new Article("Beignets chocolat", "2,49€", "450g", "img/patisserie-beignets.jpg", "cat-patisserie");
const patisserieMillefeuille = new Article("Mille-feuille", "1,75€", "200g", "img/patisserie-millefeuille.jpg", "cat-patisserie");
const patisserieMuffins = new Article("Muffins", "3,5€", "1,5Kg", "img/patisserie-muffins.jpg", "cat-patisserie");
	//Catégorie Yaourt & Dessert
const dessertCalin = new Article("Yaourt Calin Extra", "1,50€", "1Kg", "img/dessert-calin.jpg", "cat-dessert");
const dessertDanette = new Article("Danette Chocolat", "2,50€", "250g", "img/dessert-danette.jpg", "cat-dessert");
const dessertVeloute = new Article("Veloute x8", "2,50€", "1,5Kg", "img/dessert-veloute.jpg", "cat-dessert");
const dessertMalo = new Article("Malo au chocolat", "3,50€", "500g", "img/dessert-malo.jpg", "cat-dessert");
	//Catégorie Fromage
const fromageCamembert = new Article("Camembert", "1,59€", "250g", "img/fromage-camembert.jpg", "cat-fromage");
const fromageComte = new Article("Comté", "3,68€", "220g", "img/fromage-comte.jpg", "cat-fromage");
const fromageEmmental = new Article("Emmental", "2,32€", "350g", "img/fromage-emmental.jpg", "cat-fromage");
const fromageChevre = new Article("Bûche de chèvre", "3,32€", "200g", "img/fromage-chevre.jpg", "cat-fromage");
	//Catégorie Pizza
const pizzaBolo = new Article("Pizza Bolognaise", "2,58€", "500g", "img/pizza-bolo.jpg", "cat-pizza");
const pizzaFromage = new Article("Pizza 3 fromages", "2,12€", "300g", "img/pizza-fromage.jpg", "cat-pizza");
const pizzaReine = new Article("Pizza Reine", "3,74€", "400g", "img/pizza-reine.jpg", "cat-pizza");
const pizzaTonno = new Article("Pizza Tonno", "1,79", "200g", "img/pizza-tonno.jpg", "cat-pizza");
	//Catégorie Surgel
const surgelBuns = new Article("Buns Jambon", "2€", "300g", "img/surgel-buns.jpg", "cat-surgel");
const surgelGyoza = new Article("Gyozas", "4,12€", "350g", "img/surgel-gyoza.jpg", "cat-surgel");
const surgelRaviole = new Article("Raviole", "1,73€", "270g", "img/surgel-raviole.jpg", "cat-surgel");
const surgelCouscous = new Article("Couscous", "4,41€", "500g", "img/surgel-couscous.jpg", "cat-surgel");
	//Catégorie Féculent
const feculentCrozet = new Article("Crozets", "2,47€", "1Kg", "img/feculent-crozet.jpg", "cat-feculent");
const feculentLinguine = new Article("Linguini", "1,20€", "500g", "img/feculent-linguine.jpg", "cat-feculent");
const feculentMousline = new Article("Purée Mousline", "2,70€", "840g", "img/feculent-mousline.jpg", "cat-feculent");
const feculentRiz = new Article("Riz Long Grain", "2,70€", "1,2Kg", "img/feculent-riz.jpg", "cat-feculent");
	//Catégorie Condiment
const condimentAlge = new Article("Sauce Algérienne", "1€", "500g", "img/condiment-alge.jpg", "cat-condiment");
const condimentKetchup = new Article("Sauce Ketchup", "1.87€", "800g", "img/condiment-ketchup.jpg", "cat-condiment");
const condimentMayo = new Article("Mayonnaise", "1,47€", "750g", "img/condiment-mayo.jpg", "cat-condiment");
const condimentMoutarde = new Article("Moutarde Dijon", "1,80€", "1Kg", "img/condiment-moutarde.jpg", "cat-condiment");
	//Catégorie Vin
const vinBourgogne = new Article("Vin Bourgogne", "8,47€", "75cl", "img/vin-rouge2.jpg", "cat-vin");
const vinBordeaux = new Article("Vin Bordeaux", "5,35", "75cl", "img/vin-rouge1.jpg", "cat-vin");
const vinRose = new Article("Vin Rosé", "4,65€", "75cl", "img/vin-rose.jpg", "cat-vin");
const vinBlanc = new Article("Vin Blanc", "3,90€", "75cl", "img/vin-blanc.jpg", "cat-vin");
	//Catégorie Soda
const sodaOrangina = new Article("Orangina", "2,20€", "1,5L", "img/soda-orangina.jpg", "cat-soda");
const sodaCoca = new Article("Coca-Cola", "1,80€", "1,5L", "img/soda-coca.jpg", "cat-soda");
const sodaLipton = new Article("Ice-Tea Lipton", "2,45€", "2L", "img/soda-lipton.jpg", "cat-soda");
const sodaLimonade = new Article("Limonade", "1,60€", "1,5L", "img/soda-limonade.jpg", "cat-soda");

//Affichage des différents articles11
var articlesToAppend = [painBoule, painBaguette, painPave, painNordique, patisserieMadeleine, patisserieBeignets, patisserieMuffins, patisserieMillefeuille, dessertDanette, dessertCalin, dessertVeloute, dessertMalo, fromageChevre, fromageEmmental, fromageComte, fromageCamembert, pizzaTonno, pizzaReine, pizzaFromage, pizzaBolo, surgelCouscous, surgelRaviole, surgelGyoza, surgelBuns, feculentMousline, feculentLinguine, feculentCrozet, feculentRiz, condimentMoutarde, condimentMayo, condimentKetchup, condimentAlge, vinBlanc, vinRose, vinBourgogne, vinBordeaux, sodaLimonade, sodaOrangina, sodaCoca, sodaLipton];
for (var i = 0; i < articlesToAppend.length; i++) {
	articlesToAppend[i].displayArticle(".insert-article");
}

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
	let removeClassToAdd = "rem-"+category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "").replace(/\\|\//g,"").replace(/&/g,"");
	//Définit le template de la catégorie sélectionnée, contient le nom et un bouton pour la retirer de la liste
	let template = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
						<h7 class='categoryName'></h7>
				  		<button type="button" class="close removeArticleCategory" data-dismiss="alert" aria-label="Close">
				    		<span aria-hidden="true">&times;</span>
				  		</button>
					</div`;
	template = template.replace("<h7 class='categoryName'></h7>", "<h7 class='categoryName'>"+category+"</h7>").replace("close removeArticleCategory", "close "+removeClassToAdd+" removeArticleCategory");
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
		//On ferme le sous-menu rayon
		$('.collapse').collapse('hide');
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

//Affichage des articles lors du click sur la catégorie associée
$(document).on("click", ".sel-pain", function() {
	$(".cat-pain").show();
});
$(document).on("click", ".sel-patisserie", function() {
	$(".cat-patisserie").show();
});
$(document).on("click", ".sel-dessert", function() {
	$(".cat-dessert").show();
});
$(document).on("click", ".sel-fromage", function() {
	$(".cat-fromage").show();
});
$(document).on("click", ".sel-pizza", function() {
	$(".cat-pizza").show();
});
$(document).on("click", ".sel-surgel", function() {
	$(".cat-surgel").show();
});
$(document).on("click", ".sel-feculent", function() {
	$(".cat-feculent").show();
});
$(document).on("click", ".sel-condiment", function() {
	$(".cat-condiment").show();
});
$(document).on("click", ".sel-vin", function() {
	$(".cat-vin").show();
});
$(document).on("click", ".sel-soda", function() {
	$(".cat-soda").show();
});

//Retire les articles associés à la catégorie que l'on retire lors du click sur le bouton retrait catégorie
$(document).on("click", ".rem-pains", function() {
	$(".cat-pain").hide();
});
$(document).on("click", ".rem-patisseries", function() {
	$(".cat-patisserie").hide();
});
$(document).on("click", ".rem-yaourtsdesserts", function() {
	$(".cat-dessert").hide();
});
$(document).on("click", ".rem-fromages", function() {
	$(".cat-fromage").hide();
});
$(document).on("click", ".rem-pizzas", function() {
	$(".cat-pizza").hide();
});
$(document).on("click", ".rem-platsprepares", function() {
	$(".cat-surgel").hide();
});
$(document).on("click", ".rem-feculents", function() {
	$(".cat-feculent").hide();
});
$(document).on("click", ".rem-condiments", function() {
	$(".cat-condiment").hide();
});
$(document).on("click", ".rem-vinsspiritueux", function() {
	$(".cat-vin").hide();
});
$(document).on("click", ".rem-sodas", function() {
	$(".cat-soda").hide();
});
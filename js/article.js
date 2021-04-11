//Classe Article pour afficher sur le site de courses
class Article {
	constructor(nom="Default", prix="1€", quantite="1Kg", image="../img/default.png", categorie='cat-default') {
		this._nom = nom;
		this._prix = prix;
		this._quantite = quantite;
		this._image = image;
		this._categorie = categorie;
		this._template = `<div class="col-2 article-template" style="display: none;">
        					<div class="card card-header">
								<div class="container-fluid p-0 m-0">
								  <div class="text-center">
								    <h5 class='d-inline'>Default</h5>
								    <button class="d-inline float-right btn btn-primary">+</button>
								  </div>
								</div>
        					</div>
            				<div class="card card-body">
  								<img src="../img/default.png" class="card-img-top" alt="...">
            				</div>
            				<div class="card card-footer">
            					<div class="d-flex flex-md-row flex-column justify-content-between text-center">
            						<h5 class="card-text">1€</h5>
            						<h6 class="card-text">3Kg</h6>
            					</div>
								<button type="button" class="btn btn-sm btn-outline-primary">Ajouter au panier</button>
            				</div>
        				</div>`
	}

	//Gestion du template selon les différents attributs de l'objet
	updateTemplate() {
		const templateToChange = this._template;
		const templateChanged = templateToChange.replace("<h5 class='d-inline'>Default</h5>", "<h5 class='d-inline'>"+this._nom+"</h5>").replace(">1€</h5>", ">"+this._prix+"</h5>").replace(">3Kg</h6>", ">"+this._quantite+"</h6>").replace("../img/default.png", this._image).replace("col-2 article-template", "col-2 article-template "+this._categorie);
		this._template = templateChanged;
	}

	//Affichage de l'article dans le selecteur choisi
	displayArticle(selector) {
		this.updateTemplate();
		$(selector).append(this._template);
	}
}

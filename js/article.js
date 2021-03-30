class Article {
	constructor(nom="Default", prix="1€", quantite="1Kg", image="../img/default.png", categories=[]) {
		this._nom = nom;
		this._prix = prix;
		this._quantite = quantite;
		this._image = image;
		this._categories = categories;
		this._template = `<div class="col-2">
        					<div class="card card-header">
        						<h5>Default</h5>
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

	updateTemplate() {
		const templateToChange = this._template;
		const templateChanged = templateToChange.replace("<h5>Default</h5>", "<h5>"+this._nom+"</h5>").replace(">1€</h5>", ">"+this._prix+"</h5>").replace(">3Kg</h6>", ">"+this._quantite+"</h6>").replace("../img/default.png", this._image);
		this._template = templateChanged;
	}

	displayArticle(selector) {
		this.updateTemplate();
		$(selector).append(this._template);
	}
}

var article = new Article("nomTest", "25€", "45Kg", "../img/fraises.png");
$(".testBtn").click(function(){
	article.displayArticle(".insert-article");
});
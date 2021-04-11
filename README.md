# Courses Pursuit

## Introduction
Ce repository GitHub contient notre travail réalisé dans le cadre de la partie Web du module de CAI. 
Il s'agit d'un site pour réaliser ses courses en ligne (type Drive).

## Membres du projet

- **Bénis Jean**
- **Sauvoux Timon**
- **Savy Josué**
- **Cuillandre Tony**

## Lancement du projet

**L'entièreté du développement s'est déroulée sur Chrome. L'utilisation d'un autre navigateur peut éventuellement causer des erreurs.**

Nous avons fait le choix d'utiliser un serveur local pour pouvoir réaliser nos différentes reqûetes AJAX. 
Nous avons arbitrairement décidé d'utiliser **Python** pour faire cela, bien qu'il soit possible de lancer le serveur de différentes manières.
**En revanche, il est impératif d'utiliser le port `7800` pour le serveur.**

Depuis un **terminal Linux**, voici la commande que nous utilisons :
```
python3 -m http.server 7800
```
Ensuite il suffit d'accéder à la page principale via le lien suivant :
```
http://localhost:7800
```

## Fonctionnalités
Il est possible d'afficher des articles par catégories. Cependant toutes les catégories n'ont pas forcément d'articles. Voici la liste des catégories contenant des articles :
* **Pains**
* **Pâtisseries**
* **Yaourts & Desserts**
* **Fromages**
* **Pizzas**
* **Plats préparés**
* **Féculents**
* **Condiments**
* **Vins**
* **Sodas**

Les différentes catégories sélectionnés s'affichent en temps réel sur la gauche.

Pour charger la page de la boucherie en temps réel, il faut appuyer sur la catégorie **Viandes**.

La validation du panier a été volontairement omise. Lorsque l'on clique sur le panier, on arrive directement sur la page livraison.

Il est possible d'ouvrir la chatbox pour discuter avec l'assistant personnalisé en appuyant sur le bouton bleu avec le casque et le micro.

Il est possible de changer les modes de fonctionnement et livraison en choisissant un des items de la liste.

## Problèmes connus
Certains problèmes sont toujours présents dans l'étât actuel du projet.

* Sur les différentes pages il est possbile de cliquer sur le titre du site et le logo pour revenir au menu principal. Cette fonctionnalité est opérationnelle malgré que le survol de la souris n'indique pas qu'un lien existe à cet endroit.

* Il est possible que certaines parties du site ne s'affichent pas. **Vider le cache du navigateur peut régler le problème. `(Ctrl + F5)`**

* Lorsque l'on effectue un retour sur la page principale, il n'est plus possible d'afficher des articles. **Il faut rafraichir la page pour résoudre le problème. `(F5)`**

* L'assistant personnalisé (la chatbox) présente des soucis d'affichage.

* Il n'est pas possible d'ajouter des articles dans le panier (manque de temps).
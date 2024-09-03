# Manipulation de données/tableaux en JS

> **Objectif pédagogique:**
> Les exercices suivants ont pour but de commencer à générer du HTML coté client.

## Exercice 4.1

La console c'est sympa 5 minutes, mais nous ce que l'on veut c'est envoyer du HTML !

Pour insérer des balises HTML dans la page, nous allons utiliser des fonctions **natives** du navigateur:

```js
// crée en mémoire une structure de données pour stocker un div
const el = document.createElement('div');
el.innerHTML =  'Je suis un div';
// insère le div dans le DOM (cela l'affiche)
document.body.appendChild(el);
```

1. Copiez/collez ce code dans la console. Est-ce le résultat attendu ?
2. Maintenant copiez/collez ce code dans le ficher `script.js` après le code déjà présent. Est-ce le résultat attendu ?
3. La fonction `ready` du fichier `script.js` prend en paramètre une fonction qui sera appelée quand le navigateur sera prêt. Déplacez le code ci-dessus dans une fonction appelée `main` et utilisez `ready` pour que cette fonction soit appelée.
4. Expliquez pourquoi certains cas fonctionnent et pas d'autres.

## Exercice 4.2

Affichez dans la page HTML la liste des villes du 74, chacune de ces villes sous forme de div

## Exercice 4.3

Modifiez l'exercice précédent pour permettre de choisir le département que l'on souhaite afficher avec un  `input`  ou un  `select `et ses `options` par exemple). Une fois le département sélectionné vous afficherez chacune des villes dans une [card](https://developer.mozilla.org/fr/docs/Web/CSS/Layout_cookbook/Card)

## Exercice 4.4

Créer un dashboard permettant d'explorer les données. Vous pouvez par exemple :

1. Créer une barre de recherche permettant de filtrer les villes par nom.
2. Créer un bouton permettant des trier les villes par ordre alphabétique et/ ou par nombre d'habitants
3. Créer un [slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp) permettant de n'afficher que les villes ayant un certain nombre d'habitants.
4. Réflechissez aux options de filtrage et d'affichage qui vous semblent utiles et rajoutez les !

## Fin

C'est tout...pour le moment.

Retenez bien qu'en décomposant son code en sous-fonctions simples, on en facilite la lecture et la maintenance.

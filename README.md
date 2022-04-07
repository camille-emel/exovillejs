# Manipulation de données/tableaux en JS

>**Objectif pédagogique:**
> Les exercices suivants ont pour but d'apprendre à utiliser les méthodes natives des tableaux en JS.

## Exercice 3.1

La fonction [`Array.map`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) permet de d'appliquer une fonction sur chaque élément d'un tableau et retourne un tableau de résultats.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

1. En utilisant les fonctions `getCitiesByDept`, `Array.map` et `afficheCommune` stockez dans un tableau `cities74` uniquement le nom des villes de Haute-Savoie
2. Affichez ce tableau dans la console

## Exercice 3.2

Si la fonction `Array.filter` retourne TOUS les éléments pour lesquels la fonction de test (appelée prédicat) renvoie vrai, la fonction [`Array.find`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find) retourne uniquement le premier.

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

1. Écrivez une fonction `getCityByName` qui retourne les infos sur une ville à partir de son nom
2. Afficher les infos pour "Annecy"

## Exercice 3.3 - bonus

Pour ne pas oublier l'algo 😉, écrire une fonction qui retourne le nombre d'habitants d'un département.


## Ensuite

Faire valider par le formateur.

Pour continuer, basculez sur la branche `exo-4`

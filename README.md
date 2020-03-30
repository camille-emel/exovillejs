# Manipulation de données/tableaux en JS

>**Objectif pédagogique:**
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

Affichez dans la page HTML la liste des villes du 74 sous forme de div

## Exercice 4.3

Modifiez l'exercice précédent pour afficher un `select` et ses `option`s avec ces mêmes villes.

## Exercice 4.4 - bonus

1. Modifiez votre code, pour faire une fonction qui va générer un `select` à partir d'une liste d'objets de la forme `{label, value}`.
2. Utilisez la fonction `Array.map` pour mettre les donnée de l'exercice 4.3 dans ce format (label=nom de la ville, value=code de la ville) puis passez les à votre fonction qui génère un `select`.

## Fin

C'est tout...pour le moment.

Retenez bien qu'en décomposant son code en sous-fonctions simples, on en facilite la lecture et la maintenance.



// // Système de constante et variable
// // Différent types

// const firstName: string = 'Kévin';
// const lastName: string = 'Wolff'; 

// const age: number = 30

// const isHeWakeUp: boolean = false;

// // Tableau
// const learners: any[] = ['Kevin', 30, true]

// // Objet
// const learner: any = {
//     name: 'Kevin',
//     age: 30,
//     wakeUp: false
// }

// Exercice # 0

// À la racine du répertoire de ce projet, supprimer le dossier .git, vous pouvez exécuter la commande "git status" pour vérifier si git est initialiser ou non.
// Toujours à la racine du répertoire de ce projet, initialiser git et faites les commandes nécessaires pour pousser ce projet dans un dépot Github.
// Partager l'adresse de ce nouveau repo, contenant ce projet, au formateur.

// Exercice # 1

// - Créer une fonction Javascript avec deux constantes nommées : "address" et "zipCode", la première est une string, la seconde est un nombre, veillez à bien les typer.
// - Créer une constante nommée "addressFull" contenant la concaténation de ces deux variables, veillez à bien les typer.
// - Faire s'afficher la constante "addressFull" dans la console du navigateur.
// Exo #1 

const address: string = "Barberaz";
const zipCode: number = 73000;

const addressFull: string =`${address} ${zipCode}`;

function Addresse(): {
    console.log(addressFull);

}

// Exercice # 2

// - Créer une fonction Javascript avec une constante contenant un tableau de vos 5 pays favoris, veillez à bien le typer.
// - À l'aide d'une boucle, itérrer dans ce tableau et afficher chaque valeur dans la console du navigateur.

// EXO #2

const favCountries: string[] = ["France", "Portugal", "Argentine", "Espagne", "Russie"]; 

function favCountry() {
    for(let i = 0; i < favCountry.length; i++) {
        console.log(favCountry[i]);
    }

}


// Exercice # 3

// - Créer une fonction Javascript pour décomposer une string, exemple : ma phrase : "developpement", resultat souhaité : [d, e, v, e, l, o, p, p, e, m, e, n, t]
// - Le resultat est stocké dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.

// EXO #3

const letters: string[] = ["d", "e", "v", "e", "l", "o", "p", "p", "e", "m", "e", "n", "t"];

function joinString(arr: string[]): string {
  return arr.join("");
}

const result: string = joinString(letters);
// console.log(result);


// Exercice # 4:2

// - Créer une fonction Javascript pour recomposer une string, exemple : ma phrase décomposée : [d, e, v, e, l, o, p, p, e, m, e, n, t], résultat souhaité : "developpement"
// - Le resultat est stockée dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.

function recomposeString(array) {
    return array.join("");
  }
  
  const decomposedString = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'm', 'e', 'n', 't'];
  const result = recomposeString(decomposedString);

//   console.log(result);


// Exercice # 4:1

// - Créer une fonction Javascript avec une constante nommée "country", cette constante est typée grâce à Typescript et contient le nom d'un pays.
// - Faire s'afficher le contenu de la constante dans la console du navigateur.

// EXO #4:1

const country: string = "France";

function Country(): {
    console.log(country);

}



// Exercice # 5

// - Créer une fonction Javascript avec deux constantes nommées : "firstName" et "lastName", ces deux constantes sont typées grâce à Typescript et contiennent vos nom / prénom.
// - Faire s'afficher la concaténation de ces deux variables dans la console du navigateur.



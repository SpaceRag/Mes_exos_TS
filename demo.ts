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

const addressFull: string = `${address} ${zipCode}`; //! Ou : const addressFull: string = address '+' zipCode;

function Addresse() {
    console.log(addressFull);

}
// Addresse()

// Exercice # 2

// - Créer une fonction Javascript avec une constante contenant un tableau de vos 5 pays favoris, veillez à bien le typer.
// - À l'aide d'une boucle, itérrer dans ce tableau et afficher chaque valeur dans la console du navigateur.

// EXO #2

const favCountries: string[] = ["France", "Portugal", "Argentine", "Espagne", "Russie"];

function favCountry() {
    for (let i = 0; i < favCountry.length; i++) {
        console.log(favCountry[i]);
    }

}
// favCountry()


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
const result: any = recomposeString(decomposedString);

//   console.log(result);


// Exercice # 4:1

// - Créer une fonction Javascript avec une constante nommée "country", cette constante est typée grâce à Typescript et contient le nom d'un pays.
// - Faire s'afficher le contenu de la constante dans la console du navigateur.

// EXO #4:1

function exercice_4_1() {
    const country: string = "France";

    function Country(): {
    console.log(country);

    }
}
// exercice_4_1()


// Exercice # 5

// - Créer une fonction Javascript avec deux constantes nommées : "firstName" et "lastName", ces deux constantes sont typées grâce à Typescript et contiennent vos nom / prénom.
// - Faire s'afficher la concaténation de ces deux variables dans la console du navigateur.

function exercice_5() {
    const firstName: string = "Arno";
    const lastName: string = "Pimenta";

    console.log(firstName',', lastName);

}

// exercice_5()


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// PART III

// Exercice # 1

// Créer une constante "data", elle contient un tableau avec les valeurs suivantes : ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'], veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "data" et n'afficher dans la console du navigateur que les prénoms avec moins ou egale 5 lettres.

function exercice_1() {

    const data: string[] = ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'];

    for (let i = 0; i < data.length; i++) {
        if (data[i].length <= 5) {
            console.log(data[i]);
        }
    }

}

// exercice_1()





// Exercice # 2

// Créer une CONSTANTE "countries", elle contient un tableau avec 5 pays de votre choix, veillez à bien le typer.
// Créer une VARIABLE "sentence", elle contient une string vide, veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "countries" et ajouter chaque valeur dans la string de la variable "sentence" avec une virgule entre chaque.
// Lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Attendu : "France, Allemagne, Italie, Suisse, Belgique"

function exercice_2() {
    const countries: string[] = ["France", "Portugal", "Argentine", "Espagne", "Russie"];
    let sentence: string = "";

    for (let i = 0; i < countries.length; i++) {
        sentence += countries[i];
        if (i < countries.length - 1) {
            sentence += ",";
        }
    }

}
// exercice_2()


// Exercice # 3

// Créer une constante "numbers", elle contient le tableau suivant [123, 999, 340, 12390], veillez à bien le typer.
// Créer une variable "results", elle contient un tableau vide. Ce tableau servira plus tard, veillez à bien le typer.
// À l'aide d'une boucle multiplier chaque valeur du tableau "numbers" par 180.
// Vous stockerez chaque résultat dans le tableau "results", lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Aide : regarder sur Google comment insérer des valeurs dans un tableau, ici on cherche à pousser dans le tableau "results"

function exercice_3() {
    const numbers: number[] = [123, 99, 340, 1239];
    let results: number[] = [];
    
    for(let i = 0; i < numbers.length; i++) {
        results.push(numbers[i] * 180);
    }
    console.log(results);
}
// exercice_3()

// Exercice # 4

// Créer une constante contenant l'objet suivant : { name: 'Marchal', surname: 'Mickeal', age: 19 }, veillez à bien le typer.
// À l'aide d'une condition vérifier si Mickeal est bien majeur, si c'est le cas afficher un message dans la console du navigateur.

function exercice_4() {
    const userinfo: { name: string, surname: string, age: number } = { name: 'Marchal', surname: 'Mickeal', age: 19 };
     if (userinfo.surname === "Mickea" && userinfo.age >= 18) {
        console.log("Mickael n'est pas majeur");
     } else {
        console.log("Mickael n'est pas majeur");
     }
}
// exercice_4()



// Exercice # 5

// Créer une constante contenant un objet, cet objet contient les clés suivantes: "nom", "prénom", "age". Vous êtes libres de choisir les valeurs associées, veillez à bien typer.
// Exploitez l'objet de sorte à afficher dans le navigateur une phrase se présentant comme cela : "bonjour mon nom est <insérer nom> <insérer prénom>, j'ai <insérer age>"

function exercice_5() {
    const userinfo: {name: string, surname: string, age: number} = {name : 'Pimenta', surname: "Arno", age:28 };
    console.log(`Bonjour, mon nom est ${userinfo.name} ${userinfo.surname}, j'ai ${userinfo.age} ans.`)

}
// exercice_5()


// Exercice # 6

// Créer une constante contenant un tableau de 5 objets, chaque objet à la forme de celui de l'exercice # 5, veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau d'objet et afficher dans la console du navigateur la même phrase que l'exercice # 5 pour chaque valeur du tableau.

function exercice_6() {
   type UserTab = {
        firstName: string;
        lastName: string;
        age: number;
      }
      
      const myArray: UserTab[] = [
        { firstName: 'John', lastName: 'Doe', age: 25 },
        { firstName: 'Jane', lastName: 'Smith', age: 30 },
        { firstName: 'Bob', lastName: 'Johnson', age: 45 },
        { firstName: 'Alice', lastName: 'Williams', age: 22 },
        { firstName: 'Charlie', lastName: 'Brown', age: 38 }
      ];
      for (const userinfo of myArray) {
        console.log(`Bonjour mon nom est ${userinfo.lastName} ${userinfo.firstName}, j'ai ${userinfo.age} ans.`);
    }
      
}

exercice_6()
// Exercice # 7

// Pousser ce que vous avez produit dans votre repo Github et partagez moi l'url ;)

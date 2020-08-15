// Zjisti lang a level z adresy
var adresa = window.location.search;
var parametr1 = "lang";
var parametr2 = "level";
var lang = "eng";
var level = 1;

parametr1 = parametr1 + "=";
var pos1 = adresa.indexOf(parametr1);
if (pos1 !== -1) {
    var pos2 = adresa.indexOf("&", pos1);
    if (pos2 === -1) {
        pos2 = adresa.length;
    }
    lang = adresa.substring(pos1+parametr1.length, pos2);
}

parametr2 = parametr2 + "=";
var pos1 = adresa.indexOf(parametr2);
if (pos1 !== -1) {
    var pos2 = adresa.indexOf("&", pos1);
    if (pos2 === -1) {
        pos2 = adresa.length;
    }
    level = adresa.substring(pos1+parametr2.length, pos2);
}

var dictionary = {
    "eng": {
        "1": [
            {first: "Ahoj", second: "Hi"},
            {first: "Dobré ráno", second: "Good morning"},
            {first: "Děkuji", second: "Thank you"},
            {first: "Prosím", second: "Please"},
            {first: "Promiňte", second: "Sorry"},
            {first: "Nerozumím", second: "I don't understand"},
            {first: "Ano", second: "Yes"},
            {first: "Ne", second: "No"},
            {first: "Žena", second: "Woman"},
            {first: "Muž", second: "Man"},
            {first: "Kluk", second: "Boy"},
            {first: "Holka", second: "Girl"}
        ],
        "2": [
            {first: "Dům", second: "House"},
            {first: "Pes", second: "Dog"},
            {first: "Kočka", second: "Cat"},
            {first: "Auto", second: "Auto"},
            {first: "Stůl", second: "Table"},
            {first: "Židle", second: "Chair"},
            {first: "Voda", second: "Water"},
            {first: "Čaj", second: "Tea"},
            {first: "Káva", second: "Coffee"},
            {first: "Kolo", second: "Bicycle"},
            {first: "Strom", second: "Tree"},
            {first: "Květina", second: "Flower"}
        ],
        "3": [
            {first: "Jedna", second: "One"},
            {first: "Dvě", second: "Two"},
            {first: "Tři", second: "Three"},
            {first: "Čtyři", second: "Four"},
            {first: "Pět", second: "Five"},
            {first: "Černá", second: "Black"},
            {first: "Bílá", second: "White"},
            {first: "Modrá", second: "Blue"},
            {first: "Červená", second: "Red"},
            {first: "Žlutá", second: "Yellow"},
            {first: "Oranžová", second: "Orange"},
            {first: "Zelená", second: "Green"}
        ]
    },
    "ger": {
        "1": [
            {first: "Ahoj", second: "Hallo"},
            {first: "Dobré ráno", second: "Guten Morgen"},
            {first: "Děkuji", second: "Danke"},
            {first: "Prosím", second: "Bitte"},
            {first: "Promiňte", second: "Entschuldigung"},
            {first: "Nerozumím", second: "Ich verstehe nicht"},
            {first: "Ano", second: "Ja"},
            {first: "Ne", second: "Nein"},
            {first: "Žena", second: "die Frau"},
            {first: "Muž", second: "der Mann"},
            {first: "Kluk", second: "der Junge"},
            {first: "Holka", second: "das Mädchen"}
        ],
        "2": [
            {first: "Dům", second: "das Haus"},
            {first: "Pes", second: "der Hund"},
            {first: "Kočka", second: "die Katze"},
            {first: "Auto", second: "das Auto"},
            {first: "Stůl", second: "der Tisch"},
            {first: "Židle", second: "die Stühle"},
            {first: "Voda", second: "das Wasser"},
            {first: "Čaj", second: "der Tee"},
            {first: "Káva", second: "der Kaffee"},
            {first: "Kolo", second: "das Fahrrad"},
            {first: "Strom", second: "der Baum"},
            {first: "Květina", second: "die Blume"}
        ],
        "3": [
            {first: "Jedna", second: "Eins"},
            {first: "Dvě", second: "Zwei"},
            {first: "Tři", second: "Drei"},
            {first: "Čtyři", second: "Vier"},
            {first: "Pět", second: "Fünf"},
            {first: "Černá", second: "Schwarz"},
            {first: "Bílá", second: "Weiß"},
            {first: "Modrá", second: "Blau"},
            {first: "Červená", second: "Rot"},
            {first: "Žlutá", second: "Gelb"},
            {first: "Oranžová", second: "Orange"},
            {first: "Zelená", second: "Grüne"}
        ]
    },
    "sp": {
        "1": [
            {first: "Ahoj", second: "Hola"},
            {first: "Dobré ráno", second: "Buenos días"},
            {first: "Děkuji", second: "Gracias"},
            {first: "Prosím", second: "Por favor"},
            {first: "Promiňte", second: "Perdona"},
            {first: "Nerozumím", second: "No entiendo"},
            {first: "Ano", second: "Sí"},
            {first: "Ne", second: "No"},
            {first: "Žena", second: "Una mujer"},
            {first: "Muž", second: "Un hombre"},
            {first: "Kluk", second: "Un chico"},
            {first: "Holka", second: "Una chica"}
        ],
        "2": [
            {first: "Dům", second: "Una casa"},
            {first: "Pes", second: "Un perro"},
            {first: "Kočka", second: "Un gato"},
            {first: "Auto", second: "Un coche"},
            {first: "Stůl", second: "Una mesa"},
            {first: "Židle", second: "Una silla"},
            {first: "Voda", second: "Un agua"},
            {first: "Čaj", second: "Un té"},
            {first: "Káva", second: "Un café"},
            {first: "Kolo", second: "Una bicicleta"},
            {first: "Strom", second: "Un árbol"},
            {first: "Květina", second: "Una flor"}
        ],
        "3": [
            {first: "Jedna", second: "Uno"},
            {first: "Dvě", second: "Dos"},
            {first: "Tři", second: "Tres"},
            {first: "Čtyři", second: "Cuatro"},
            {first: "Pět", second: "Cinco"},
            {first: "Černá", second: "Salut"},
            {first: "Bílá", second: "Blanco"},
            {first: "Modrá", second: "Azul"},
            {first: "Červená", second: "Rojo"},
            {first: "Žlutá", second: "Amarillo"},
            {first: "Oranžová", second: "Naranja"},
            {first: "Zelená", second: "Verde"}
        ]
    },
    "fran": {
        "1": [
            {first: "Ahoj", second: "Salut"},
            {first: "Dobré ráno", second: "Bonjour"},
            {first: "Děkuji", second: "Merci"},
            {first: "Prosím", second: "S'il vous plaît"},
            {first: "Promiňte", second: "Désolé"},
            {first: "Nerozumím", second: "Je ne comprends pas"},
            {first: "Ano", second: "Oui"},
            {first: "Ne", second: "Non"},
            {first: "Žena", second: "Une femme"},
            {first: "Muž", second: "Un homme"},
            {first: "Kluk", second: "Un garçon"},
            {first: "Holka", second: "Une fille"}
        ],
        "2": [
            {first: "Dům", second: "Une maison"},
            {first: "Pes", second: "Un chien"},
            {first: "Kočka", second: "Un chat"},
            {first: "Auto", second: "Une voiture"},
            {first: "Stůl", second: "Une table"},
            {first: "Židle", second: "Une chaise"},
            {first: "Voda", second: "De l'eau"},
            {first: "Čaj", second: "Un thé"},
            {first: "Káva", second: "Un thé"},
            {first: "Kolo", second: "Une bicyclette"},
            {first: "Strom", second: "Un arbre"},
            {first: "Květina", second: "Une fleur"}
        ],
        "3": [
            {first: "Jedna", second: "Un"},
            {first: "Dvě", second: "Deux"},
            {first: "Tři", second: "Trois"},
            {first: "Čtyři", second: "Quatre"},
            {first: "Pět", second: "Cinq"},
            {first: "Černá", second: "Noir"},
            {first: "Bílá", second: "Blanc"},
            {first: "Modrá", second: "Bleu"},
            {first: "Červená", second: "Rouge"},
            {first: "Žlutá", second: "Jaune"},
            {first: "Oranžová", second: "Orange"},
            {first: "Zelená", second: "Vert"}
        ]
    },
};




var wordElements;
wordElements = document.querySelectorAll(".word");

var wordsRemaining = 0;

var krok;
krok = 1;
var word1;
var word2;

var allWords = dictionary[lang][level];
if (allWords === undefined) {
    // Pokud nenajdes jazyk a uroven, vezmi prvni ze slovniku
    var prvniJazyk = dictionary[Object.keys(dictionary)[0]];
    allWords = prvniJazyk[Object.keys(prvniJazyk)[0]];
}

var pocetSlovNaRozdani = Math.min(wordElements.length/2, allWords.length);
for (var index = 0; index < pocetSlovNaRozdani; index++) {
    var w = allWords[index];
    wordsRemaining = wordsRemaining + 1;
    var position;
    while (true) {
        position = Math.floor(Math.random() * wordElements.length);
        if (wordElements[position].textContent === "xxx") {
            wordElements[position].textContent = w.first;
            wordElements[position].classList.add("c" + index);
            break;
        }
    }
    while (true) {
        position = Math.floor(Math.random() * wordElements.length);
        if (wordElements[position].textContent === "xxx") {
            wordElements[position].textContent = w.second;
            wordElements[position].classList.add("c" + index);
            break;
        }
    }
}

function priKliknutiNaWord(event) {
    var word = event.target;
    if (krok === 1) {
        word1 = event.target;
        word.classList.add("selectedFirst");

        krok = 2;
    } else if (!word.classList.contains("selectedFirst")) {
        word2 = event.target;
        word.classList.add("selectedSecond");
        krok = 1;
        var word1Code;
        word1Code = word1.classList[1];
        console.log(word1Code);
        var word2Code;
        word2Code = word2.classList[1];
        console.log(word2Code);

        if (word1Code === word2Code) {
            word1.classList.remove("selectedFirst");
            word2.classList.remove("selectedSecond");
            word1.classList.add("hide");
            word2.classList.add("hide");
            wordsRemaining = wordsRemaining - 1;
            if (wordsRemaining === 0) {
                window.location = "vyhral.html";
            }

        } else {
            word1.classList.remove("selectedFirst");
            word2.classList.remove("selectedSecond");

        }
    }
}










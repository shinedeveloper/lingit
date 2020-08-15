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
            {first: "Ahoj", firstSound: "cs/1/Ahoj.mp3", second: "Hi", secondSound: "eng/1/Hi.mp3"},
            {first: "Dobré ráno", firstSound: "cs/1/Dobre_rano.mp3", second: "Good morning", secondSound: "eng/1/Good_morning.mp3"},
            {first: "Děkuji", firstSound: "cs/1/Dekuji.mp3", second: "Thank you", secondSound: "eng/1/Thank_you.mp3"},
            {first: "Prosím", firstSound: "cs/1/Prosim.mp3", second: "Please", secondSound: "eng/1/Please.mp3"},
            {first: "Promiňte", firstSound: "cs/1/Prominte.mp3", second: "Sorry", secondSound: "eng/1/Sorry.mp3"},
            {first: "Nerozumím", firstSound: "cs/1/Nerozumim.mp3", second: "I don't understand", secondSound: "eng/1/I_dont_understand.mp3"},
            {first: "Ano", firstSound: "cs/1/Ano.mp3", second: "Yes", secondSound: "eng/1/Yes.mp3"},
            {first: "Ne", firstSound: "cs/1/Ne.mp3", second: "No", secondSound: "eng/1/No.mp3"},
            {first: "Žena", firstSound: "cs/1/Zena.mp3", second: "Woman", secondSound: "eng/1/Woman.mp3"},
            {first: "Muž", firstSound: "cs/1/Muz.mp3", second: "Man", secondSound: "eng/1/Man.mp3"},
            {first: "Kluk", firstSound: "cs/1/Kluk.mp3", second: "Boy", secondSound: "eng/1/Boy.mp3"},
            {first: "Holka", firstSound: "cs/1/Holka.mp3", second: "Girl", secondSound: "eng/1/Girl.mp3"},
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
            {first: "Ahoj", firstSound: "cs/1/Ahoj.mp3", second: "Hallo", secondSound: "ger/1/Hallo.mp3"},
            {first: "Dobré ráno", firstSound: "cs/1/Dobre_rano.mp3", second: "Guten Morgen", secondSound: "ger/1/Guten_Morgen.mp3"},
            {first: "Děkuji", firstSound: "cs/1/Dekuji.mp3", second: "Danke", secondSound: "ger/1/Danke.mp3"},
            {first: "Prosím", firstSound: "cs/1/Prosim.mp3", second: "Bitte", secondSound: "ger/1/Bitte.mp3"},
            {first: "Promiňte", firstSound: "cs/1/Prominte.mp3", second: "Entschuldigung", secondSound: "ger/1/Entschuldigung.mp3"},
            {first: "Nerozumím", firstSound: "cs/1/Nerozumim.mp3", second: "Ich verstehe nicht", secondSound: "ger/1/Ich_verstehe_nicht.mp3"},
            {first: "Ano", firstSound: "cs/1/Ano.mp3", second: "Ja", secondSound: "ger/1/Ja.mp3"},
            {first: "Ne", firstSound: "cs/1/Ne.mp3", second: "Nein", secondSound: "ger/1/Nein.mp3"},
            {first: "Žena", firstSound: "cs/1/Zena.mp3", second: "die Frau", secondSound: "ger/1/die_Frau.mp3"},
            {first: "Muž", firstSound: "cs/1/Muz.mp3", second: "der Mann", secondSound: "ger/1/der_Mann.mp3"},
            {first: "Kluk", firstSound: "cs/1/Kluk.mp3", second: "der Junge", secondSound: "ger/1/der_Junge.mp3"},
            {first: "Holka", firstSound: "cs/1/Holka.mp3", second: "das Mädchen", secondSound: "ger/1/das_Madchen.mp3"}
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
            {first: "Ahoj", firstSound: "cs/1/Ahoj.mp3", second: "Hola", secondSound: "sp/1/Hola.mp3"},
            {first: "Dobré ráno", firstSound: "cs/1/Dobre_rano.mp3", second: "Buenos días", secondSound: "sp/1/Buenos_dias.mp3"},
            {first: "Děkuji", firstSound: "cs/1/Dekuji.mp3", second: "Gracias", secondSound: "sp/1/Gracias.mp3"},
            {first: "Prosím", firstSound: "cs/1/Prosim.mp3", second: "Por favor", secondSound: "sp/1/Por_favor.mp3"},
            {first: "Promiňte", firstSound: "cs/1/Prominte.mp3", second: "Perdona", secondSound: "sp/1/Perdona.mp3"},
            {first: "Nerozumím", firstSound: "cs/1/Nerozumim.mp3", second: "No entiendo", secondSound: "sp/1/No entiendo.mp3"},
            {first: "Ano", firstSound: "cs/1/Ano.mp3", second: "Sí", secondSound: "sp/1/Si.mp3"},
            {first: "Ne", firstSound: "cs/1/Ne.mp3", second: "No", secondSound: "sp/1/No.mp3"},
            {first: "Žena", firstSound: "cs/1/Zena.mp3", second: "Una mujer", secondSound: "sp/1/Una mujer.mp3"},
            {first: "Muž", firstSound: "cs/1/Muz.mp3", second: "Un hombre", secondSound: "sp/1/Un hombre.mp3"},
            {first: "Kluk", firstSound: "cs/1/Kluk.mp3", second: "Un chico", secondSound: "sp/1/Un chico.mp3"},
            {first: "Holka", firstSound: "cs/1/Holka.mp3", second: "Una chica", secondSound: "sp/1/Una chica.mp3"}
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
            {first: "Ahoj", firstSound: "cs/1/Ahoj.mp3", second: "Salut", secondSound: "fran/1/Salut.mp3"},
            {first: "Dobré ráno", firstSound: "cs/1/Dobre_rano.mp3", second: "Bonjour", secondSound: "fran/1/Bonjour.mp3"},
            {first: "Děkuji", firstSound: "cs/1/Dekuji.mp3", second: "Merci", secondSound: "fran/1/Merci.mp3"},
            {first: "Prosím", firstSound: "cs/1/Prosim.mp3", second: "S'il vous plaît", secondSound: "fran/1/S_il vous plait.mp3"},
            {first: "Promiňte", firstSound: "cs/1/Prominte.mp3", second: "Désolé", secondSound: "fran/1/Desole.mp3"},
            {first: "Nerozumím", firstSound: "cs/1/Nerozumim.mp3", second: "Je ne comprends pas", secondSound: "fran/1/Je ne comprends pas.mp3"},
            {first: "Ano", firstSound: "cs/1/Ano.mp3", second: "Oui", secondSound: "fran/1/Oui.mp3"},
            {first: "Ne", firstSound: "cs/1/Ne.mp3", second: "Non", secondSound: "fran/1/Non.mp3"},
            {first: "Žena", firstSound: "cs/1/Zena.mp3", second: "Une femme", secondSound: "fran/1/Une femme.mp3"},
            {first: "Muž", firstSound: "cs/1/Muz.mp3", second: "Un homme", secondSound: "fran/1/Un homme.mp3"},
            {first: "Kluk", firstSound: "cs/1/Kluk.mp3", second: "Un garçon", secondSound: "fran/1/Un garcon.mp3"},
            {first: "Holka", firstSound: "cs/1/Holka.mp3", second: "Une fille", secondSound: "fran/1/Une fille.mp3"}
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

var zvukovyElement = document.querySelector("#vyslovnost");

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
            if (w.firstSound !== undefined) {
                wordElements[position].dataset.vyslovnost = w.firstSound;
            }
            wordElements[position].classList.add("c" + index);
            break;
        }
    }
    while (true) {
        position = Math.floor(Math.random() * wordElements.length);
        if (wordElements[position].textContent === "xxx") {
            wordElements[position].textContent = w.second;
            if (w.secondSound !== undefined) {
                wordElements[position].dataset.vyslovnost = w.secondSound;
            }
            wordElements[position].classList.add("c" + index);
            break;
        }
    }
}

function priKliknutiNaWord(event) {
    var word = event.target;

    if (word.dataset.vyslovnost !== undefined) {
        zvukovyElement.src = word.dataset.vyslovnost;
        zvukovyElement.play();
    }

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
        var word2Code;
        word2Code = word2.classList[1];

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










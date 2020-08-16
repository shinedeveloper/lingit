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
            {first: "Dům", firstSound: "cs/2/Dum.mp3", second: "House", secondSound: "eng/2/House.mp3"},
            {first: "Pes", firstSound: "cs/2/Pes.mp3", second: "Dog", secondSound: "eng/2/Dog.mp3"},
            {first: "Kočka", firstSound: "cs/2/Kocka.mp3", second: "Cat", secondSound: "eng/2/Cat.mp3"},
            {first: "Auto", firstSound: "cs/2/Auto.mp3", second: "Auto", secondSound: "eng/2/Auto.mp3"},
            {first: "Stůl", firstSound: "cs/2/Kolo.mp3", second: "Table", secondSound:"eng/Table.mp3"},
            {first: "Židle", firstSound: "cs/2/Zidle.mp3", second: "Chair", secondSound: "eng/2/Chair.mp3"},
            {first: "Voda", firstSound: "cs/2/Voda.mp3", second: "Water", secondSound: "eng/2/Water.mp3"},
            {first: "Čaj", firstSound: "cs/2/Caj.mp3", second: "Tea", secondSound: "eng/2/Tea.mp3"},
            {first: "Káva", firstSound: "cs/2/Kava.mp3", second: "Coffee", secondSound: "eng/2/Coffee.mp3"},
            {first: "Kolo", firstSound: "cs/2/Kolo.mp3", second: "Bicycle", secondSound: "eng/2/Bicycle.mp3"},
            {first: "Strom", firstSound: "cs/2/Strom.mp3", second: "Tree", secondSound: "eng/2/Tree.mp3"},
            {first: "Květina", firstSound: "cs/2/Kvetina.mp3", second: "Flower", secondSound: "eng/2/Flower.mp3"}
        ],
        "3": [
            {first: "Jedna", firstSound: "cs/3/Jedna.mp3", second: "One", secondSound: "eng/3/One.mp3"},
            {first: "Dvě", firstSound: "cs/3/Dve.mp3", second: "Two", secondSound: "eng/3/Two.mp3"},
            {first: "Tři", firstSound: "cs/3/Tri.mp3", second: "Three", secondSound: "eng/3/Three.mp3"},
            {first: "Čtyři", firstSound: "cs/3/Ctyri.mp3", second: "Four", secondSound: "eng/3/Four.mp3"},
            {first: "Pět", firstSound: "cs/3/Pet.mp3", second: "Five", secondSound: "eng/3/Five.mp3"},
            {first: "Černá", firstSound: "cs/3/Cerna.mp3", second: "Black", secondSound: "eng/3/Black.mp3"},
            {first: "Bílá", firstSound: "cs/3/Bila.mp3", second: "White", secondSound: "eng/3/White.mp3"},
            {first: "Modrá", firstSound: "cs/3/Modra.mp3", second: "Blue", secondSound: "eng/3/Blue.mp3"},
            {first: "Červená", firstSound: "cs//3/Cervena.mp3", second: "Red", secondSound: "eng/3/Red.mp3"},
            {first: "Žlutá", firstSound: "cs/3/Zluta.mp3", second: "Yellow", secondSound: "eng/3/Yellow.mp3"},
            {first: "Oranžová", firstSound: "cs/3/Oranzova.mp3", second: "Orange", secondSound: "eng/3/Orange.mp3"},
            {first: "Zelená", firstSound: "cs/3/Zelena.mp3", second: "Green", secondSound: "eng/3/Green.mp3"}
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
            {first: "Dům", firstSound: "cs/2/Dum.mp3", second: "das Haus", secondSound: "ger/2/das_Haus.mp3"},
            {first: "Pes", firstSound: "cs/2/Pes.mp3", second: "der Hund", secondSound: "ger/2/das_Hund.mp3"},
            {first: "Kočka", firstSound: "cs/2/Kocka.mp3", second:"die Katze", secondSound: "ger/2/die_Katze.mp3"},
            {first: "Auto", firstSound: "cs/2/Auto.mp3", second: "das Auto", secondSound: "ger/2/das_Auto.mp3"},
            {first: "Stůl", firstSound: "cs/2/Stul.mp3", second: "der Tisch", secondSound: "ger/2/der_Tisch.mp3"},
            {first: "Židle", firstSound: "cs/2/Zidle.mp3", second: "die Stühle", secondSound: "ger/2/die_Stuhle.mp3"},
            {first: "Voda", firstSound: "cs/2/Voda", second: "das Wasser", secondSound: "ger/2/das_Wasser.mp3"},
            {first: "Čaj", firstSound: "cs/2/Caj.mp3", second: "der Tee", secondSound: "ger/2/der_Tee.mp3"},
            {first: "Káva", firstSound: "cs/2/Kava.mp3", second: "der Kaffee", secondSound: "ger/2/der_Kaffee.mp3"},
            {first: "Kolo", firstSound: "cs/2/Kolo.mp3", second: "das Fahrrad", secondSound: "ger/2/das_Fahrrad.mp3"},
            {first: "Strom", firstSound: "cs/2/Strom.mp3", second: "der Baum", secondSound: "ger/2/der_Baum.mp3"},
            {first: "Květina", firstSound: "cs/2/Kvetina.mp3", second: "die Blume", secondSound: "ger/2/die_Blume.mp3"}
        ],
        "3": [
            {first: "Jedna", firstSound: "cs/3/Jedna.mp3", second: "Eins", secondSound: "ger/3/Eins.mp3"},
            {first: "Dvě", firstSound: "cs/3/Dve.mp3", second: "Zwei", secondSound: "ger/3/Zwei.mp3"},
            {first: "Tři", firstSound: "cs/3/Tri.mp3", second: "Drei", secondSound: "ger/3/Drei.mp3"},
            {first: "Čtyři", firstSound: "cs/3/Ctyri.mp3", second: "Vier", secondSound: "ger/3/Vier.mp3"},
            {first: "Pět", firstSound: "cs/3/Pet.mp3", second: "Fünf", secondSound: "ger/3/Funf.mp3"},
            {first: "Černá", firstSound: "cs/3/Cerna.mp3", second: "Schwarz", secondSound: "ger/3/Schwarz.mp3"},
            {first: "Bílá", firstSound: "cs/3/Bila.mp3", second: "Weiß", secondSound: "ger/3/Weiss.mp3"},
            {first: "Modrá", firstSound: "cs/3/Modra.mp3", second: "Blau", secondSound: "ger/3/Blau.mp3"},
            {first: "Červená", firstSound: "cs/3/Cervena.mp3", second: "Rot", secondSound: "ger/3/Rot.mp3"},
            {first: "Žlutá", firstSound: "cs/3/Zluta.mp3", second: "Gelb", secondSound: "ger/3/Gelb.mp3"},
            {first: "Oranžová", firstSound: "cs/3/Oranzova.mp3", second: "Orange", secondSound: "ger/3/Orange.mp3"},
            {first: "Zelená", firstSound: "cs/3/Zelena.mp3", second: "Grüne", secondSound: "ger/3/Grune.mp3"}
        ]
    },
    "sp": {
        "1": [
            {first: "Ahoj", firstSound: "cs/1/Ahoj.mp3", second: "Hola", secondSound: "sp/1/Hola.mp3"},
            {first: "Dobré ráno", firstSound: "cs/1/Dobre_rano.mp3", second: "Buenos días", secondSound: "sp/1/Buenos_dias.mp3"},
            {first: "Děkuji", firstSound: "cs/1/Dekuji.mp3", second: "Gracias", secondSound: "sp/1/Gracias.mp3"},
            {first: "Prosím", firstSound: "cs/1/Prosim.mp3", second: "Por favor", secondSound: "sp/1/Por_favor.mp3"},
            {first: "Promiňte", firstSound: "cs/1/Prominte.mp3", second: "Perdona", secondSound: "sp/1/Perdona.mp3"},
            {first: "Nerozumím", firstSound: "cs/1/Nerozumim.mp3", second: "No entiendo", secondSound: "sp/1/No_entiendo.mp3"},
            {first: "Ano", firstSound: "cs/1/Ano.mp3", second: "Sí", secondSound: "sp/1/Si.mp3"},
            {first: "Ne", firstSound: "cs/1/Ne.mp3", second: "No", secondSound: "sp/1/No.mp3"},
            {first: "Žena", firstSound: "cs/1/Zena.mp3", second: "Una mujer", secondSound: "sp/1/Una_mujer.mp3"},
            {first: "Muž", firstSound: "cs/1/Muz.mp3", second: "Un hombre", secondSound: "sp/1/Un_hombre.mp3"},
            {first: "Kluk", firstSound: "cs/1/Kluk.mp3", second: "Un chico", secondSound: "sp/1/Un_chico.mp3"},
            {first: "Holka", firstSound: "cs/1/Holka.mp3", second: "Una chica", secondSound: "sp/1/Una_chica.mp3"}
        ],
        "2": [
            {first: "Dům", firstSound: "cs/2/Dum.mp3", second: "Una casa", secondSound: "sp/2/Una_casa.mp3 "},
            {first: "Pes", firstSound: "cs/2/Pes.mp3", second: "Un perro", secondSound: "sp/2/Un_perro.mp3"},
            {first: "Kočka", firstSound: "cs/2/Kocka.mp3", second: "Un gato", secondSound: "sp/2/Un_gato.mp3"},
            {first: "Auto", firstSound: "cs/2/Auto.mp3", second: "Un coche", secondSound: "sp/2/Un_coche.mp3"},
            {first: "Stůl", firstSound: "cs/2/Stul.mp3", second: "Una mesa", secondSound: "sp/2/Una_mesa.mp3"},
            {first: "Židle", firstSound: "cs/2/Zidle.mp3", second: "Una silla", secondSound: "sp/2/Una_silla.mp3"},
            {first: "Voda", firstSound: "cs/2/Voda.mp3", second: "Un agua", secondSound: "sp/2/Un_agua.mp3"},
            {first: "Čaj", firstSound: "cs/2/Caj.mp3", second: "Un té", secondSound: "sp/2/Un_te.mp3"},
            {first: "Káva", firstSound: "cs/2/Kava.mp3", second: "Un café", secondSound: "sp/2/Un_cafe.mp3"},
            {first: "Kolo", firstSound: "cs/2/Kolo.mp3", second: "Una bicicleta", secondSound: "sp/2/Una_bicicleta.mp3"},
            {first: "Strom", firstSound: "cs/2/Strom.mp3", second: "Un árbol", secondSound: "sp/2/Un_arbol.mp3"},
            {first: "Květina", firstSound: "cs/2/Kvetina.mp3", second: "Una flor", secondSound: "sp/2/Una_flor.mp3"}
        ],
        "3": [
            {first: "Jedna", firstSound: "cs/3/Jedna.mp3", second: "Uno", secondSound: "sp/3/Uno.mp3"},
            {first: "Dvě", firstSound: "cs/3/Dve.mp3", second: "Dos", secondSound: "sp/3/Dos.mp3"},
            {first: "Tři", firstSound: "cs/3/Tri.mp3", second: "Tres", secondSound: "sp/3/Tres.mp3"},
            {first: "Čtyři", firstSound: "cs/3/Ctyri.mp3", second: "Cuatro", secondSound: "sp/3/Cuatro.mp3"},
            {first: "Pět", firstSound: "cs/3/Pet.mp3", second: "Cinco", secondSound: "sp/3/Cinco.mp3"},
            {first: "Černá", firstSound: "cs/3/Cerna.mp3",  second: "Negro", secondSound: "sp/3/Negro.mp3"},
            {first: "Bílá", firstSound: "cs/3/Bila.mp3", second: "Blanco", secondSound: "sp/3/Blanco.mp3"},
            {first: "Modrá", firstSound: "cs/3/Modra.mp3", second: "Azul", secondSound: "sp/3/Azul.mp3"},
            {first: "Červená", firstSound: "cs/3/Cervena.mp3", second: "Rojo", secondSound: "sp/3/Rojo.mp3"},
            {first: "Žlutá", firstSound: "cs/3/Zluta.mp3", second: "Amarillo", secondSound: "sp/3/Amarillo.mp3"},
            {first: "Oranžová", firstSound: "cs/3/Oranzova.mp3", second: "Naranja", secondSound: "sp/3/Naranja.mp3"},
            {first: "Zelená", firstSound: "cs/3/Zelena.mp3", second: "Verde", secondSound: "sp/3/Verde.mp3"}
        ]
    },
    "fran": {
        "1": [
            {first: "Ahoj", firstSound: "cs/1/Ahoj.mp3", second: "Salut", secondSound: "fran/1/Salut.mp3"},
            {first: "Dobré ráno", firstSound: "cs/1/Dobre_rano.mp3", second: "Bonjour", secondSound: "fran/1/Bonjour.mp3"},
            {first: "Děkuji", firstSound: "cs/1/Dekuji.mp3", second: "Merci", secondSound: "fran/1/Merci.mp3"},
            {first: "Prosím", firstSound: "cs/1/Prosim.mp3", second: "S'il vous plaît", secondSound: "fran/1/S_il_vous_plait.mp3"},
            {first: "Promiňte", firstSound: "cs/1/Prominte.mp3", second: "Désolé", secondSound: "fran/1/Desole.mp3"},
            {first: "Nerozumím", firstSound: "cs/1/Nerozumim.mp3", second: "Je ne comprends pas", secondSound: "fran/1/Je_ne_comprends_pas.mp3"},
            {first: "Ano", firstSound: "cs/1/Ano.mp3", second: "Oui", secondSound: "fran/1/Oui.mp3"},
            {first: "Ne", firstSound: "cs/1/Ne.mp3", second: "Non", secondSound: "fran/1/Non.mp3"},
            {first: "Žena", firstSound: "cs/1/Zena.mp3", second: "Une femme", secondSound: "fran/1/Une_femme.mp3"},
            {first: "Muž", firstSound: "cs/1/Muz.mp3", second: "Un homme", secondSound: "fran/1/Un_homme.mp3"},
            {first: "Kluk", firstSound: "cs/1/Kluk.mp3", second: "Un garçon", secondSound: "fran/1/Un_garcon.mp3"},
            {first: "Holka", firstSound: "cs/1/Holka.mp3", second: "Une fille", secondSound: "fran/1/Une_fille.mp3"}
        ],
        "2": [
            {first: "Dům", firstSound: "cs/2/Dum.mp3", second: "Une maison", secondSound: "fran/2/Une_maison.mp3"},
            {first: "Pes", firstSound: "cs/2/Pes.mp3", second: "Un chien", secondSound: "fran/2/Un_chien.mp3"},
            {first: "Kočka", firstSound: "cs/2/Kocka.mp3", second: "Un chat", secondSound: "fran/2/Un_chat.mp3"},
            {first: "Auto", firstSound: "cs/2/Auto.mp3", second: "Une voiture", secondSound: "fran/2/Une_voiture.mp3"},
            {first: "Stůl", firstSound: "cs/2/Stul.mp3", second: "Une table", secondSound: "fran/2/Une_table.mp3"},
            {first: "Židle",firstSound: "cs/2/Zidle.mp3", second: "Une chaise", secondSound: "fran/2/Une_chaise.mp3"},
            {first: "Voda", firstSound: "cs/2/Voda.mp3",  second: "De l'eau", secondSound: "fran/2/De_l_eau.mp3"},
            {first: "Čaj", firstSound: "cs/2/Caj.mp3", second: "Un thé", secondSound: "fran/2/Un_the.mp3"},
            {first: "Káva", firstSound: "cs/2/Kava.mp3", second: "Un café", secondSound: "fran/2/Un_cafe.mp3"},
            {first: "Kolo", firstSound: "cs/2/Kolo.mp3", second: "Une bicyclette", secondSound: "fran/2/Une_bicyclette.mp3" },
            {first: "Strom", firstSound: "cs/2/Strom.mp3", second: "Un arbre", secondSound: "fran/2/Un_arbre.mp3" },
            {first: "Květina", firstSound: "cs/2/Kvetina", second: "Une fleur", secondSound: "fran/2/Une_fleur.mp3"}
        ],
        "3": [
            {first: "Jedna", firstSound: "cs/3/Jedna.mp3", second: "Un", secondSound: "fran/3/Un.mp3"},
            {first: "Dvě", firstSound: "cs/3/Dve.mp3", second: "Deux", secondSound: "fran/3/Deux.mp3"},
            {first: "Tři", firstSound: "cs/3/Tri.mp3", second: "Trois", secondSound: "fran/3/Trois.mp3"},
            {first: "Čtyři", firstSound: "cs/3/Ctyri.mp3", second: "Quatre", secondSound: "fran/3/Quatre.mp3"},
            {first: "Pět", firstSound: "cs/3/Pet.mp3", second: "Cinq", secondSound: "fran/3/Cinq.mp3"},
            {first: "Černá", firstSound: "cs/3/Cerna.mp3", second: "Noir", secondSound: "fran/3/Noir.mp3"},
            {first: "Bílá", firstSound: "cs/3/Bila.mp3", second: "Blanc", secondSound: "fran/3/Blanc.mp3"},
            {first: "Modrá", firstSound: "cs/3/Modra.mp3", second: "Bleu", secondSound: "fran/3/Bleu.mp3"},
            {first: "Červená", firstSound: "cs/3/Cervena.mp3", second: "Rouge", secondSound: "fran/3/Rouge.mp3"},
            {first: "Žlutá", firstSound: "cs/3/Zluta.mp3", second: "Jaune", secondSound: "fran/3/Jaune.mp3"},
            {first: "Oranžová", firstSound: "cs/3/Oranzova.mp3", second: "Orange", secondSound: "fran/3/Orange.mp3"},
            {first: "Zelená", firstSound: "cs/3/Zelena.mp3", second: "Vert", secondSound: "fran/3/Vert.mp3"}
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
                window.location = "vyhral.html?lang=" + lang + "&level=" + level;
            }

        } else {
            word1.classList.remove("selectedFirst");
            word2.classList.remove("selectedSecond");

        }
    }
}










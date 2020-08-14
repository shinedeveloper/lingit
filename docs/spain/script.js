var words;
words = document.querySelectorAll(".word");
words.forEach(w => w.addEventListener("click", priKliknutiNaWord));

var wordsRemaining = 0;

var krok;
krok = 1;
var word1;
var word2;

var allWords = [
    {first: "Dům   ", second: "Una casa"},
    {first: "Pes   ", second: "Un perro"},
    {first: "Kočka ", second: "Un gato"},
    {first: "Auto  ", second: "Un coche"},
    {first: "Stůl  ", second: "Una mesa"},
    {first: "Židle ", second: "Una silla"},
    {first: "Voda  ", second: "Un agua"},
    {first: "Čaj   ", second: "Un té"},
    {first: "Káva  ", second: "Un café"},
    {first: "Kolo  ", second: "Una bicicleta"}
];

for (var index = 0; index < 10; index++) {
    var w = allWords[index];
    wordsRemaining = wordsRemaining + 1;
    var position;
    while (true) {
        position = Math.floor(Math.random() * 10);
        if (words[position].textContent === "xxx") {
            words[position].textContent = w.first;
            words[position].classList.add("c" + index);
            break;
        }
    }
    while (true) {
        position = Math.floor(Math.random() * 10);
        if (words[position].textContent === "xxx") {
            words[position].textContent = w.second;
            words[position].classList.add("c" + index);
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









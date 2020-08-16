// Zjisti lang z adresy
var adresa = window.location.search;
var parametr1 = "lang";
var lang = "eng";

parametr1 = parametr1 + "=";
var pos1 = adresa.indexOf(parametr1);
if (pos1 !== -1) {
    var pos2 = adresa.indexOf("&", pos1);
    if (pos2 === -1) {
        pos2 = adresa.length;
    }
    lang = adresa.substring(pos1+parametr1.length, pos2);
}

var volbyLevelu = document.querySelectorAll(".volbaLevelu");
for (var i=0; i < volbyLevelu.length; i++) {
    if (volbyLevelu[i].href.indexOf("?") >= 0) {
        volbyLevelu[i].href = volbyLevelu[i].href + "&" + parametr1 + lang;
    } else {
        volbyLevelu[i].href = volbyLevelu[i].href + "?" + parametr1 + lang;
    }
}

window.alert("We dont store any data so you are free to translate any thing");
var minionurl = "https://api.funtranslations.com/translate/minion.json";
var btntranslate = document.querySelector('#translate');
var text = document.querySelector('#textarea');
var dd = document.querySelector('#translated');
function geturl(input , url) {
        return url + "?"+"text=" + input;
}

function clickhandler(text) {
    var textinput = text.value;
    fetch(geturl(textinput))
    .then(response=>response.json())
    .then(json=>{
        var translatedtext = json.contents.translated;
        dd.value=translatedtext;
    })
}

btntranslate.addEventListener('click' , clickhandler);
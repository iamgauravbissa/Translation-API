window.alert("We dont store any data so you are free to translate any thing");
// var minionurl = "https://api.funtranslations.com/translate/minion.json";
var btntranslate = document.querySelector('#translate');
var text = document.querySelector('#textarea');
var dd = document.querySelector('#translated');
var url = "";


function geturltype() {
    if (document.getElementById('minion').checked) {

        console.log('minion working');
        return url = "https://api.funtranslations.com/translate/minion.json"
    } else if (document.getElementById('yoda').checked) {
        console.log('yoda working')
        return url = "https://api.funtranslations.com/translate/yoda.json"
    } else if (document.getElementById('Pirate').checked) {
        console.log('pirate working')
        return url = "https://api.funtranslations.com/translate/pirate.json"
    }
}

function geturl(input) {
    var traurl = geturltype();
    return traurl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickhandler() {

    var textinput = text.value;
    fetch(geturl(textinput))
        .then(response => response.json())
        .then(json => {

            var translatedtext = json.contents.translated;
            dd.value = translatedtext;

        })
        .catch(errorHandler)
};

btntranslate.addEventListener('click', clickhandler);

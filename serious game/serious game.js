var tabljaune = ["eau minerale(plastique)","soda(plastique)","gel douche","bain moussant","lave vitre","bouteille plastique de jus de fuits","emballage yaourt","laque pour cheveux"];
var tablverte = ["bouteille de vin","bouteille de verre","pots de confiture","petits pots bébé","papier gras","papier souillé","bocaux de conserve","bouteille d'huile"];
var tablbleu = ["le detective","la voix du nord","l'observateur","choc","closer","paris match","télé 7 jours","télé stars"];
var tablmarron = ["reste repas","couches culottes","pots de yaourt"," emballages en polystyrène","pots de creme","film alimentaire","aluminium","emballages sales"];

var alltabl = ["eau minerale(plastique)","soda(plastique)","gel douche","bain moussant","lave vitre","bouteille plastique de jus de fuits","emballage yaourt","laque pour cheveux","bouteille de vin","bouteille de verre","pots de confiture","petits pots bébé","papier gras","papier souillé","bocaux de conserve","bouteille d'huile","le detective","la voix du nord","l'observateur","choc","closer","paris match","télé 7 jours","télé stars","reste repas","couches culottes","pots de yaourt"," emballages en polystyrène","pots de creme","film alimentaire","aluminium","emballages sales"];

var calcIA = Math.floor(Math.random()*alltabl.length);
var IA = alltabl[calcIA];

document.getElementById("objet").innerHTML = IA;

document.getElementById("jaune").addEventListener("click", function () {

    var a= 0;

    for (i = 0; i<tabljaune.length; i++){

        if (IA == tabljaune[i]){
            a++;
            document.getElementById("true").innerHTML = "bonne reponse";
            document.getElementById("false").innerHTML = "";

        }
    }

    if (a!=0){

        document.getElementById("false").innerHTML = "";
    }
    else {
        document.getElementById("false").innerHTML = "mauvaise réponse";
    }

});

document.getElementById("bleu").addEventListener("click", function () {

    var a= 0;
    for (i = 0; i<tablbleu.length; i++){

        if (IA ==tablbleu[i]){
            a++;
            document.getElementById("true").innerHTML = "bonne reponse";
            document.getElementById("false").innerHTML = "";

        }

    }
    if (a!=0){

        document.getElementById("false").innerHTML = "";
    }
    else {
        document.getElementById("false").innerHTML = "mauvaise réponse";
    }

});


document.getElementById("verte").addEventListener("click", function () {

    var a= 0;
    for (i = 0; i<tablverte.length; i++){

        if (IA ==tablverte[i]){
            a++;
            document.getElementById("true").innerHTML = "bonne reponse";
            document.getElementById("false").innerHTML = "";

        }


    }
    if (a!=0){

        document.getElementById("false").innerHTML = "";
    }
    else {
        document.getElementById("false").innerHTML = "mauvaise réponse";
    }

});


document.getElementById("marron").addEventListener("click", function () {

    var a= 0;
    for (i = 0; i<tablmarron.length; i++){

        if (IA ==tablmarron[i]){
            a++;
            document.getElementById("true").innerHTML = "bonne reponse";
            document.getElementById("false").innerHTML = "";

        }


    }
    if (a!=0){

        document.getElementById("false").innerHTML = "";
    }
    else {
        document.getElementById("false").innerHTML = "mauvaise réponse";
    }

});
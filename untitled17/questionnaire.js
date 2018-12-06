var tablquest = [
       {question : "D'où vient 'Nintendo' ?",
        reponse1 : "1.Amerique",
        reponse2 : "1.Japon",
        reponse3 : "1.Belgique",
        reponse4 : "1.Angleterre",
           correct : "Japon",
       },
    {question : "quels est le nom du personnage principal dans zelda ?",
        reponse1 : "Zelda",
        reponse2 : "Mario",
        reponse3 : "Link",
        reponse4 : "Batman",
        correct : "Link",
    },
    {question : "Cherchez l'intrus.",
        reponse1 : "Mario",
        reponse2 : "Luigi",
        reponse3 : "Peach",
        reponse4 : "Pikatchu",
        correct : "Pikatchu",
    },
    {question : "Quel Pokémon pèse le plus lourd ?",
        reponse1 : "Ronflex",
        reponse2 : "bulbizarre",
        reponse3 : "salameche",
        reponse4 : "Taupiqueur",
        correct : "Ronflex",
    },
    {question : "Lequel de ces jeux n'est pas un open world ?",
        reponse1 : "Monster hunter",
        reponse2 : "Tekken7",
        reponse3 : "Dark Soul",
        reponse4 : "Black Desert Online",
        correct : "Tekken7",
    },
    {question : "Lequel de ces jeux ne contient pas de mode multijoueur ?",
        reponse1 : "Left4Dead",
        reponse2 : "CSGO",
        reponse3 : "League of Legend",
        reponse4 : "fallout3",
        correct : "fallout3",
    },
    {question : "Qui était l'ancienne mascotte de SEGA avant Sonic ?",
        reponse1 : "Donald",
        reponse2 : "digimon",
        reponse3 : "Alex Kidd",
        reponse4 : "Mickey",
        correct : "Alex Kidd",
    },
    {question : "La Nintendo DS possède?",
        reponse1 : " un écran non tactile",
        reponse2 : "un écran tactile",
        reponse3 : "deux écran non tactile",
        reponse4 : "deux écran tactile",
        correct : "deux écran tactile",
    },
    {question : "Qui est le créateur de la console playstation ?",
        reponse1 : "Jackie chan",
        reponse2 : "Bruce Lee",
        reponse3 : "Bruce Willis",
        reponse4 : "Ken Kutaragi",
        correct : "Ken Kutaragi",
    },
    {question : "Comment se nomme le célèbre dinosaure vert accompagnant Mario ?",
        reponse1 : "yoshy",
        reponse2 : "petit pied",
        reponse3 : "roxy",
        reponse4 : "tricorne",
        correct : "yoshy",
    },
];


var tblcorrect = [];

var result = 0;

function correction() {

    if (tblcorrect[0]==1){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 1 est : " + " " + tablquest[0].correct+ "<br>")
    }

    if (tblcorrect[1]==2){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 2 est : " + " " + tablquest[1].correct+ "<br>")
    }

    if (tblcorrect[2]==3){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 3 est  " + " " + tablquest[2].correct+ "<br>")
    }

    if (tblcorrect[3]==0){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 4 est :" + " " + tablquest[3].correct+ "<br>")
    }

    if (tblcorrect[4]==1){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 5 est :" + " " + tablquest[4].correct + "<br>")
    }

    if (tblcorrect[5]==3){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 6 est :" + " " + tablquest[5].correct + "<br>")
    }

    if (tblcorrect[6]==2){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 7 est :" + " " + tablquest[6].correct + "<br>")
    }

    if (tblcorrect[7]==3){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 8 est :" + " " + tablquest[7].correct + "<br>")
    }

    if (tblcorrect[8]==3){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question 9 est : " + " " + tablquest[8].correct + "<br>")
    }

    if (tblcorrect[9]==0){
        result++;
    }
    else{
        $("#soluce2").append("la bonne réponse a la question" +
            " 10 est :" + " " + tablquest[9].correct + "<br>")
    }

    $('#score').html(result);
}



var i = 0;
function Affichage(){
    i = 0;
    
if (i==0) 

    $("#question").html(tablquest[i].question);
    $("#rep1").html(tablquest[i].reponse1);
    $("#rep2").html(tablquest[i].reponse2);
    $("#rep3").html(tablquest[i].reponse3);
    $("#rep4").html(tablquest[i].reponse4);


}

Affichage();


var tbl=0;

$(".repall").click(function () {

    var truc = $("li").index(this);
    tblcorrect.push(truc);
    console.log(tblcorrect);

    if (tbl>=9){
        document.getElementById("global1").style.display = "none";
        document.getElementById("global2").style.display = "inline-block";

correction()

    }


    else{
        tbl++;
        console.log(tbl);
        $("#question").html(tablquest[tbl].question);
        $("#rep1").html(tablquest[tbl].reponse1);
        $("#rep2").html(tablquest[tbl].reponse2);
        $("#rep3").html(tablquest[tbl].reponse3);
        $("#rep4").html(tablquest[tbl].reponse4);


    }





});




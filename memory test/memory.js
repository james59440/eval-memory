//memory project:

//Variable used for create a board with my animals picture:
var faceCarte = [1,1,2,2,3,3,4,4,5,5,6,6];

//Variable used for create a board with my Verso Card picture:
var CarteReturn = [0,0,0,0,0,0,0,0,0,0,0,0];

//var for true pair of cards
var bonnepaire = [];

//var used for to define the number of pair cards:
var NbrPaire = 0;

//var used for search in the element id "jeux" , they elements "img"
var ImageCarte = document.getElementById('jeux').getElementsByTagName("img");

// var used to define the time in the counter :
var s = 2;

//var used to define the stop of the counter :
var clear;


function restart() {
    location.reload();
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";

}

//function counter:

function decompte() {

    clearTimeout(clear);


    var secondes = document.getElementById("compte").innerHTML = s;
    s--;
    secondes.innerHTML = s;

    clear = setTimeout(decompte, 1000);

    if (s<0){
        clearTimeout(clear);

        //if the player don't finish in the time given a new page appear with the message "tu as perdu"
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "block";
            document.getElementById("win").innerHTML = "tu as perdu ";
            document.getElementById("result").innerHTML = "resultat :";
            document.getElementById("rejouer").style.display = "inline-block"

    }
}

setTimeout(decompte,1000);






//boucle used to define an fonction onclick in the var ImageCarte and call the function parametre :
for ( var i = 0; i < ImageCarte.length; i++) {

    ImageCarte[i].NumCard = i;
    ImageCarte[i].onclick = function () {
        Parametre(this.NumCard);
    }
}

//return of the function Alea:
Alea();

//function to define the display of the cards(verso,face,hide):
function AfficheCard(NumCard) {

    switch ( CarteReturn[NumCard]) {

        //the card verso is on stat 0
        case 0:
            ImageCarte[NumCard].src="image/Carte_face_Verso.png";
            break;

            //they animals picture is on stat 1
        case 1:

            ImageCarte[NumCard].src="image/animal" +faceCarte[NumCard]+".jpg";

            break;

            //tha card complete passed hidden in stats -1 (if we have the same pair)
        case -1:
            ImageCarte[NumCard].style.visibility="hidden";
            break;


    }
}

//function to define the position random of the cards :
function Alea () {

    //boucle to definie the random pos of the card :
    for ( var a = faceCarte.length - 1; a >= 1; a--) {

        var random = Math.floor(Math.random()*( a + 1 ));
        var positionCarte = faceCarte[a];
        faceCarte[a] = faceCarte[random];
        faceCarte[random] = positionCarte;
    }

}

//function to define what to do with the cards
function Parametre(NumCard) {

    //For return only two cards in once time
    if ( bonnepaire.length < 2) {

        //if click in the card recto(0) the card passed in verso(1)
        if (CarteReturn [NumCard] == 0 ) {
            CarteReturn [NumCard] = 1;
            bonnepaire.push(NumCard);
            AfficheCard(NumCard);
        }

        //if we have the same pair of cards we take off(-1) of they else they return in recto position(0)
        if(bonnepaire.length==2){
            var newchange=0;
            if(faceCarte[bonnepaire[0]]==faceCarte[bonnepaire[1]]){
                newchange=-1;
                NbrPaire++;
            }

            CarteReturn[bonnepaire[0]]=newchange;
            CarteReturn[bonnepaire[1]]=newchange;

            setTimeout(function(){
                AfficheCard(bonnepaire[0]);
                AfficheCard(bonnepaire[1]);
                bonnepaire =[];


                //if all pair is find a new page appear with the message "tu as gagné"
                if (NbrPaire==6){
                    document.getElementById("page1").style.display = "none";
                    document.getElementById("page2").style.display = "block";
                    document.getElementById("win").innerHTML = "tu as gagné ";
                    document.getElementById("result").innerHTML = "resultat :";
                    document.getElementById("rejouer").style.display = "inline-block"
                }

            },1000)

        }}};


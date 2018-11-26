var faceCarte = [1,1,2,2,3,3,4,4,5,5,6,6];

var CarteReturne = [0,0,0,0,0,0,0,0,0,0,0,0];

var bonnepaire = [];

var NbrPaire = 0;

var ImageCarte = document.getElementById('jeux').getElementsByTagName("img");

for ( var i = 0; i < ImageCarte.length; i++) {

    ImageCarte[i].CarteNo = i;
    ImageCarte[i].onclick = function () {
        ProgrammeJeux(this.CarteNo);
    }
};

InitialisationJeux();

function AffichageCarte(CarteNo) {

    switch ( CarteReturne[CarteNo]) {

        case 0:
            ImageCarte[CarteNo].src="Carte_face_Verso.png";
            break;
        case 1:

            ImageCarte[CarteNo].src="yu gi oh"+faceCarte[CarteNo]+".png";
            console.log('test');
            break;
        case -1:
            ImageCarte[CarteNo].style.visibility="hidden";
            break;


    }
}

function InitialisationJeux () {

    for ( var m = faceCarte.length - 1; m >= 1; m--) {

        var random = Math.floor(Math.random()*( m + 1 ));
        var SauvegardeCarte = faceCarte[m];
        faceCarte[m] = faceCarte[random];
        faceCarte[random] = SauvegardeCarte;
    }

}

function ProgrammeJeux(CarteNo) {

    if ( bonnepaire.length < 2) {

        if (CarteReturne [CarteNo] == 0 ) {
            CarteReturne [CarteNo] = 1;
            bonnepaire.push(CarteNo);
            AffichageCarte(CarteNo);
        }

        if(bonnepaire.length==2){
            var nouveauEtat=0;
            if(faceCarte[bonnepaire[0]]==faceCarte[bonnepaire[1]]){
                nouveauEtat=-1;
                NbrPaire++;
            }

            CarteReturne[bonnepaire[0]]=nouveauEtat;
            CarteReturne[bonnepaire[1]]=nouveauEtat;

            setTimeout(function(){
                AffichageCarte(bonnepaire[0]);
                AffichageCarte(bonnepaire[1]);
                bonnepaire =[];

            },1000)

        }}};


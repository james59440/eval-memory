//Variable Tableaux

var Nom  = ["Michel Varuk","Jim Carrey","Albert Einstein","Vivaldi","Emma Watson","Renaud","Eminem","Paul Rudd","Jacques","Bernadette","johnny Depp","The Rock","Billy Obam","Léa","Nima","Julien Lepers","Hugh jackman","Jacquie","Michel","Gotaga","H.P Lovecraft","Bill Gates","Phillipe Etchebest"];

var objet = ["Ordinateur","Telephone","Montre","Dé a coudre","Décapsuleur","ballon de foot","Marteau","piece","tasse","Lunette de soleil","fourchette","cuillere","Manette","clavier","avion","vélo"];

var temperature = ["10°","30°","-50°","5°","69°","18°","-30°","-40°","69°","70°","5°","28°","37°","100°","22°","25°","12°","37°","24°"];

var lieu = ["Floyon","Wignehies","Tokyo","Reykjark","Mons","Touquet","Fourmies","Trélon","Palais de L'élysée","Paris","Mc Do","Burger King","Chuttes du Niagara","HidePark","Montcuq","KFC","Big Ben","Mont Fuji","Bondy","Rio de janeiro","Barcelona"];

var verbes = ["Coder","copier","nager","monter","développer","jouer","voter","arnaquer","manger","accomplir","communiquer","s'envoyer","enfourner","soulever","evoluer","avoir","aimer","etre","passionner","coordonner"];

//variable génerer un alea


//variable apparition alea et fonction alea

var truc = document.getElementById("textuelle").value ;
document.getElementById("bouton").addEventListener("click", function () {

    for (var i = 0; i < 3; i++) {


    var btnRandom = Math.floor(Math.random() * 10);

    var AleaNom = Nom[Math.floor(Math.random() * Nom.length)];

    var AleaObjet = objet[Math.floor(Math.random() * objet.length)];

    var AleaTemp = temperature[Math.floor(Math.random() * temperature.length)];

    var AleaLieu = lieu[Math.floor(Math.random() * lieu.length)];

    var AleaVerbes = verbes[Math.floor(Math.random() * verbes.length)];

    if (btnRandom >5){
    document.getElementById("tutaffiche").innerHTML += "<br>" + AleaNom + " prends ce " +" "+ AleaObjet + " a " + " "+ AleaTemp +" "+ AleaLieu + " pour se " +" "+ AleaVerbes;
    }
        if (btnRandom <5) {
            document.getElementById("tutaffiche").innerHTML += "<br>" + AleaNom + " prends ce " + " " + AleaObjet + " a " + " " + AleaTemp + " pres de " + " " + AleaLieu + " pour se " + " " + AleaVerbes;
        }}
});

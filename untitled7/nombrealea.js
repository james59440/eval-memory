var b = 1;
var w = 1;



while (b <= 20) {


    var nombrealeatoire = Math.random() * 100;
    nombrealeatoire = Math.ceil(nombrealeatoire);

    if (nombrealeatoire> 50) {
        document.write( [w + " : "]+ nombrealeatoire + "Le capitaine est vieux <br>")
    }

    if (nombrealeatoire < 50) {
        document.write( [w + " : "]+ nombrealeatoire + "Le capitaine est jeune <br>")
    }

    if (nombrealeatoire == 50) {
        document.write( [w + " : "]+ nombrealeatoire + "Joyeux 50eme Anniversaire <br>")

    }
    b++;
    w++;
}
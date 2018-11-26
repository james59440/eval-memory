
var date = new Date ;
var se = date.getSeconds();
var mi = date.getMinutes();
var he = date.getHours();

var sedeg = se * 6;
var mideg = mi * 6;
var hedeg = he * 30;

document.getElementById("fleche3").style.transform = "rotate(" + sedeg +" deg)";
document.getElementById("fleche2").style.transform = "rotate(" + mideg + "deg)";
document.getElementById("fleche1").style.transform = "rotate(" + hedeg + "deg)";



function decompte() {



    se++;

    document.getElementById("fleche3").style.transform += "rotate(6deg)";

    if (se==60){
        se=0;
        mi++;
        document.getElementById("fleche2").style.transform += "rotate(6deg)";
    }

    if (mi==60){
        mi=0;
        document.getElementById("fleche1").style.transform += "rotate(30deg)";
    }



setTimeout(decompte,1000);
}
setTimeout(decompte,1000);
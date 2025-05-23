function helloMusterMann() {
    let a, b ,c, d;
    a = "Hallo ";
    b = "Herr ";
    c = "Mustermann";

    d = a + b + c;
    return d;
}

function helloMusterMannVar() {

    var a = "Hallo ";
    var b = "Frau ";
    var c = "Mustermann";

    var d = a + b + c;
    return d;
}

if (helloMusterMannVar() === helloMusterMann()){
    console.log("Gleicher Inhalt.")
}else{
    console.log("Unterschiedlicher Inhalt.")
}


function WasIstKleiner(varA, varB){

    let count = 0;
    let x;

    if (varA.length < varB.length){
        for (let i = 0; i < varA.length; i++) {
            if (varA[i] === varB[i]){
                count++;
                x = "Variable a ist kleiner.";
            }
        }
    } else {
        for (let i = 0; i < varB.length; i++) {
            if (varA[i] === varB[i]){
                count++;
                x = "Variable b ist kleiner.";
            }
        }
    }

    console.log("Es sind " + count + " Buchstaben gleich.", x);
}

WasIstKleiner(helloMusterMann(), helloMusterMannVar());

p = 10
console.log(p)
var p;

p < 5 ? console.log(p) : console.log("Größer")

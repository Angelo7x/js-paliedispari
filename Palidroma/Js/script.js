// Chiedere all'utente una parola 
var parolaUtente = prompt("Inserisci una parola");
// Creare una funzione per capire se la parola inserita è palindroma
function palindroma(parolaUtente) {

    var inverse = "";

    for ( var i = parolaUtente.length -1; i >= 0; i--) {

    inverse += parolaUtente[i];

    return inverse;
}
}


var parolaInversa = palindroma(parolaUtente) ;

console.log(parolaInversa);

if ( parolaInversa == parolaUtente ) {
    alert("La tua parola è palindroma");
} else {
    alert("La tua parola è palindroma");
}



// var inverse = palindroma();
// var inverse = palindroma();
// console.log(inverse);
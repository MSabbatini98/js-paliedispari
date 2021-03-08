var num_user = parseInt(prompt("Inseirisci un numero intero"));

// verifica inserimento età
num_user = isNumber(num_user);

var bool_user = prompt("Inserisci P per Pari e D per DISPARI");
// verifica inserimento valori specifici "p" e "d" 
bool_user = verifyEvenOddInput(bool_user);

var num_pc = 0;
// creaziona valore random per num_pc tra 0 e 5 
num_pc = Math.floor(Math.random() * 6);


var esito1 =  num_user + " + " + num_pc + " = " + (num_pc + num_user);
var esito2 = "";

esito2 = sumEvenOrOdd( num_user, num_pc, bool_user);

document.getElementById("string").innerHTML = num_user;
document.getElementById("output").innerHTML = num_pc;
document.getElementById("verdict").innerHTML = esito1;
document.getElementById("verdict2").innerHTML = esito2;

console.log(num_user)

//?? Funzioni
function isNumber (num) {
    while ((isNaN(num) || num <= 0)) {
        alert ("NON hai inserito un numero intero positivo");
        num = parseInt(prompt("Inserisci un numero intero positivo:"));
    }
    return parseInt(num);
}

function verifyEvenOddInput (num1, num2) {
    bool_user = bool_user.toLowerCase();
    while (bool_user != "p" && bool_user != "d") {
        alert("attenzoine, ha inserito un valore errato")
        bool_user = prompt("Inseirisci P (p) per PARI e D (d) per DISPARI");
    }
    return bool_user;
} 

function sumEvenOrOdd (num_user, num_pc, bool_user){
    var somma = parseInt(num_pc + num_user);
    if (somma % 2 == 0){
        if (bool_user == "p") {
            esito2 = "Hai scelto pari e HAI VINTO";
        } else {
            esito2 = "Hai scelto pari ed hai perso";
        }
    } else {
        if (bool_user == "p") {
            esito2 = "Hai scelto pari e hai perso";
        } else {
            esito2 = "Hai scelto dispari e HAI VINTO";
        }
    } 
    return esito2;
}

var string = prompt("Inserisci una parola");
var new_string = "";
var esito;

new_string = invertiStringa(string); 
esito = verificaParole(string, new_string);

document.getElementById("string").innerHTML = string;
document.getElementById("output").innerHTML = new_string;
document.getElementById("verdict").innerHTML = esito;

console.log(new_string)







// funzione che copia e inverte una stringa e vede se è uguale all'originale
function invertiStringa(string) {
    for (var i = (string.length - 1); i >= 0; i--){
        new_string = new_string +  string[i];
        // console.log(string[i], i, string, new_string);
    }
    return new_string;
}

//funziona che controlla se la stringa è uguale alla versione palindroma 
function verificaParole(string, new_string) {
    if (string == new_string) {
        esito = "La parola è Palindroma !!";
    } else {
        esito = "La parola NON è palindroma";
    }
    return esito;
}
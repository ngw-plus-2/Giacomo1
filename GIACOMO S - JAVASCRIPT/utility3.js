function aggiungi(){
    let prodotto = prompt("Aggiungi un prodotto alla tua lista");
    let quantita = Number(prompt("Inserisci la quantita da aggiungere"));
    if (prodotto) {
        spesa[prodotto]=quantita;
        alert("Prodotto aggiunto alla lista");
        let risposta = prompt("Vuoi aggiungere altri prodotti? Rispondi 'SI' per continuare, 'NO' o 'ESCI' per terminare.");
        if (risposta.toUpperCase() === "NO" || risposta.toUpperCase() === "ESCI") {
            console.log("Ecco la tua spesa: "+spesa);
            continua = false;
        } else if (risposta.toUpperCase() === "SI") {
            return aggiungi;
        } else {
            return;
        }
    } else {
        continua = false;
    }
}

function canc(){
    let cancella = prompt("Indica quale prodotto vuoi eliminare");
    if(spesa[cancella]){
    delete spesa[cancella];
    alert("Prodotto eliminato");
    } else {
        console.log("Elemento non presente");
    }
}

function stampa(){
    let prodotto = "Ecco la lista della spesa:";
    for(let i in spesa){
        prodotto+= '${i} : ${spesa[i]}'
    }
    console.log(prodotto);
}

function sommaN(...nVariabili) {
    console.log(nVariabili)
    let somma = 0;
    for (let i = 0; i < nVariabili; i++) {
        somma = somma + nVariabili[i];
    }
    console.log(somma);
}

//Oggetto

let nome = "giuseppe"

const oggetto = {
    nome: "giacomo",
    cognome: "spera",
    eta: 30,
    isCrazy: true,
    //Metodo
    saluta: function () {
        console.log("Ciao! Mi chiamo " + this.nome);
    }
};

const prompt = require("prompt-sync")();

// Definizione dell'oggetto persona
const persona = {
    nome: "",
    cognome: "",
    età:"" ,
};

// Richiesta all'utente di inserire i valori per le proprietà dell'oggetto persona
persona.nome = prompt("Inserisci il nome della persona:");
persona.cognome = prompt("Inserisci il cognome della persona:");
persona.età = prompt("Inserisci l'età della persona:");

// Stampa dell'oggetto persona
console.log("Oggetto persona:", persona);

// Stampa del valore della proprietà "nome" utilizzando la notazione dot
console.log("Nome della persona:", persona.nome);

// 1  Chiedere all'utente il suo nome e poi memorizzarlo

var name = prompt('Qual è il tuo nome?')

// 2  Chiedere il suo cognome e memorizzarlo

var surname = prompt('Qual è il tuo cognome?')

// 3  Chiedere il suo colore preferito e memorizzarlo

var color = prompt('Qual è il tuo colore preferito?')

// Concatenare la variabili di nome, cognome e colore preferito aggiungendo numero 20;

var data = name + surname + color + 20;

document.getElementById('psw').innerHTML = data

console.log(data);
var d = Number(window.prompt("Inserisci il Diametro D: ", "nessuno"));
let x = Math.PI;
var r, a,circ;

r = d/2;
console.log(r);
a = r*r*x;
a = parseFloat(a).toFixed(3);
circ = d * x;
circ = parseFloat(circ).toFixed(3);

// Versione da principiante
// document.write("<p> Un cerchio di diametro " + d + " ha area " + a + " e circonferenza " + circ + "</p>");

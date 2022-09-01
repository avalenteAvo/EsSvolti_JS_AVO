/* Creare un progetto Javascript che dichiari e contestualmente inizializzi la costante MAX a 15;
che dichiari le variabili a, b e c contemporaneamente; che assegni ad a,b e c rispettivamente i numeri 10, 11 e 12;
che successivamente incrementi le tre variabili della costante dichiarata in apertura e
che infine vi sottragga un valore numerico costante a scelta del programmatore (senza dichiarare la costante).*/


var MAX = 15;
var a,b,c;

a = 10;
b= 11;
c = 12;

a = a + MAX;
b= b + MAX;
c = c + MAX;

a = a - 25;
b= b - 25;
c = c - 25;

document.write('<h1>' + a + '</h1>');
document.write('<h1>' + b + '</h1>');
document.write('<h1>' + c + '</h1>');

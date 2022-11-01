function SumN(m,n){
var somma = 0;
for(var i=1;i<=n;i++){
somma = somma + m;
}
return somma;
}
function mostra(){
var  input1 = document.getElementById('n1');
var r1 = parseFloat(input1.value);
var  input2 = document.getElementById('n2');
var r2 = parseFloat(input2.value);
console.log("r2");
var risultato = document.getElementById('result');
risultato.innerHTML = "La somma e' " + SumN(r1,r2);
}

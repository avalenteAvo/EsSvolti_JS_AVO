function start(){
var pulsante = document.getElementById('bottone');
pulsante.addEventListener("click", mostra);

}


function maximum(m,n){
var max = 0;
if(m>n){
max = m;
}else{
  max = n;
}
return max;
}
function mostra(){
var  input1 = document.getElementById('n1');
var r1 = parseFloat(input1.value);
var  input2 = document.getElementById('n2');
var r2 = parseFloat(input2.value);
console.log("r2");
var risultato = document.getElementById('result');
risultato.innerHTML = "Il massimo è " + maximum(r1,r2);
}

window.addEventListener("load", start, false);

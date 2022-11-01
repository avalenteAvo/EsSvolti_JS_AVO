function start(){
var pulsante1 = document.getElementById('bottone1');
pulsante1.addEventListener("click", mostra1);

var pulsante2 = document.getElementById('bottone2');
pulsante2.addEventListener("click", mostra2);

var pulsante3 = document.getElementById('bottone3');
pulsante3.addEventListener("click", mostra3);

var pulsante4 = document.getElementById('bottone4');
pulsante4.addEventListener("click", mostra4);

}

function interoQ(m,n){
var q = Math.trunc(m/n);
return q;}

function resto(m,n){
var r = m%n;
console.log(r);
return r;}

function DisplayDigits(m){

var ris0=Math.trunc(m/10000);
m=m-(ris0*10000);
var ris1 = Math.trunc(m/1000)
m=m-(ris1*1000);
//console.log(ris1);
var ris2 = Math.trunc(m/100)
m=m-(ris2*100);
var ris3 = Math.trunc(m/10)
m=m-(ris3*10);
var ris4 = Math.trunc(m/1)
m=m-(ris4*1);
tot = " " + ris0 + "  " +ris1 + "  " +ris2+ "  "+ris3+"  "+ris4;
return tot;
}

function mostra1(){
var  input1 = document.getElementById('n1');
var r1 = parseFloat(input1.value);
var  input2 = document.getElementById('n2');
var r2 = parseFloat(input2.value);
var risultato1 = document.getElementById('result1');
risultato1.innerHTML = "Parte intera del quoziente: " + interoQ(r1,r2);
}

function mostra2(){
  var  input1 = document.getElementById('n3');
  var r1 = parseFloat(input1.value);
  var  input2 = document.getElementById('n4');
  var r2 = parseFloat(input2.value);
  var risultato2 = document.getElementById('result2');
  risultato2.innerHTML = "Il resto e': " + resto(r1,r2);
}

function mostra3(){
  var  input1 = document.getElementById('n5');
  var r1 = parseFloat(input1.value);
  var risultato3 = document.getElementById('result3');
  risultato3.innerHTML = "NUMERO:  " + DisplayDigits(r1);
}

function mostra4(){
  var input1 = Number(window.prompt("Inserisci il numero"));
  var risultato4 = document.getElementById('result4');
  risultato4.innerHTML = "NUMERO:  " + DisplayDigits(input1);
}


window.addEventListener("load", start, false);

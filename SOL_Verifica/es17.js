
function numero(){

var num = Number(window.prompt("NUMERO : "));
//console.log(num);

numero1 = Math.trunc(num/1000);
var terza = (numero1 + 7)%10;
terza = terza + "";
//console.log(terza);

num = num%1000;
//console.log(num);

numero2 = Math.trunc(num/100);
quarta = (numero2 +7)%10;
quarta= quarta + "";
//console.log(quarta);

num = num%100;
//console.log(num);

numero3 = Math.trunc(num/10);
prima = (numero3 +7)%10;
prima = prima + "";
//console.log(prima);

num = num%10;
seconda = (num + 7)%10;
seconda = seconda + "";

//console.log(seconda);


document.getElementById('critto').innerHTML = +prima + seconda + terza + quarta ;



}

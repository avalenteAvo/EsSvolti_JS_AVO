function compra() {
  var qtFD = document.getElementById("qtaPE").value;
  var prezzoFD = qtFD * 0.5;
  var qtFD = document.getElementById("qtaQUAD").value;
  var prezzoCD = qtFD * 1;
  var qtFD = document.getElementById("qtaBN").value;
  var prezzoDVD = qtFD * 2;
  var totale = prezzoFD + prezzoCD + prezzoDVD;
  document.getElementById("tot").innerHTML = "TOTALE ACQUISTI: " + totale + " €";

}

function azzera() {

document.getElementById("qtaPE").selectedIndex = "0";
document.getElementById("qtaQUAD").selectedIndex = "0";
document.getElementById("qtaBN").selectedIndex = "0";
var nulla = " ";
document.getElementById("tot").innerHTML = nulla;
document.getElementById("buy").innerHTML = nulla;

}

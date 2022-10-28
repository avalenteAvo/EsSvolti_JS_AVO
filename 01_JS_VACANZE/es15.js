function myFunction(){
var x = Number(document.getElementById('selcolore').value);
switch (x) {
  case 1:
    document.getElementById("corpo").style.backgroundColor = "red";
    break;
  case 2:
    document.getElementById("corpo").style.backgroundColor = "green";
    break;
  case 3:
    document.getElementById("corpo").style.backgroundColor = "yellow";
    break;
  case 4:
    document.getElementById("corpo").style.backgroundColor = "white";
    break;
  default:
    document.getElementById("corpo").style.backgroundColor = "white";
}

var y = document.getElementById('colore').value;

console.console.log(y);

}

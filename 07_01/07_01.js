function circlePerimeter(raggio){
return Math.trunc(raggio*(Math.PI)*2);
}

function mostra(){
var  input = document.getElementById('raggio');
var r = parseFloat(input.value);
var risultato = document.getElementById('result');
result.innerHTML = "Il perimetro e' " + circlePerimeter(r);
}

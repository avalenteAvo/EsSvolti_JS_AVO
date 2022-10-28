

const d = new Date();
var utc = new Date().toUTCString();

document.getElementById("data").innerHTML = d;
document.getElementById("utc").innerHTML = utc;

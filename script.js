
relogio = document.getElementById('relogio');


function limit(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
function clock(){
    var data = new Date();
    relogio.innerHTML = limit(data.getHours()) + " : " + limit(data.getMinutes()) + " : " + limit(data.getSeconds());
}
setInterval(clock, 1000);
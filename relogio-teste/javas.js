var hora = window.document.querySelector("#horas")
var minutos = window.document.querySelector("#minutos")
var segundos = window.document.getElementById('segundos');

var relogio = setInterval(function time(){
var dateToday = new Date();

var hr = dateToday.getHours();
var min = dateToday.getMinutes();
var ss = dateToday.getSeconds();

    hora.textContent = hr;
    minutos.textContent=min;
    segundos.textContent=ss;
})


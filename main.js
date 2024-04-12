
//data //

let diaValue = document.getElementById("dia");
let mesValue = document.getElementById("mes");
let anoValue = document.getElementById("ano");

function dataDigital () {
    let allDate = new Date();

    dia =allDate.getDate();
    mes = allDate.getMonth() +1 ;
    ano = allDate.getFullYear();

    diaValue.textContent = dia ;
    mesValue.textContent = mes ;
    anoValue.textContent = ano ;
}

  // relogio function //

let horasValue = document.getElementById("horas");
let minutosValue = document.getElementById("minutos");
let segundosValue = document.getElementById("segundos"); 

function relogiodigital() {
   let data = new Date();

   horas = data.getHours() ;
   minutos = data.getMinutes();
   segundos = data.getSeconds();

   horasValue.textContent = horas; 
   minutosValue.textContent = minutos;
   segundosValue.textContent = segundos;
 
}

relogiodigital();
dataDigital();
setInterval(dataDigital, 1000);
setInterval(relogiodigital, 1000);
$(document).ready(function() {
    //setTimeout(function() {
    //    $(".content").fadeOut(1500);
    //},3000);
    setTimeout(function() {
        $(".contentd2").fadeIn(1500);
    },0000);
});




var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 1) { // 20 minutes
        window.location.reload();
    }
}




function myFunction() {
    var x = document.getElementById("reloj");
    var r = document.getElementById("fondo_v");
    if (x.style.display === "none" && r.style.display === "none") {
        x.style.display = "block";
        r.style.display = "block";       
    } else {
        x.style.display = "none";
        r.style.display = "none";
    }
}
function actual() {
        saludo="Hola";
         fecha=new Date(); //Actualizar fecha.
         hora=fecha.getHours(); //hora actual
         minuto=fecha.getMinutes(); //minuto actual
         segundo=fecha.getSeconds(); //segundo actual
         if (hora<10) { //dos cifras para la hora
             hora="0"+hora;
             }
         if (minuto<10) { //dos cifras para el minuto
             minuto="0"+minuto;
             }
         if (segundo<10) { //dos cifras para el segundo
             segundo="0"+segundo;
             }
         //devolver los datos:
         mireloj =saludo+ " Luis" +"<br>" +hora+" : "+minuto+" : "+segundo;	
         return mireloj; 
         }

function actualizar() { //función del temporizador
    mihora=actual(); //recoger hora actual
    mireloj=document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML=mihora; //incluir hora en elemento
        }
setInterval(actualizar,1000); //iniciar temporizador
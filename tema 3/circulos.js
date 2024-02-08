/*
function OcultarRojo(){
    document.getElementById("rojo").style.visibility = "hidden"
}
function OcultarVerde(){
    document.getElementById("verde").style.visibility = "hidden"
}
function OcultarAzul(){
    document.getElementById("azul").style.visibility = "hidden"
}
*/

function ocultar_o_mostrar(caja){
    if (document.getElementById(caja).style.visibility = "visible" || document.getElementById(caja).style.visibility =="")
        document.getElementById(caja).style.visibility = "hidden";
    else
        document.getElementById(caja)style.visibility = "visible";
}
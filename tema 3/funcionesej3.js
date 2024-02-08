var notas = [];

function anadir() {
    let numero = parseFloat(document.getElementById("numero").value);
    //borramos mensajes de error previo
    document.getElementById("aviso").innerHTML = "";
    if (isNaN(numero)) {
        document.getElementById("aviso").innerHTML = "Debes introducir un valor entre 0 y 10"
    }
    else {
        //comprobar etre 0 y 10
        if (numero < 0 || numero > 10) {
            document.getElementById("aviso").innerHTML = "Debes introducir un valor entre 0 y 10"
        }
        else {
            notas.push(numero);
            document.getElementById("notas").innerHTML = notas;
        }
    }


}

function borrar() {

}
function media() {
    let total = 0.0;
    for (var i=0;i<notas.length;i++){
        total = total + notas[i]
    }
    total = total / notas.length;
    document.getElementById('media').innerHTML = total.toFixed(2);
}
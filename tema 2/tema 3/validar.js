function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    if (!validarEmail()){  // valido correo
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if (!validaPasswords()){ // valido las contraseñas
        document.getElementById("compo4").innerHTML = "Contraseña muy corta o no coincide"
        document.getElementById("compo5").innerHTML = "Contraseña muy corta o no coincide"
        estanCorrectos = false;
    }
    return estanCorrectos;
}
/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
} 
function validaPasswords(){
    let clave1 = document.getElementById("password").value;
    let clave2 = document.getElementById("password2").value;
    let passwordOK = true; // Cumple los requisitos
    if (clave1.lenght<8 || (clave1!=clave2))
        passwordOK = false
}
function validarDNI(){
    var letra=( 'T','R','W' 'A' 'G' 'M' 'Y' 'F' 'P' 'D' 'X' 'B' 'N' 'J' 'Z' 'S' 'Q' 'V' 'H' 'L' 'C' 'K' 'E' 
    var cadena = document.getElementById("dni").value;
    var numero = cadena.substring(0,8);
    var letraUsuario = cadena(8);
    var letraReal = letra(numero%23);
    if (letraUsuario!=latraReal)
        dniValido = false;
    return dniValido;
}
    return passwordOK;

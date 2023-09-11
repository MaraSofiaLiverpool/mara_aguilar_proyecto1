/* Variables */

//Variables

function calcularImc(peso,altura) {
		
		return (peso / (altura * altura));

	}

	let nombre = prompt("informe su nombre");
	let pesoInformado = prompt(nombre + ", informe su peso");
	let alturaInformado = prompt(nombre + ", informe su altura");

	let imcCalculado = calcularImc(pesoInformado,alturaInformado);

	alert(nombre + ", su imc calculado es: " + imcCalculado);

	23.99

	if (imcCalculado < 18.5) {
		alert ("IMC Abajo de lo recomendado");
	}

	if (imcCalculado >= 18.5) {
		if (imcCalculado < 25){
			
		alert ("IMC está dentro del intervalo normal");

		}
	}

	if (imcCalculado >= 25) {
		if (imcCalculado < 30){
			
		alert ("IMC considerado como sobrepeso");

		}
	}

	if (imcCalculado >= 30) {
		alert ("IMC considerado como obesidad");
	}

    
function imc_calculo() {
    const form = document.querySelector("#form");
    const calculo = (imc) => {
        object = {
            1: [[imc < 18.5], "Abaixo do peso"],
            2: [[imc >= 18.5 && imc <= 24.9], "Peso normal"],
            3: [[imc >= 25 && imc <= 29.9], "Sobrepeso"],
            4: [[imc >= 30 && imc <= 34.9], "Obesidade Grau 1"],
            5: [[imc >= 35 && imc <= 39.9], "Obesidade Grau 2"],
            6: [[imc >= 40], "Obesidade Grau 3"]
        }

        for (key in object) {
            if (object[key][0][0]) {
                return object[key][1]
            }
        }
    }

    function start_event(event) {
        const peso = parseFloat(document.querySelector("#peso").value);
        const altura = parseFloat(document.querySelector("#altura").value);
        const resultado = parseFloat(peso / (altura ** 2)).toFixed(2);

        document.querySelector("#result").innerHTML = (`Seu IMC é: ${resultado} (${calculo(resultado)})`);
        event.preventDefault();
    }

    form.addEventListener("submit", start_event);
}
imc_calculo();
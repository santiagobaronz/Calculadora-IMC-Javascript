'use strict'

window.addEventListener('load',function(){

    // Button and result variables

    var button = document.querySelector("#button"),
        result = document.querySelector(".result");

    // Button event to calculate BMI

    button.addEventListener("click", function(e){
        e.preventDefault()

        // Input variables

        var peso = parseInt(document.querySelector("#peso").value),
            altura = parseInt(document.querySelector("#altura").value);

        // Calculate the BMI if the inputs are filled with numbers

        if(!isNaN(peso) && !isNaN(altura)){

            const IMC = ((peso/Math.pow(altura,2))*10000).toFixed(2);
            console.log(peso);

            // Show the result

            result.innerHTML = `
            <p>Tu Indice de masa corporal es: ${IMC}</p>
            `
        }else{
            result.innerHTML = `
            <p>Debes ingresar todos los datos para calcular tu IMC</p>
            `
        }

    });
});
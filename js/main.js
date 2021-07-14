'use strict'

window.addEventListener('load',function(){

    var button = document.querySelector("#button"),
        result = document.querySelector(".result");

    button.addEventListener("click", function(e){
        e.preventDefault()

        var peso = parseInt(document.querySelector("#peso").value),
            altura = parseInt(document.querySelector("#altura").value);

        const IMC = (peso/Math.pow(altura,2))*10000;

        result.innerHTML = `
    
        <p>Tu Indice de masa corporal es: ${IMC}</p>
        
        `

    });




});
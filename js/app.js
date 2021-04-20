"use strict"

window.addEventListener('load', function(){

    console.log('ya esta hecho el jale de la conexion con JS')


    var formulario = document.querySelector("#formulario");
    var dashed = document.querySelector('.box_dashed');
    dashed.style.display = "none";



    formulario.addEventListener('submit', function(){
        console.log('evento de boton capturado.')
        
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;


        var datos=[nombre, apellido, edad];

        dashed.style.display ='block';

        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellido = document.querySelector('#p_apellido span');
        var p_edad = document.querySelector('#p_edad span');


        p_nombre.innerHTML=nombre;
        p_apellido.innerHTML=apellido;
        p_edad.innerHTML=edad;






        /*
        var indice;
        for(indice in datos){

            var parrafo = document.createElement('p');
            parrafo.append(datos[indice]);
            dashed.append(parrafo);
        }

        parrafo.append(nombre);
        parrafo.append(apellido);
        parrafo.append(edad);
        dashed.append(parrafo); */
    });


});
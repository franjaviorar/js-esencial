$(document).ready(function(){
    console.log(' hola, todo listo')


    var cajas = $('.caja');
    var lista = $('#lista');

//mover elemntos
    cajas.draggable();
//redimencionar elementos

    cajas.resizable();

    //seleccionar elementos

    // lista.selectable();

    //ordenar
    lista.sortable({
        update: function(){
            console.log('cambio la lista')
        }
    });


    //droppable
    var areaG = $('#areag');
    var areaCH = $('#areach');

    areaCH.draggable();
    areaG.droppable({
        drop: function(){
            console.log('algo se solto en el area.');
        }
    });

    // efectos de jquery UI
    var caja_efecto = $('#caja_efecto')
    var boton = $('#efecto');

    boton.click(function(){
        caja_efecto.toggle('fold');
    })

});
$(document).ready(function(){

    // efectos mouseOver mouseOut

    var caja = $('#caja');
    /*
    caja.mouseover(function(){

        $(this).css('background','red')
               .css('width','100%')
               .css('border','2px solid black')
    })

    caja.mouseout(function(){
        $(this).css('background','green')
               .css('border','dashed 10px yellow')
               .css('width','250px')
    }) */

    //hover

    function cambiarojo(){
        $(this).css('background','red')
               .css('width','100%')
               .css('border','2px solid black')
    }
    
    function cambiaverde(){
        $(this).css('background','green')
               .css('border','dashed 10px yellow')
               .css('width','250px')
    }

    caja.hover(cambiarojo, cambiaverde)


    //evento click y doble click

    caja.click(function(){
        caja.css('border','dashed 10px yellow')
    })

    caja.dblclick(function(){
        caja.css('background-color','pink')
    })

    //    focus  blur
    var datos = $('.datos');
    var nombre = $('#nombre')
    


    nombre.focus(function(){
        $(this).css('border','20px solid green');
    });


    nombre.blur(function(){
        $(this).css('border','2px solid yellow');
        datos.text(nombre.val()).show();
    });

// Mousedown Mouseup

    datos.mousedown(function(){
        $(this).css('border-color','orange');
    })

    datos.mouseup(function(){
        $(this).css('border-color','yellow');
    })

//        mousemove

    $(document).mousemove(function(){

        var movimientoX = event.clientX;
        var movimientoY = event.clientY;

        if (movimientoX > 450) {

            $('body').css('background-color','red')
                     .css('cursor','none');

        }else {
            $('body').css('background-color','blue');
        }

        $('#sigueme').css('top',movimientoY)
                     .css('left',movimientoX)



        console.log('en X '+(event.clientX));
       console.log('en Y '+(event.clientY));
    })

});


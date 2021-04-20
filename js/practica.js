$(document).ready(function(){

    // Selector con ID

    var rojo = $('#rojo');
    var verde = $('#verde')
    var amarillo = $('#amarillo')

    var crojo = $('.border');
    var camarillo = $('.border_dashed');
    var cverde = $('.border');

    crojo.click(function(){
        $(this).addClass('sborder')
    })

    camarillo.click(function(){
        $(this).addClass('sborder_dashed');
    })

    cverde.click(function(){
        $(this).addClass('sborder')
    })

    //selectores por etiquetas

    var parrafo = $('p');

    parrafo.click(function(){
        var that = $(this);
        if (!that.hasClass('grande')){
            that.addClass('grande');

        }else{ that.removeClass('grande');
        }
    });

//selectores de atributo

    $('[title ="google"]').css('background','black');
    $('[title ="github"]').css('background','blue');

//               find y parents

   // $('p,a').addClass('margen_susperior');

    var busqueda = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title ="google"]');

    console.log(busqueda);
});

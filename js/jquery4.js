$(document).ready(function(){
    var div = $('#caja');
    var muestra = $('#mostrar');
    var ocultar = $('#ocultar');
    var animar = $('#animame');
    var boton = $('#ambos');

    ocultar.hide();
    div.hide();


    muestra.click(function(){
        $(this).hide();
        div.slideDown('slow',function(){
            console.log('aqui tambien ALV')
        });
        ocultar.show();
    })

    ocultar.click(function(){
        $(this).hide();
        div.slideUp('slow',function(){
            console.log('ya quedo')
        });
        muestra.show();
        
    })



    boton.click(function(){
        div.slideToggle('fast')
    })

    animar.click(function(){

        div.animate({
            marginLeft:'500px',
            fontSize:'50px',
            height:'200px'}
            , 'slow')
        .animate({
            borderRadius: '99px',
            marginTop:'80px'
            },'slow')
        .animate({
            borderRadius: '99px',
            marginLeft: '0px'
            },'slow')
        .animate({
            marginTop: '5px',
            borderRadius: '0px'
        }, 'slow')

    })
});
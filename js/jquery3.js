$(document).ready(function(){


    $('#add_button').click(function(){

        var valor = $('#nuevo_enlace').val();

        console.log(valor);

        $('#lista').after('<li><a href="'+valor+'">'+valor+'</a></li>');
    })



    cargarenlaces();
});

function cargarenlaces(){
        $('a').each(function(index){
        var that = $(this);
        var elaces = that.attr('href');
        that.text(elaces);
    });
}


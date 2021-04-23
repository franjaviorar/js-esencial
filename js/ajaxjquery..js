$(document).ready(function(){

    // load 
    var datos = $('#datos');
    var url = "https://reqres.in/api/users"

    //datos.load('https://reqres.in/');

    // GET

    /* $.get(url, {page: 2}, function(resp){

        var inf = resp.data;

        inf.forEach((info, index) => {

            var nombre = info.first_name;
            var apellido = info.last_name;
            var email = info.email;

            datos.append("<p>"+ nombre + " " + apellido + " Email: " + email + '</p>');
        
            console.log(nombre);
                });

        console.log(resp);
    });*/
    //  POST

    var formulario = $('#formulario');
    var nombre = $('input[name="nombre"');
    var edad = $('input[name="edad"');
    var email = $('input[name="email"');
    var nacionalidad = $('input[name="nacionalidad"');

    formulario.submit(function(e){

        
        e.preventDefault();

        var usuario = {
            'nombre': nombre.val(),
            'edad': edad.val(),
            'email': email.val(),
            'nacionalidad': nacionalidad.val()
        };

      /*  $.post($(this).attr('action'), usuario, function(resp){
            console.log(resp);

        }).done(function(){

            alert('ya quedo')
        });*/

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: usuario,
            beforeSend: function(){
                console.log('enviando informacion...')
            },
            success: function(){
                console.log('Exito en la operacion')
                console.log(usuario);
                datos.append("<p>"+ "nombre del usuario" + usuario.nombre + " " + 'Edad:' + usuario.edad + " Email: " + usuario.email + '</p>');
            },
            error: function(){
                console.log('error ocurrido')
            },
            timeout: 10000
        })

    });

});

$(document).ready(function(){
    $('a').each(function(index){
        var that = $(this);
        var elances = that.attr('href');

        that.text(elances);

    });
});
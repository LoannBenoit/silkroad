$(document).ready(function () {
    jQuery.getJSON('js/catalog1.js'),
    function (data) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
          });
        return data
    }
    console.log(data);
    
    $('.productName').append();
    $('.productDesc').append('This is a description');
    $('.productPrice').append('1236451€');
});



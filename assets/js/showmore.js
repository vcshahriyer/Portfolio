$(window).ready(function ($) {
    var fragmentNumber=1;
    /* Masonary show more button */
    $('#showmore').on('click', function (e) {
        var $response;
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "assets/fragments/f"+fragmentNumber+".html",
            async: false,
            beforeSend: function(){
                $('#showmore').css('cursor','not-allowed');
            },
            success: function (text) {
                $response = $(text);
                fragmentNumber++;
                $('#showmore').css('cursor','pointer');
            },
            error: function (message) {
                $('#showmore').html('No More');
            }
        });
        //$('.box-items').append(response);
        var $boxitems = $('.box-items');
        $boxitems.append( $response ).masonry( 'appended', $response );
        $boxitems
            .masonry('reloadItems')
            .masonry({ itemSelector: '.box-item' });
    });

});
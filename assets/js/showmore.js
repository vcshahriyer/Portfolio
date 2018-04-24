$(window).ready(function ($) {
    // Container of masonary filter.
    var $boxitems = $('.box-items');

    // Hide show more button in all tabs except ALL button.
    $('.btn-group input:radio[name=fl_radio]').click(function (event) {
        var $btn = $(event.target).val();
        if($btn != 'box-item'){
            $('#showmore').css('display','none');
        }else {
            $('#showmore').css('display','inline-block');
        }
    });

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
        $boxitems.append( $response ).masonry( 'appended', $response );
        $boxitems
            .multipleFilterMasonry({
            itemSelector: '.box-item',
            filtersGroupSelector: '.filters',
            percentPosition: false,
            gutter: 0
            })
            .masonry( 'reloadItems' );

    });

});
$(window).ready(function ($) {
    // Container of masonary filter.
    var $boxitems = $('.box-items');
    var $showmore = $('#showmore');
    var loadUrl = window.location.href.replace('#works-section','');
    var customurl = loadUrl+"#works-section";
    // Hide show more button in all tabs except ALL button.
    $('.btn-group input:radio[name=fl_radio]').click(function (event) {
        var $btn = $(event.target).val();
        if($btn != 'box-item'){
            $showmore.css('display','none');
        }else {
            $showmore.css('display','inline-block');
        }
    });

    var fragmentNumber=1;
    /* Masonary show more button */
    $showmore.on('click', function (e) {
        var $response;
        e.preventDefault();

            $.ajax({
                type: "GET",
                url: "assets/fragments/f" + fragmentNumber + ".html",
                async: false,
                beforeSend: function () {
                    //$('#showmore').css('cursor','not-allowed');
                },
                success: function (text) {
                    $response = $(text);
                    if(fragmentNumber==4){ $showmore.html('Clear All');}
                    fragmentNumber++;
                },
                error: function (message) {
                    $showmore.html('Clear All');
                }
            });
            $boxitems.append($response).masonry('appended', $response);
            $boxitems
                .multipleFilterMasonry({
                    itemSelector: '.box-item',
                    filtersGroupSelector: '.filters',
                    percentPosition: false,
                    gutter: 0
                })
                .masonry('reloadItems');


        if( fragmentNumber==5 ){
            $showmore.click(function () {
                location.reload();
                window.location.href = customurl;
            });
        }

    });

});
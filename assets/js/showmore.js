$(window).ready(function($) {
    var $boxitems = $('.box-items');
    var $showmore = $('#showmore');
    var loadUrl = window.location.href.replace('#works-section', '');
    var customurl = loadUrl + "#works-section";
    $('.btn-group input:radio[name=fl_radio]').click(function(event) {
        var $btn = $(event.target).val();
        if ($btn != 'box-item') {
            $showmore.css('display', 'none');
        } else {
            $showmore.css('display', 'inline-block');
        }
    });
    var fragmentNumber = 1;
    $showmore.on('click', function(e) {
        var $response;
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "assets/fragments/f" + fragmentNumber + ".html",
            async: false,
            beforeSend: function() {},
            success: function(text) {
                $response = $(text);
                if (fragmentNumber == 4) {
                    $showmore.html('Clear All');
                }
                fragmentNumber++;
            },
            error: function(message) {
                $showmore.html('Clear All');
            }
        });
        $boxitems.append($response).masonry('appended', $response);
        $boxitems.multipleFilterMasonry({
            itemSelector: '.box-item',
            filtersGroupSelector: '.filters',
            percentPosition: false,
            gutter: 0
        }).masonry('reloadItems');
        if (fragmentNumber == 5) {
            $showmore.click(function() {
                location.reload();
                window.location.href = customurl;
            });
        }
    });
    // form javascript
    function initMail() {
        $('form#cform').on('submit', function(e) {
            e.preventDefault();
            var form = $(this);
            var $alertSuccess = $('.alert-success');
            $("#submit").attr('disabled', 'disabled');
            var post_data = form.serialize();
            $('div#form-loader').removeClass('is-hidden').fadeIn(500);
            $.ajax({
                type: 'POST',
                url: 'send.php',
                data: post_data
            }).done(function() {
                $('div#form-loader').fadeOut(500);
                $alertSuccess.css('display','block');
                $("form#cform")[0].reset();
                $("#submit").removeAttr('disabled', 'disabled');
            }).fail(function() {
                $('div#form-loader').fadeOut(500);
                $alertSuccess.css('display','block');
                $('div.alert-success>p').html("Something went <b>wrong!</b>");
                $("#submit").removeAttr('disabled', 'disabled');
                $alertSuccess.fadeOut(1500);
            });
        });
    }
    initMail();



});
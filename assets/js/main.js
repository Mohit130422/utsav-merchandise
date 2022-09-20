$(document).ready(function () {
    $(".question").hide();
    $('input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".post_content").not(targetBox).hide();
        $(targetBox).show();
    });

    $("#bell").click(function () {
        $("#box").toggle();
    });
    $(".action-btn").click(function () {
        $("#act-box").toggle()
    });
    $("#close, main").click(function () {
        $("#box").hide();
        $(".sidebar").removeClass('openside');
        $("#act-box").hide();
    });
    $(document).ready(function(){
        $(".btnmenu").click(function(){
            $(".sidebar").toggleClass('openside');
        });
    });

    $('#recommended-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('#trending-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('#teachers-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

});
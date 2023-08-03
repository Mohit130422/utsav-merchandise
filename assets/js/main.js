$(document).ready(function () {
    $("#bell").click(function () {
        $("#box").toggle();
    });
    $(".action-btn").click(function () {
        $("#act-box").toggle()
    });
    $(".profile-pic").click(function () {
        $("#profile-box").toggle()
    });
    $("#close, main").click(function () {
        $("#box").hide();
        $(".sidebar").removeClass('openside');
        $("#act-box").hide();
        $("#profile-box").hide();
        $(".search-area").css({top: "-65%"});
    });
    $(".btnmenu").click(function(){
        $(".sidebar").toggleClass('openside');
    });
    $('#order-done').click(function(){
        $("#confirmation-box").css("display","flex");
    });
    $("#btnCloseDone, #btnDone").click(function(){
        $("#confirmation-box").hide();
    });
    $('#search').click(function () {
        $(".search-area").css({top: "18%"});
    });
    $('.outline-action-btn').click(function() {
        setTimeout(function(){
            $("#alertMessage").show();
        },[]);
        setTimeout(function(){
            $("#alertMessage").fadeOut();
        }, 2000);
    }); 

    $('#update').click(function() {
        $('.count').html(function(i, val) { return val*1+1 });
    });
    $('#minus').click(function() {
        $('.count').html(function(i, val) { return val*1-1 });
    });

    $('.img-border').click(function(){
        $("#img-box").css("display","flex");
    });
    $('#product-img-mob').owlCarousel({
        loop: false,
        margin: 16,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2

            },
            1000: {
                items: 3
            }
        }
    });
    $('#zoom-img-carousel').owlCarousel({
        loop: false,
        margin: 16,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1

            },
            1000: {
                items: 1
            }
        }
    });
    $('#merchandise-slide').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:true,
        lazyLoad:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                dots:false
            }
        }
    })
});
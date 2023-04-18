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
});
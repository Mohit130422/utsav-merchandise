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
    });
    $(document).ready(function(){
        $(".btnmenu").click(function(){
            $(".sidebar").toggleClass('openside');
        });
    });
    $("#opt").click(function () {
        $("#opt-box").show();
    });
    $("#follow").click(function () {
        $("#opt-box").hide();
    });
    $("#ask").click(function () {
        $("#ask-question").show();
        $("body").addClass("overflow-hidden");
    })
    $("#inspire").click(function () {
        $("#post-inspiration").show();
        $("body").addClass("overflow-hidden");
    })
    $("#add-img").click(function () {
        $("#add-image").show();
    })
    $(".close-modal").click(function () {
        $(".modal").hide();
        $("body").removeClass("overflow-hidden");
    })
    $("#cat-option").click(function () {
        $("#category").toggle();
    })
    $("#add-image").click(function () {
        $("#category").hide();
    })

    $(".like-stat").click(function () {
        $("#post-likes").show();
        $("body").addClass("overflow-hidden");
    })
    $(".comment").click(function () {
        $(".user-comments").toggle();
    })

    $(".category").click(function () {
        var id = $(this).attr('id');
        var mySecondDiv = $("<li><input type='checkbox' id='" + id + "'><label class='selected-cat' id='" + id + "' for='" + id + "'>" + id + "<i class='fas fa-times' id='close'></i></label></li>");
        $("#selected-category").append(mySecondDiv);
        $("." + id).hide();
    })

    $('.selected-cat').on('click', function () {
        var target = $(this).attr('for');
        console.log(target)
        $("#" + target).hide().siblings(".category").show();
    });
});
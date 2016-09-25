$(function() {

    var i = 1;
    var x = 2;
    var preBtn = $('#pre-btn');
    var nxteBtn = $('#nxt-btn');
    var submitBtn = $('#submit-btn');

    //When onclick next method
    $('#nxt-btn').click(function() {
        i += 1;
        if (i <= 3) {
            var a = $('#' + i);
            a.fadeIn("slow");
        }
        x -= 1;
        if (x <= 3) {
            var b = $('#' + x);
            b.fadeOut("fast");
            x += 2;
        }
        if (i >= 2) {
            preBtn.prop("disabled", false);
            submitBtn.prop("disabled", false);
            nxteBtn.css("display", "none");
        }
        if (i == 2) {
            $('#nxt-modal').css("display", "");
        }
    });

    //when onclick previous button
    $('#pre-btn').click(function() {
        if (i <= 3) {
            i -= 1;
            var b = $('#' + i);
            b.fadeIn("fast");
        }
        if (x <= 3) {
            x -= 1;
            var a = $('#' + x);
            a.fadeOut("slow");
        }
        if (i < 2) {
            preBtn.prop("disabled", true);
        }
        if (i < 2) {
            //nxteBtn.prop("disabled", false);
            nxteBtn.css("display", "");
            submitBtn.prop("disabled", true);
        }
    });

});
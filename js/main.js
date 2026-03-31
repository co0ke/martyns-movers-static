$(document).ready(function () {
    
    resize();
    window.onresize = function () {
        resize();
    };

});

function resize() {
    var header = $('header');
    if (header.height() > 87 && header.width() > 680) {
        header.addClass("double-line");
    }
    else {
        header.removeClass("double-line");
    }
}

function contactSuccess() {
    $('.contact form #status').show();
}

function contactBegin() {
    $('.contact form #status').hide();
}
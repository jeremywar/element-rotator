

// Register custom transitions plugin, only 2 options: .cycleContent({speed: 2000, displaytime: 4000})
; (function ($) {
    var speed;
    var displaytime;
    var elementNumber;
    $.fn.cycleContent = function (options) {
        speed = options.speed;
        displaytime = options.displaytime;
        elementNumber = 1;
        if (!$(this).css('position') == 'absolute' && !$(this).css('position') == 'relative') {
            $(this).css('position', 'relative')
        }
        $(this).children().hide().css('position', 'absolute').each(function () {
            $(this).addClass('cycle' + elementNumber);
            elementNumber++;
        });
        $('.cycle1').show();
        elementNumber = 1;
        setTimeout(function () { transitions() }, displaytime);
    }
    function transitions() {
        $('.cycle' + elementNumber).fadeOut(speed);
        elementNumber++;
        if (!$('.cycle' + elementNumber).length) {
            elementNumber = 1;
        }
        $('.cycle' + elementNumber).fadeIn(speed, function () {
            setTimeout(function () { transitions() }, displaytime);
        });
    }
})(jQuery);


$(document).on('scroll', function () {

    var pixels = $(document).scrollTop()

    $("div.video-container").css("top", pixels * -0.5)

})
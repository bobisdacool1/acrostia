$(document).ready(function() {
	$("#form").submit(function() { //Change
		var th = $(this);
		$.mail({
			type: "POST",
			url: "libs/mail/mail.php", //Change
			data: th.serialize()
        })
        .done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
var ofefset = 0
function scrollToThe(id, ofefset) {
    if (ofefset == undefined) {
        ofefset = 0
        $('html, body').animate({
            scrollTop: $(id).offset().top - ofefset
        }, 1200)
    }
    else {
        $('html, body').animate({
            scrollTop: $(id).offset().top - ofefset
        }, 1200)
    }
}
$(function () {
    $('a[href=""]').click(function () {
        return false;
    });
})
// WORKS SECTION
$(".work").mousein (function() {
    console.log('cool')
    $(".name").css("display", "none")
})
$(".work").mouseout (function(){
    $("body").css("display", "none")
})
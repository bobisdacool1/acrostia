$(document).ready(function () {
    $("#form").submit(function () { //Change
        var th = $(this);
        $.mail({
            type: "POST",
            url: "libs/mail/mail.php", //Change
            data: th.serialize()
        })
            .done(function () {
                alert("Thank you!");
                setTimeout(function () {
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
    return false
}
$('a[href=""]').click(function() {
    return false;
});
///////////////////////////////////////////////
//////////////////slider///////////////////////
///////////////////////////////////////////////
function slideSS(ziga){
    console.log('u gay')
    if (ziga == 0){
        $('.hero-desc-wrap').fadeOut(300)
        $('.first-slide').fadeIn(300)
        $('.point').removeClass('point-active')
        $('#point-1').addClass('point-active')
    }
    if (ziga == 1){
        $('.hero-desc-wrap').fadeOut(300)
        $('.second-slide').fadeIn(300)
        $('.point').removeClass('point-active')
        $('#point-2').addClass('point-active')
    }
    if (ziga == 2){
        $('.hero-desc-wrap').fadeOut(300)
        $('.third-slide').fadeIn(300)
        $('.point').removeClass('point-active')
        $('#point-3').addClass('point-active')
    }
}

var curretSlide = 0
$('#arrow-left').click(function () {
    if (curretSlide != 0){
        curretSlide--
    } else {
        curretSlide = 2
    }
    console.log(curretSlide)
    slideSS(curretSlide)
})
$('#arrow-right').click(function(){
    if (curretSlide != 2){
        curretSlide++
    } else {
        curretSlide = 0
    }
    console.log(curretSlide)
    slideSS(curretSlide)
})
$('#point-1').click(function(){
    curretSlide = 0
    slideSS(curretSlide)
})
$('#point-2').click(function(){
    curretSlide = 1
    slideSS(curretSlide)
})
$('#point-3').click(function(){
    curretSlide = 2
    slideSS(curretSlide)
})
///////////////////////////////////////////////////////
/////////////////////Protfolio/////////////////////////
///////////////////////////////////////////////////////

$('.work').mouseenter(function(){
    $(this).addClass('hover')
    $('.name').addClass('hidden')
})
$('.work').mouseleave(function(){
    $(this).removeClass('hover')
    $('.name').removeClass('hidden')
})  
$('.category-item').click(function(){
    $('.category-item').removeClass('active')
    $(this).addClass('active')
})
$('#all').click(function(){
    $('.work-desc').text('logo')
})
$('#photo').click(function(){
    $('.work-desc').text('Photo design')
})
$('#logo').click(function(){
    $('.work-desc').text('Logo design')
})
$('#web').click(function(){
    $('.work-desc').text('Web design')
})
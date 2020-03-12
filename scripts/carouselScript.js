
$('.carousel[data-type="multi"] .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < States.CardsLimit; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

$(function() {
    $('#minimize').click(function() {
        if ( $('#carousel').is(":hidden")){
            $('.b-container').css({'height': '250px', 'padding':'', 'border-radius': ''});
            setTimeout(
                function() 
                {
                    $('#carousel').show();
                    $('#minimize').html('<i class="fas fa-level-up-alt"></i>')
                }, 300);
        }else{
            $('.b-container').css({'height': '35px', 'padding':'0', 'border-radius': '10px'});
            $('#carousel').delay(150).hide(0);
            $('#minimize').html('<i class="fas fa-level-down-alt"></i>')
        }
    });
  });
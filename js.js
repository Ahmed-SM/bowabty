
    $( "#feedback-form" ).submit(function( event ) {
        alert( "called." );
        event.preventDefault();
      });

      $('.carousel[data-type="multi"] .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    
        for (var i = 0; i < 5; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
    
            next.children(':first-child').clone().appendTo($(this));
        }
    });
    $( document ).ready(function() {
            var allDCard = $(".d-card");
            if ($(window).width() > 1200){
                $("#d-card").clone().appendTo($("#slider").children());
            }
            else{
                var item = document.createElement("div");
                item.setAttribute("class", "item item-alig")
                var container = document.createElement("div");
                container.setAttribute("style", "display: inline-flex; width: 80%;")
                let card = document.getElementById("d-card");
                let d_card = card.cloneNode(true);
                container.appendChild(d_card);
                item.appendChild(container);
                document.getElementById("d-content").appendChild(item)
            }
    });
    // var width = $(window).width();
    // $(window).on('resize', function() {
    // if ($(this).width() < width) {
    //     width = $(this).width();
    // }
    // });
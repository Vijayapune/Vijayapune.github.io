$(document).ready(function () {
   
    $(document).on('click', 'a[href^="#"]', function(event) {
       event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 95
        }, 300);
        
    });

    baguetteBox.run('.baguetteBoxOne, .baguetteBoxfloorplan');

    $(".show-hide-button").on('click', function(){
            $('.hide-specification').toggleClass('hide');
            $(this).find('span').toggleClass('hide')
    });
      
});
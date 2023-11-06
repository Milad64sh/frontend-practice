function subChanges() {
    $('.co-product__package').find('.one-time').addClass('hide');
    $('.co-product__package').find('.sub').removeClass('hide');
}

function subDisChanges() {
    $('.co-product__package').find('.sub').addClass('hide');
    $('.co-product__package').find('.one-time').removeClass('hide');
}

jQuery(document).ready(function($) {
    $('.cta-scroll').on('click', function(e) {
        e.preventDefault();

        let destination = $('#cta-section').offset().top;

        $("html,body").animate({
            scrollTop: destination
        }, 500);

        return false;
    });

    $('.save_today input').on('change', function() {
    	
    	$('.perks').toggleClass('active');

        if ($(this).is(':checked')) {
            subChanges();
        } else {
            subDisChanges();
        }

        if($(window).width() < 991) {
            let destination = $('.co-product__packages').offset().top - 50; 

            $("html,body").animate({
                scrollTop: destination
            }, 500);
        }
    });
});
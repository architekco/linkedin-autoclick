setInterval(function () {
    jQuery('.mn-person-info').each(function () {
        var button      = jQuery(this).find('.button-secondary-small');
        var friendName  = jQuery(this).find('.mn-person-info__name').text();
        var toScroll    = jQuery(document).height();
        if (jQuery(button).length) {
            if (!jQuery(button).hasClass('clicked')) {
                jQuery(button).click();
                console.log('Sent connect with ' + friendName.trim());
                jQuery(button).addClass('clicked');
            }
            if (jQuery(button).hasClass('clicked')) {
                jQuery("html, body").animate({ scrollTop: toScroll }, 0);
                jQuery(button).closest('li').remove();
            }
        }
    })
}, 5000);

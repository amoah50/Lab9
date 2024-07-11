// scripts.js
$(document).ready(function() {
    // Filter images by category
    $('.filters button').on('click', function() {
        var filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.gallery-item').fadeIn();
        } else {
            $('.gallery-item').hide();
            $('.gallery-item[data-category="' + filter + '"]').fadeIn();
        }
    });

    // Lightbox functionality
    $('.gallery-item').on('click', function() {
        var src = $(this).find('img').attr('src');
        $('#lightbox-img').attr('src', src);
        $('#lightbox').fadeIn();
    });

    // Close lightbox
    $('.close, #lightbox').on('click', function() {
        $('#lightbox').fadeOut();
    });

    // Prevent lightbox from closing when clicking on the image
    $('.lightbox-content').on('click', function(event) {
        event.stopPropagation();
    });

    // Apply hover effects on gallery items
    $('.gallery-item').hover(function() {
        $(this).find('img').css('transform', 'scale(1.1)');
    }, function() {
        $(this).find('img').css('transform', 'scale(1)');
    });

    // Ensure smooth integration and interactivity
    $(window).on('resize', function() {
        // Code to ensure responsiveness and proper layout on window resize
        if ($(window).width() < 600) {
            $('.gallery').css('flex-direction', 'column');
        } else {
            $('.gallery').css('flex-direction', 'row');
        }
    }).trigger('resize');

    // Additional animation effect on hover for filter buttons
    $('.filters button').hover(function() {
        $(this).animate({ backgroundColor: '#555' }, 200);
    }, function() {
        $(this).animate({ backgroundColor: '#333' }, 200);
    });
});

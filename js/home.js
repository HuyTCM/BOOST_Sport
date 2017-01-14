$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        pagination: false
    });
    owl.trigger('owl.play', 3000);

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    });
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    });

    $('#nav-shop').hover(function () {
        $('#nav-shop').parent().addClass('hover-active')
        $('#shop-menu').css('display', 'block');
    });
    $(document).on('mousemove', function (e) {
        if (e.target.id !== 'nav-shop' && !$(e.target).closest('#shop-menu')[0]) {
            $('#nav-shop').parent().removeClass('hover-active')
            $('#shop-menu').css('display', 'none');
        }
        if (e.target.id === 'men-menu') {
            $('.menu-items').removeClass('active');
            $('.menu-category').removeClass('active');
            $('#men-items').addClass('active');
            $('#men-menu').addClass('active');
        }
        if (e.target.id === 'women-menu') {
            $('.menu-items').removeClass('active');
            $('.menu-category').removeClass('active');
            $('#women-items').addClass('active');
            $('#women-menu').addClass('active');
        }
        if (e.target.id === 'kid-menu') {
            $('.menu-items').removeClass('active');
            $('.menu-category').removeClass('active');
            $('#kid-items').addClass('active');
            $('#kid-menu').addClass('active');
        }
    });

});
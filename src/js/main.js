$(function () {

    $('.portfolio-items__portfolio-item').hover(
        function () {
            $('.portfolio-items__img').toggleClass('on');
            $('.portfolio-items__img-right').removeClass('on');
            $('.portfolio-items__portfolio-item').toggleClass('on');
        }
    );

    $('.portfolio-items__portfolio-item-right').hover(
        function () {
            $('.portfolio-items__img-right').toggleClass('on');
            $('.portfolio-items__img').removeClass('on');
        }
    );

    $('.menu__item-contact').on('click', function () {
        $('.menu__item-contacts').toggleClass('on');
    });

    $('.menu__btn').on('click', function () {
        $('.menu__items').toggleClass('off');

    });
});

/**
 * Created by HuyTCM on 1/14/17.
 */
(function () {

    $(document).ready(function () {
        "use strict";
        // get url param
        fillData();
    });
    function fillData() {
        var id = findGetParameter('id');
        var category = findGetParameter('category');
        var type = findGetParameter('type');
        var index = findGetParameter('index');
        var model;
        var imgPath = 'images/';
        if (id == 1) {
            // men
            model = MEN_ITEM;
            imgPath += 'men/';
        } else if (id == 2) {
            // women
            model = WOMEN_ITEM;
            imgPath += 'women/';
        } else if (id == 3) {
            // kid
            var gender = findGetParameter('gender');
            if (gender == 1) {
                model = KID_ITEMS.boy;
            } else {
                model = KID_ITEMS.girl;
            }
            imgPath += 'kid/';
        }

        if (type==='all') {

        }
        var item = type==='all' ? getAll(model[category])[index] : model[category][type][index];
        showData(item, imgPath);
    }

    function showData(item, imgPath) {
        var imgSrc = imgPath + item.img[0].src;
        var reviewImg = $('<img>');
        reviewImg.attr('src', imgSrc);
        $('#review-img').append(reviewImg);

        $('#product-name').text(item.name);
        $('#product-shortDesc').text(item.shortDesc);
        $('#product-price').text(item.price);
        $('#product-color').text(item.color);
    }
    function getAll(categories) {
        var items = [];
        $.each(categories, function( index, category ) {
            $.each(category, function( i, item ) {
                items.push(item);
            });
        });
        return items;
    }
}).call();
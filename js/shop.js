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
        var url = '?id=' +id+ '&category='+category+'&type='+type;

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
            url += '&gender='+gender;
            imgPath += 'kid/';
        }

        var categories;
        var items;
        if (category === 'shoes') {
            categories = model.shoes;
            items = getShoes(categories, type);
        } else if (category === 'apparel') {
            categories = model.apparel;
            items = getApparel(categories, type);
        } else if (category === 'accessories') {
            categories = model.accessories;
            items = getAccessories(categories, type);
        }

        if (items) {
            appendItems(items, imgPath, url);
        }
    }

    function getShoes(categories, type) {
        return categories[type];
    }

    function getApparel(categories, type) {
        return categories[type];
    }

    function getAccessories(categories, type) {
        return categories[type];
    }

    function appendItems(items, imgPath, url) {
        // fill items
        var listItem = $('#list-items-row');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var imgSrc = imgPath + item.img[0].src;
            var itemDiv = $("<div class='col-md-4'></div>");
            var itemHref = $("<a></a>");
            itemHref.attr('href', 'detail.html' + url + '&index=' + i);
            var itemDivCard = $("<div class='item-card'></div>");
            var itemImg = $("<img>");

            itemImg.attr('src', imgSrc);
            itemDivCard.append(itemImg);
            itemHref.append(itemDivCard);
            itemDiv.append(itemHref);
            listItem.append(itemDiv);
        }

    }

}).call();
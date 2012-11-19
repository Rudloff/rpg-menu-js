/*global $, RPGmenu*/
var init = function () {
    'use strict';
    var items, menu;
    items = [
        {name: 'Test 1', content: '<b>lol</b>'},
        {name: 'Test 2', content: '<ul><li>lol</li><li>lol</li><li>lol</li></ul>'},
        {name: 'Test 3', content: '<h2>Title</h2><p>Text blafuzeifgeyuzgyizbvzjenuize</p>'},
        {name: 'Test 4', content: ''}
    ];
    menu = new RPGmenu.menu(items);
};

$(document).ready(init);

/*global $, Audio*/
/*jslint browser: true */
/*
 * Sounds are under CC BY-SA by Guillaume and Franck Lecollinet
 * (https://github.com/mozilla/BrowserQuest)
 * */
var RPGmenu = {
    selected: 1,
    sound : new Audio(),
    playSound : function (file) {
        'use strict';
        RPGmenu.sound.src = file;
        RPGmenu.sound.play();
    },
    keyPress: function (e) {
        'use strict';
        switch (e.keyCode) {
        case 38:
            //Up
            if (RPGmenu.selected > 1) {
                $('#RPGmenu li:nth-child(' + RPGmenu.selected + ')').removeClass('selected');
                RPGmenu.selected -= 1;
                $('#RPGmenu li:nth-child(' + RPGmenu.selected + ')').addClass('selected');
                RPGmenu.playSound('npctalk.ogg');
            }
            break;
        case 40:
            //Down  
            if (RPGmenu.selected < $('#RPGmenu li').length) {
                $('#RPGmenu li:nth-child(' + RPGmenu.selected + ')').removeClass('selected');
                RPGmenu.selected += 1;
                $('#RPGmenu li:nth-child(' + RPGmenu.selected + ')').addClass('selected');
                RPGmenu.playSound('npctalk.ogg');
            }
            break;
        case 37:
            //Left
            break;
        case 39:
            //Right
            break;
        case 13:
            //Enter
            RPGmenu.playSound('npc-end.ogg');
            $('body').append('<div class="RPGcontent">' + decodeURI($('#RPGmenu li:nth-child(' + RPGmenu.selected + ')').data('content')) + '</div>');
            break;
        case 27:
            //Escape
            $('.RPGcontent').remove();
            RPGmenu.playSound('noloot.ogg');
            break;
        }
    },
    addItems : function (element) {
        'use strict';
        $('#RPGmenu ul').append('<li data-content="' + encodeURI(element.content) + '">' + element.name + '</li>');
    },
    menu: function (items) {
        'use strict';
        $('body').html('<nav id="RPGmenu" class="RPGmenu"><ul></ul></nav>');
        items.forEach(RPGmenu.addItems);
        $('#RPGmenu li:first-child').addClass('selected');
        $(window).keydown(RPGmenu.keyPress);
    }
};

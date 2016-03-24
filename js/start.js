"use strict";

//$(function() {});

function checkForCustomName() {
    
    let url = window.location.href;
    let index = url.indexOf('?');
    if (index === -1) return;
    
    let name = url.substring(index + 1).trim();
    if (name.length == 0) return;
    
    try {
        name = decodeURIComponent(name);
        $('#name').html(`, ${name}`);
    } catch(err) {}
}

function setDate() {
    var now = new Date();
    var month = now.getMonth();
    var day = now.getDate();
    $('#date').html(`${monthString(month)} ${day}`);
}

function monthString(month) {
    switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: return 'null';
    }
}

/**********   CALL METHODS HERE   **********/
checkForCustomName();
setDate();
/*******************************************/
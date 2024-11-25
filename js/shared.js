var count = $('ol.reversed li').length + 1;
$("#shared").append('div.ccm-page ol.reversed {counter-reset: counter-name ' + count + ';}');
$("#shared").append('div.ccm-page ol.reversed li:before {counter-increment: counter-name -1;}');
$("#shared").append('div.ccm-page ol.reversed li:before {display: block;}');
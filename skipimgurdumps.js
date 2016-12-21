// ==UserScript==
// @name        Skip Imgur dumps
// @namespace   skipimgurdumps
// @description When browsing on the gallery and finding a dump, skips to the next page automatically.
// @include     http://imgur.com/gallery/*
// @include     https://imgur.com/gallery/*
// @version     1
// @icon        http://i.imgur.com/J6dn9Rs.png
// @copyright   2016, heidi666
// @grant       none
// ==/UserScript==

var re = new RegExp(/dump/i);

function checkDump() {
  title = $("h1")[0].innerText;
  if (re.test(title)) {
    $('.navNext').click();
  }
}

$(".navNext").click(function() {
  setTimeout(checkDump, 500);
});

checkDump();

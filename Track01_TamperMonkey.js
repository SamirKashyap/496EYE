// ==UserScript==
// @name         Remove Emojis Track 1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/opensim-org/opensim-core/pull/894
// @match        https://github.com/mozilla/addons-server/pull/2785
// @match        https://github.com/atom/atom/pull/2502
// @match        https://github.com/mozilla/addons-server/pull/1926
// @match        https://github.com/code-dot-org/code-dot-org/pull/7789
// @match        https://github.com/atom/atom/pull/3241
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;

    var emojis = $('g-emoji, img.emoji')
    emojis.remove();
})();

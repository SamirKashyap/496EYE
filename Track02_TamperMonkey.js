// ==UserScript==
// @name         Remove Emojis Track 2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/code-dot-org/code-dot-org/pull/2291
// @match        https://github.com/w3c/respec/pull/346
// @match        https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet/pull/408
// @match        https://github.com/code-dot-org/code-dot-org/pull/415
// @match        https://github.com/atom/atom/pull/4973
// @match        https://github.com/code-dot-org/code-dot-org/pull/685
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

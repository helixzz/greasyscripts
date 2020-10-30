// ==UserScript==
// @name         Confluence Watermark Remover
// @namespace    https://confluence.helixzz.com/
// @version      0.1
// @description  Remove page watermark created by "Confluence Page Watermark" plugin.
// @author       HeliXZz
// @include      *
// @match        *.action*
// @grant        none
// @license      MIT
// ==/UserScript==
(function() {
    console.log('Confluence Watermark Remover loaded.');
    var target = document.body;
    var config = { attributes: true, childList: true, characterData: true };
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var wm = document.getElementById("wm");
            if (wm) {
                console.log('Watermark Removed.');
                wm.remove();
                observer.disconnect();
            }
        });
    });
    observer.observe(target, config);
})();

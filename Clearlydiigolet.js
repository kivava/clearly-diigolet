javascript: (function () {
    s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://www.diigo.com/javascripts/webtoolbar/diigolet_b_h_b.js";
    iframe = document.getElementById('readable_iframe');
    innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    innerDoc.body.appendChild(s);
})();
(function () {

    if (typeof navigator === 'undefined') {
        return false;
    }

    var ua = navigator.userAgent || '';

    // In ios platform
    if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        var html = document.documentElement;
        html.style.cssText += [
            '-webkit-text-size-adjust:100% !important',
                    'text-size-adjust:100% !important'
        ].join(';');
    }

    // hack for Android 
    if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {
        document.addEventListener('DOMContentLoaded', function () {
            var el = document.createElement('div');
            el.style = 'font-size:10px;';
            document.body.appendChild(el);

            var scaledFontSize = parseInt(window.getComputedStyle(el, null).getPropertyValue('font-size'));
            document.body.removeChild(el);
            var scaleFactor = 10 / scaledFontSize;

            var html = document.documentElement;

            var htmlFontSize = parseInt(window.getComputedStyle(html, null).getPropertyValue('font-size'));
            html.style.fontSize = htmlFontSize * scaleFactor + 'px';
        }, false);
    }
})();
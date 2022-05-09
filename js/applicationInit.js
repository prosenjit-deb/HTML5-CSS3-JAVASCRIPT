var _lg_form_ = _lg_form_ || {};
var initObject = window._lg_form_init_ || window;
var getFromInit = function(b) {
    if (initObject.hasOwnProperty(b)) {
        return initObject[b]
    }

    function a(d) {
        var f = (window.location.search || "").replace(/^(\?)/, "");
        var g = f.split("&");
        for (var e = 0; e < g.length; e++) {
            var h = g[e].split("=");
            if (decodeURIComponent(h[0]) === d && typeof h[1] !== "undefined") {
                return decodeURIComponent(h[1])
            }
        }
        return undefined
    }
    try {
        return a(b)
    } catch (c) {
        window.console && console.error && console.error(c);
        return undefined
    }
};
_lg_form_.affiliateId = getFromInit("aid");
_lg_form_.formName = getFromInit("template");
_lg_form_.source = getFromInit("ref") || getFromInit("source");
_lg_form_.click_id = getFromInit("click_id");
_lg_form_.formData = getFromInit("form_data") || null;
_lg_form_.encryptToken = getFromInit("token") || null;
if (getFromInit("conversionCode") != undefined) {
    _lg_form_.conversionCode = getFromInit("conversionCode")
}
if (/^\s*$/.test(document.getElementById("_lg_form_").innerHTML)) {
    (function() {
        var b = _lg_form_.formName;
        var a = "https://leadapi.net/forms/" + b + "/images/loader.gif";
        if (["wallet-lines"].indexOf(b) >= 0) {
            a = "https://leadapi.net/_core_/images/react-loader.svg"
        }
        document.getElementById("_lg_form_").innerHTML = '<div style="min-height: 493px; position: relative;"><img src="' + a + '" style="width: 50px!important; position: absolute!important; left: 50%!important; top: 50%!important; margin: -32px 0 0 -25px!important;" /><div style="text-align: center!important; font-size: 20px!important;color:#333!important;padding-top: 170px!important;line-height:normal!important;">Loading. Please wait...</div></div>'
    })()
}(function() {
    var f = ["formName", "affiliateId", "source", "click_id"],
        b = {},
        e = "https://leadapi.net/form/applicationForm.js",
        l = ["wallet-lines"].indexOf(_lg_form_.formName) >= 0,
        k, d, h, a;
    if (typeof _lg_form_ !== "undefined") {
        _lg_form_.leadxCookieName = "_lg_form__leadx"
    }
    if (document.cookie.length != 0) {
        a = document.cookie.match(new RegExp("(^|;)[\\s]*" + _lg_form_.leadxCookieName + "=([^;]*)"));
        if (a !== null) {
            b.leadx = decodeURIComponent(a[2]);
            var g = JSON.parse(b.leadx);
            if (_lg_form_.affiliateId == undefined && g.aid != undefined) {
                _lg_form_.affiliateId = g.aid
            } else {
                if (_lg_form_.affiliateId != g.aid) {
                    g.source = undefined;
                    g.click_id = undefined
                }
            }
            if (_lg_form_.source == undefined && g.source != undefined) {
                _lg_form_.source = g.source
            } else {
                if (_lg_form_.source != g.source) {
                    g.click_id = undefined
                }
            }
            if (_lg_form_.click_id == undefined && g.click_id != undefined) {
                _lg_form_.click_id = g.click_id
            }
        }
    }
    for (h = 0; h < f.length; h++) {
        if (typeof _lg_form_[f[h]] !== "undefined") {
            b[f[h]] = _lg_form_[f[h]]
        } else {
            if (f[h] !== "source" && f[h] !== "click_id") {
                throw "Missing parameter: " + f[h]
            }
        }
    }
    if (l) {
        b.domain = b.domain || window.location.hostname || window.location.host
    }
    for (h in b) {
        if (b.hasOwnProperty(h)) {
            e += (e.indexOf("?") === -1 ? "?" : "&") + h + "=" + encodeURIComponent(b[h])
        }
    }
    k = document.createElement("script");
    k.type = "text/javascript";
    k.async = true;
    k.src = e;
    if (k.readyState) {
        k.onreadystatechange = function() {
            if (k.readyState === "loaded" || k.readyState === "complete") {
                k.onreadystatechange = null;
                c()
            }
        }
    } else {
        k.onload = function() {
            c()
        }
    }

    function c() {
        var i = document.createElement("script");
        i.type = "text/javascript";
        i.async = true;
        i.setAttribute("data-name", "fraud-detector");
        i.src = "https://hashsrv.com/js/hash.js";
        document.getElementsByTagName("head")[0].appendChild(i);
        //j()
    }

    function j() {
        var n = !!"";
        if (!n && location.protocol !== "https:") {
            try {
                var o = document.createElement("div"),
                    i = document.createElement("a");
                i.setAttribute("href", "https://www.mcafeesecure.com/verify?host=leadapi.net");
                i.setAttribute("target", "_blank");
                i.style.cssText = "display: block; width: 100%; height: 100%";
                o.appendChild(i);
                o.style.cssText = 'margin: 0px;padding: 0px;border: 0px;background: url("https://leadapi.net/_core_/images/mcafee.png") center center / 92px 38px no-repeat rgb(255, 255, 255);max-width: none;max-height: none;position: fixed;height: 38px !important;width: 92px !important;overflow: hidden !important;bottom: 0px !important;right: 0px !important;z-index: 1000003 !important;cursor: pointer !important;box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;border-top-left-radius: 2px;';
                document.body.appendChild(o)
            } catch (m) {}
        }
    }
    d = document.getElementsByTagName("script")[0];
    d.parentNode.insertBefore(k, d)
})();
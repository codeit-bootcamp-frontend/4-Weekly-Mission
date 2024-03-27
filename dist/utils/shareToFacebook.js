export var shareToFacebook = function (url) {
    var sharedLink = encodeURIComponent(url);
    window.open("".concat(sharedLink));
};

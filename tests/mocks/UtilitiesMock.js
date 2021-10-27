/**
 * Google utilities mock
 *
 * @return {object} Mock object 
 */
function UtilitiesMock() {
    this.DigestAlgorithm = {MD5: 'md5'};
    this.Charset = {UTF_8: 'utf8'};
    return this;
}

UtilitiesMock.prototype.base64EncodeWebSafe = function (valueToEncode) {
    console.log()
    return valueToEncode;
};

UtilitiesMock.prototype.computeDigest = function(algoritm, stringToGetHash, encoding) {
    return Buffer.from(stringToGetHash,'utf-8').toString('base64')
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
    exports["__esModule"] = true;
    exports["default"] = UtilitiesMock;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AngularCliInitPage = (function () {
    function AngularCliInitPage() {
    }
    AngularCliInitPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AngularCliInitPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AngularCliInitPage;
}());
exports.AngularCliInitPage = AngularCliInitPage;

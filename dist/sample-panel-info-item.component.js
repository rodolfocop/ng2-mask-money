"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SamplePanelInfoItemComponent = (function () {
    function SamplePanelInfoItemComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SamplePanelInfoItemComponent.prototype, "title", void 0);
    SamplePanelInfoItemComponent = __decorate([
        core_1.Component({
            styles: [
                "\n\t\t\t:host {\n\t\t\t\tmargin-top: 8px;\n\t\t\t}\n\n\t\t\t:host[inline] {\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\n\t\t\tlabel {\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-weight: lighter;\n\t\t\t\tfont-variant: small-caps;\n\t\t\t\tfont-size: 16px;\n\t\t\t}\n\t\t"
            ],
            selector: "sample-panel > div > info > item",
            template: ("\n\t\t<div class=\"pull-left\">\n\t\t\t<label>{{title}}</label>\n\t\t</div>\n\t\t<div class=\"col-md-8\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t\t<div class=\"clearfix\"></div>\n\t")
        }), 
        __metadata('design:paramtypes', [])
    ], SamplePanelInfoItemComponent);
    return SamplePanelInfoItemComponent;
}());
exports.SamplePanelInfoItemComponent = SamplePanelInfoItemComponent;

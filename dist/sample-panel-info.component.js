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
var SamplePanelInfoComponent = (function () {
    function SamplePanelInfoComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SamplePanelInfoComponent.prototype, "title", void 0);
    SamplePanelInfoComponent = __decorate([
        core_1.Component({
            styles: [
                "\n\t\t\tfieldset {\n\t\t\t\tmargin-top: 16px;\n\t\t\t}\n\t\t"
            ],
            selector: "sample-panel > div > info",
            template: ("\n\t\t<fieldset>\n\t\t\t<legend>{{title}}</legend> \n\t\t\t<ng-content></ng-content>\n\t\t</fieldset>\n\t\t\n\t")
        }), 
        __metadata('design:paramtypes', [])
    ], SamplePanelInfoComponent);
    return SamplePanelInfoComponent;
}());
exports.SamplePanelInfoComponent = SamplePanelInfoComponent;

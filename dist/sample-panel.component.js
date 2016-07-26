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
var SamplePanelComponent = (function () {
    function SamplePanelComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SamplePanelComponent.prototype, "title", void 0);
    SamplePanelComponent = __decorate([
        core_1.Component({
            selector: "sample-panel",
            template: ("\n\n\t\t<div class=\"panel panel-primary col-md-6\" style=\"padding: 0; margin: 16px\">\n\t\t\t<div class=\"panel-heading\" *ngIf=\"title\">\n\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t{{title}}\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t\t<ng-content></ng-content>\n\t\t</div> \n\t\t<div class=\"clearfix\"></div>\n\t")
        }), 
        __metadata('design:paramtypes', [])
    ], SamplePanelComponent);
    return SamplePanelComponent;
}());
exports.SamplePanelComponent = SamplePanelComponent;

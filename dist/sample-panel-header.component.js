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
var SamplePanelHeaderComponent = (function () {
    function SamplePanelHeaderComponent() {
        this.hostClass = "panel-heading";
    }
    __decorate([
        core_1.HostBinding("attr.class"), 
        __metadata('design:type', Object)
    ], SamplePanelHeaderComponent.prototype, "hostClass", void 0);
    SamplePanelHeaderComponent = __decorate([
        core_1.Component({
            selector: "sample-panel >>> header",
            template: (" \n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</h3>\n \t")
        }), 
        __metadata('design:paramtypes', [])
    ], SamplePanelHeaderComponent);
    return SamplePanelHeaderComponent;
}());
exports.SamplePanelHeaderComponent = SamplePanelHeaderComponent;

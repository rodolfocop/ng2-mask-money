/// <reference path="./index.ts" />
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
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var index_1 = require("./index");
console.log("Sample Panel Directives", index_1.SAMPLE_PANEL_DIRECTIVES);
var Application = (function () {
    function Application() {
        this.aSimpleModel = "initial value";
        this.aNumberModel = 42;
        this.factorA = 6;
        this.factorB = 9;
    }
    Object.defineProperty(Application.prototype, "countOfChars", {
        get: function () {
            return (this.aSimpleModel || "").length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "aComputedModel", {
        get: function () {
            var invertido = this.aSimpleModel.split("").reverse().join("");
            return "" + invertido;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "success", {
        get: function () {
            return this.result != ":P";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "result", {
        get: function () {
            return (this.factorA * this.factorB) || ":P";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "resultb13", {
        get: function () {
            return ((this.factorA * this.factorB) || ":(").toString(13);
        },
        enumerable: true,
        configurable: true
    });
    Application = __decorate([
        core_1.Component({
            selector: "app",
            template: ("\n    \t  <sample-panel>\n            <header>\n                 Sample of Panel... {{countOfChars}} chars\n            </header>\n            <div>\n\n                <pre> Hello Sample!! </pre>\n                \n                <info title=\"Info\">\n\n                    <item inline title=\"First Sample Data:\">\n                        <input [(ngModel)]=\"aSimpleModel\" type=\"text\"/>\n                        <p class=\"text-muted\">...me mude ;)</p>\n                    </item>\n\n                    <item inline title=\"Computed Sample Data:\">\n                        <input [ngModel]=\"aComputedModel\" type=\"text\" readonly />\n                        <p class=\"text-warning\">(invertido)</p>\n                    </item>\n\n                </info>\n            \n            </div>\n        </sample-panel>\n\n        <sample-panel>\n            <header>\n                 Outro Painel (model: {{aSimpleModel}})\n            </header>\n            <div>\n\n                <pre> {{aSimpleModel}} <> {{aComputedModel}} </pre>\n                \n                <info title=\"Info sobre... {{aSimpleModel}}\">\n\n                    <item inline title=\"A Factor:\">\n                        <input [(ngModel)]=\"factorA\" type=\"number\"/>\n                        <p class=\"text-info\">tente 6</p>\n                    </item>\n\n                    <item inline title=\"B Factor:\">\n                        <input [(ngModel)]=\"factorB\" type=\"number\"/>\n                        <p class=\"text-info\">tente 9</p>\n                    </item>\n\n                    <item inline title=\"Computed Sample Data:\">\n                        <input [ngModel]=\"result\" type=\"text\" readonly />\n                        <p [ngClass]=\"{ 'text-success' : success, 'text-danger bg-danger': !success }\">A * B</p>\n                    </item>\n\n                    <item title=\"Ninguem entende piadas em base 13:\">\n                        <input [ngModel]=\"resultb13\" type=\"text\" readonly />\n                        <em *ngIf=\"resultb13 == '42'\" class=\"text-muted\">\"...O Segredo da vida, universo e tudo mais...\"</em>\n                        \n                    </item>\n\n                </info>\n            \n            </div>\n        </sample-panel>\n\n\n\t"),
            directives: [index_1.SAMPLE_PANEL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Application);
    return Application;
}());
platform_browser_dynamic_1.bootstrap(Application);

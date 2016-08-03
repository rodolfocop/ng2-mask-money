/// <reference path="../../src/index.ts" />


import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {MONEY_DIRECTIVES} from "../../src/index";
 
console.log("Sample Panel Directives", MONEY_DIRECTIVES);

@Component({
    selector: "app",
    template: (`
        <input [(ngModel)]="valor" [money]="options" /> 
        <input [(ngModel)]="valor" (valueChange)="v = $event"  /> 
        e: {{valor}} {{v}}
	`),
    directives: [MONEY_DIRECTIVES]
})
class Application {

    valor = '5555';
    v = 0
    options = {
        suffix: ' %'
    }

}


bootstrap(Application);


/// <reference path="../../src/index.ts" />


import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {SAMPLE_PANEL_DIRECTIVES} from "../../src/index";
 
console.log("Sample Panel Directives", SAMPLE_PANEL_DIRECTIVES);

@Component({
    selector: "app",
    template: (`
    	  <sample-panel>
            <header>
                 Sample of Panel... {{countOfChars}} chars
            </header>
            <div>

                <pre> Hello Sample!! </pre>
                
                <info title="Info">

                    <item inline title="First Sample Data:">
                        <input [(ngModel)]="aSimpleModel" type="text"/>
                        <p class="text-muted">...me mude ;)</p>
                    </item>

                    <item inline title="Computed Sample Data:">
                        <input [ngModel]="aComputedModel" type="text" readonly />
                        <p class="text-warning">(invertido)</p>
                    </item>

                </info>
            
            </div>
        </sample-panel>

        <sample-panel>
            <header>
                 Outro Painel (model: {{aSimpleModel}})
            </header>
            <div>

                <pre> {{aSimpleModel}} <> {{aComputedModel}} </pre>
                
                <info title="Info sobre... {{aSimpleModel}}">

                    <item inline title="A Factor:">
                        <input [(ngModel)]="factorA" type="number"/>
                        <p class="text-info">tente 6</p>
                    </item>

                    <item inline title="B Factor:">
                        <input [(ngModel)]="factorB" type="number"/>
                        <p class="text-info">tente 9</p>
                    </item>

                    <item inline title="Computed Sample Data:">
                        <input [ngModel]="result" type="text" readonly />
                        <p [ngClass]="{ 'text-success' : success, 'text-danger bg-danger': !success }">A * B</p>
                    </item>

                    <item title="Ninguem entende piadas em base 13:">
                        <input [ngModel]="resultb13" type="text" readonly />
                        <em *ngIf="resultb13 == '42'" class="text-muted">"...O Segredo da vida, universo e tudo mais..."</em>
                        
                    </item>

                </info>
            
            </div>
        </sample-panel>


	`),
    directives: [SAMPLE_PANEL_DIRECTIVES]
})
class Application {

    aSimpleModel = "initial value"
    aNumberModel = 42
    factorA = 6;
    factorB = 9;

    get countOfChars(){
        return (this.aSimpleModel || "").length;
    }

    get aComputedModel(){
        var invertido = this.aSimpleModel.split("").reverse().join("");
        return `${invertido}`;
    }
 
    get success(){
        return this.result != ":P";
    }

    get result(){
        return (this.factorA * this.factorB) || ":P";
    }

   get resultb13(){
        return ((this.factorA * this.factorB) || ":(" ).toString(13);
    }


}


bootstrap(Application);


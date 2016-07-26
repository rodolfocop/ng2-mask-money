import {Component, Input } from "@angular/core";


@Component({
	styles: [
		`
			fieldset {
				margin-top: 16px;
			}
		`
	],
    selector: "sample-panel > div > info",
    template: (`
		<fieldset>
			<legend>{{title}}</legend> 
			<ng-content></ng-content>
		</fieldset>
		
	`)
})
export class SamplePanelInfoComponent {
 
	@Input()
	title: string;
}



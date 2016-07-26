import {Component, Input } from "@angular/core";

@Component({
	styles: [
		`
			:host {
				margin-top: 8px;
			}

			:host[inline] {
				display: inline-block;
			}

			label {
				margin-top: 2px;
				display: inline-block;
				font-weight: lighter;
				font-variant: small-caps;
				font-size: 16px;
			}
		`
	],
    selector: "sample-panel > div > info > item",
    template: (`
		<div class="pull-left">
			<label>{{title}}</label>
		</div>
		<div class="col-md-8">
			<ng-content></ng-content>
		</div>
		<div class="clearfix"></div>
	`)
})
export class SamplePanelInfoItemComponent {

	@Input()
	title: string;

}

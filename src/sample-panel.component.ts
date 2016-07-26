import {Component, Input } from "@angular/core";


@Component({
    selector: "sample-panel",
    template: (`

		<div class="panel panel-primary col-md-6" style="padding: 0; margin: 16px">
			<div class="panel-heading" *ngIf="title">
				<h3 class="panel-title">
					{{title}}
				</h3>
			</div>
			<ng-content></ng-content>
		</div> 
		<div class="clearfix"></div>
	`)
})
export class SamplePanelComponent {
	@Input()
	title: string;

}

import {Component, HostBinding } from "@angular/core";



@Component({
    selector: "sample-panel > div",
    template: (`
		<ng-content></ng-content>
	`)
})
export class SamplePanelBodyComponent {

	@HostBinding("attr.class")
	hostClass = "panel-body";

}

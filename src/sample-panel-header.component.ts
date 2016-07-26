import {Component, HostBinding } from "@angular/core";


@Component({
    selector: "sample-panel >>> header",
    template: (` 
			<h3 class="panel-title">
				<ng-content></ng-content>
			</h3>
 	`)
})
export class SamplePanelHeaderComponent {

	@HostBinding("attr.class")
	hostClass = "panel-heading";

}

import {Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "sample-panel input"
})
export class InputBootstrapDirective {
	@HostBinding("class")
	hostClass = "form-control input-sm";
}

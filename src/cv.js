import {bindable} from "aurelia-framework"
export class CV{
	@bindable python;
	@bindable pythonExp;
	@bindable tabmenu;
	constructor(){
		
	}
	attached(){
		$(this.python).progress({percent:90});
		$(this.C).progress({percent:75});
		$(this.cpp).progress({percent:85});
		$(this.java).progress({percent:75});
		$(this.go).progress({percent:75});
		$(this.js).progress({percent:85});
		$(this.tabmenu).children().tab();
	}
}
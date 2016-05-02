import {bindable} from "aurelia-framework"
export class CV{
	@bindable python
	constructor(){
		
	}
	attached(){
		console.log($(this.python))
		$(this.python).progress('increment')
	}
}
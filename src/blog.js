import {HttpClient} from "aurelia-fetch-client"

export class Blog {
	constructor(){
		
	}
	activate(params){
		return this.http.fetch(params.id) 
	}
}
import {HttpClient} from 'aurelia-fetch-client';
import {inject} from "aurelia-framework";

@inject(HttpClient)
export class Bloglist{
	constructor(Http){
		this.http = Http;
	}

	activate(){
		return this.http.fetch("/src/blogs.json").then(response => 
			response.json()).then(data => {
				this.blogs = data;
			})
	}

	attached(){
		return  
	}

}
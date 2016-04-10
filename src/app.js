export class App {
  configureRouter(config, router) {
    config.title = 'Karthik';
    config.map([
    	{ route : ["", "introduction"], name:'introduction', moduleId:'introduction', nav: true, title:"Introduction"},
    	{ route : ["CV"], name:'CV', moduleId:'cv', nav: true, title:"CV"},
    	{route:["bloglist"], name:"Bloglist", moduleId:"bloglist", nav:true, title:"Bloglist"}
    ]);

    this.router = router;
  }
}

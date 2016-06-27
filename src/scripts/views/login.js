var tplLogin = require('../templates/login.string');

SPA.defineView('login', {
  	html: tplLogin,

  	plugins: ['delegated'],

  	bindActions: {
    	'register.tabs':function(e,data){
      	// this.modules.content.launch(data.tag);
      	SPA.open('register');
    	},
    	'back': function () {
      		this.hide();
   	 	}
    } 
});
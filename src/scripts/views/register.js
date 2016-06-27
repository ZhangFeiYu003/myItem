var tplRegister = require('../templates/register.string');

SPA.defineView('register', {
  	html: tplRegister,
    plugins: ['delegated'],
    init:{

    },

    bindActions: {
      'back': function () {
          this.hide();
      }
    },
     bindEvents:{
      'show':function(){
        var phone=/^1\d{10}$/;
        var $user=$(".user");
        // $(".btn").touchstart(function(){
        //   alert(111);
        // });
        }
      } 
});
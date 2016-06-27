var tplHome = require('../templates/home.string');

SPA.defineView('home', {
	html: tplHome,

	plugins: ['delegated', {
	    name: 'avalon',
	    options: function (vm) {
	      	vm.swiper = [];
	      	vm.selection = [];
	      	vm.classify = [];
	      	vm.newGood = [];
	    }
	}],

	init: {
	    vm: null,
	    swiperArray: [],
	    selectionArray: [],
	    classifyArray: [],
	    newGoodArray: [],
	},

  	bindEvents: {
		'beforeShow': function () {
	      	var that = this;
	      	// 获得vm对象
	     	that.vm = that.getVM();
		    $.ajax({
		        url: '/item/mock/index.json',
		        type:'get',
		        data:{
		        	rtype: 'index'
		        },
		        datatype:'json',
		        success: function (rs) {
			        that.swiperArray = rs.swiper;
			        that.vm.swiper = rs.data.swiper;
			        that.selectionArray = rs.data.selection;
			        that.vm.selection = rs.data.selection;
			        that.classifyArray = rs.data.classify;
			        that.vm.classify = rs.data.classify;
			        that.newGoodArray = rs.data.newGood;
			        that.vm.newGood = rs.data.newGood;
		         	var mySwiper = new Swiper('.swiper-container', {
			      		loop:true,
					    autoplay:1000,
					      // 如果需要分页器
					    pagination: '.swiper-pagination',
					})
		        },
		    });
		},
		'show':function(){
			var that=this;
			var scrollSize = 50;
			var pullDownFlag=0;
			var pullUpFlag=0;
			var scrolly;
    		myScroll = this.widgets.homeHotScroll;
    		myScroll.scrollBy(0, -scrollSize);
    		myScroll.on('scroll', function () {
    			console.log(this.y);
    			console.log(this.maxScrollY);
    			if (this.y > 100) {
					pullDownFlag = 1;
				} else if (this.y < (this.maxScrollY -100)) {
					scrolly=this.maxScrollY;
					pullUpFlag = 1;
				}
      		});

      		myScroll.on('scrollEnd', function () {
          		if (pullDownFlag == 1) {
              		window.location.reload();
              		myScroll.refresh();
              		pullDownFlag = 0;
          		}
          		if (pullUpFlag == 1){
              		setTimeout(function(){
              			$.ajax({
		        		url: '/item/mock/more.json',
		        		type:'get',
		        		data:{
		        			rtype: 'more'
		       			},
		        		datatype:'json',
		        		success: function (rs) {
		        			console.log(rs.data);
		        			var newArray = that.newGoodArray.concat(rs.data);
		        			that.newGoodArray = newArray;
			        		that.vm.newGood = newArray;
			        		//myScroll.scrollBy(0,scrolly+600);
			        		myScroll.refresh();
		        		}
		        		});
              		},300);
              		pullUpFlag = 0;
          		}
      		})
		}
	} 
});
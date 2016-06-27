// 引入spa类库
require('./lib/spa.min.js');
require('./lib/iscroll-probe.js');
require('./lib/swiper-3.3.1.min.js')

// 引入views
require('./views/guide.js');
require('./views/index.js');
require('./views/home.js');
require('./views/local.js');
require('./views/cart.js');
require('./views/my.js');
require('./views/login.js');
require('./views/register.js');

// SPA设置
SPA.config({
  indexView: 'guide'
});
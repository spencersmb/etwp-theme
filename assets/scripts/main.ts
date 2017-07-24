import Router from './utils/router';
import Common from './routes/Common'
import Home from './routes/Home'
import Products from './routes/Products'

// import * as $ from '../../node_modules/jquery/dist/jquery'
// import jquery = require('jquery');
// const $ = jQuery;

(function () {
  interface Iroutes {
    string: string
  }

  class EtApp {
    routes: any;

    constructor() {

      // Use this variable to set up the common and page specific functions. If you
      // rename this variable, you will also need to rename the namespace below.
      this.routes = {
        Common,
        Home,
        Products,
      };
    }

    init(): void {
      new Router(this.routes).loadEvents();
    }

  }


  let bootstrap = new EtApp();

  // use window.load for now - dev site loads too fast and doc.ready doesnt work - but it works when not in dev env
  $(window).load(function () {
    console.log('Doc loaded');
    bootstrap.init();
  });

})();


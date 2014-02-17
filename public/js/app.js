var AppRouter = Backbone.Router.extend({

  routes: {
    ""                  : "home",
    "about" : "about",
    "api"  : "api",
    "disclaimer"         : "disclaimer",
    "info/:id"         : "info"
  },

  initialize: function () {
    this.headerView = new HeaderView();
    $('.tab-container').html(this.headerView.el);
  },

  home: function () {
    if (!this.homeView) {
      this.homeView = new HomeView();
    }
    $('#content-area').html(this.homeView.el);
    this.headerView.selectMenuItem('menu-stats');
  },

  disclaimer: function() {
    $('#content-area').html(new DisclaimerView().el);
    this.headerView.selectMenuItem('menu-disclaimer');
  },

  info: function (id) {
    var module = new Module({_id: id});
    module.fetch(function() {
      $("#content-area").html(new ModuleView({model: module}).el);
    });
    this.headerView.selectMenuItem();
  },

  api: function() {
    $('#content-area').html(new ApiView().el);
    this.headerView.selectMenuItem('menu-api');
  },

  about: function () {
    $('#content-area').html(new AboutView().el);
    this.headerView.selectMenuItem('menu-about');
  }

});

utils.loadTemplate(['HeaderView', 'HomeView', 'AboutView', 'ApiView', 'DisclaimerView', 'ModuleView'], function() {
  app = new AppRouter();
  Backbone.history.start();
});
window.ApiView = Backbone.View.extend({

  initialize:function () {
    this.render();
  },

  render:function () {
    console.log(this.template());
    $(this.el).html(this.template());
    return this;
  }

});
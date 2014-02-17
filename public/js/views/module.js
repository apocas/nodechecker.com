window.ModuleView = Backbone.View.extend({

  initialize:function () {
    this.render();
  },

  render:function () {
    $(this.el).html(this.template(this.model.toJSON()));

    if(this.model.get('module')) {
      $("#module", this.el).html(this.model.get('module'));
      $("#mtime", this.el).html(this.model.get('time'));
      $("#mstatus", this.el).html(this.model.get('status') + " (" + this.model.get('code') + ")");

      $("#stdout", this.el).html(ansi_up.ansi_to_html(this.model.get('stdout')));
      $("#stderr", this.el).html(ansi_up.ansi_to_html(this.model.get('stderr')));
    } else {
      $("#module", this.el).html(this.model.get('_id'));
      $("#mtime", this.el).html('N/A');
      $("#mstatus", this.el).html('N/A');

      $("#stdout", this.el).html(ansi_up.ansi_to_html('N/A'));
      $("#stderr", this.el).html(ansi_up.ansi_to_html('N/A'));
    }

    return this;
  }

});
window.HomeView = Backbone.View.extend({

  initialize:function () {
    this.render();
  },

  events: {
    "submit": "submit_handler"
  },

  submit_handler: function() {
    console.log('ping');
    var module = $("#module").val();
    app.navigate('info/' + module, {trigger: true});
    return false;
  },

  render:function () {
    $(this.el).html(this.template());

    $.getJSON("/api/stats", function(data) {
      var total = parseInt(data.ok) + parseInt(data.nok) + parseInt(data.timedout) + parseInt(data.nottested);

      $('#digit_ok', this.el).html(data.ok);
      $('#percentage_ok', this.el).html(((data.ok / total) * 100).toFixed(0) + '%');
      $('#digit_nok', this.el).html(data.nok);
      $('#percentage_nok', this.el).html(((data.nok / total) * 100).toFixed(0) + '%');
      $('#digit_failed', this.el).html(data.failed);
      $('#percentage_failed', this.el).html(((data.failed / total) * 100).toFixed(0) + '%');
      $('#digit_timedout', this.el).html(data.timedout);
      $('#percentage_timedout', this.el).html(((data.timedout / total) * 100).toFixed(0) + '%');
      $('#digit_nottested', this.el).html(data.nottested);
      $('#percentage_nottested', this.el).html(((data.nottested / total) * 100).toFixed(0) + '%');
    });

    return this;
  }

});
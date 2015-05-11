window.HomeView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  events: {
    "submit": "submit_handler"
  },

  submit_handler: function() {
    var module = $("#module").val();
    app.navigate('info/' + module, {
      trigger: true
    });
    return false;
  },

  render: function() {
    $(this.el).html(this.template());
    $('.loader').show();

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

      $('#stats_tested', this.el).html((((data.ok + data.nok) / total) * 100).toFixed(0) + '%');
      $('#stats_untested', this.el).html((((data.nottested) / total) * 100).toFixed(0) + '%');
      $('#stats_queue', this.el).html(data.null || 0);
      $('#stats_published', this.el).html(data.null + data.failed + data.timedout + data.nok + data.ok + data.nottested);
      $('#stats_doe', this.el).html((((data.failed + data.timedout) / total) * 100).toFixed(0) + '%');

      $('.loader').hide();
    });

    return this;
  }

});

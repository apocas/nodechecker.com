var Module = Backbone.Model.extend({
  initialize: function() {
  },
  fetch: function(after_fetch) {
    var self = this;

    $.ajax({
      async: false,
      cache: false,
      type: 'GET',
      url: '/api/info/' + self.get('_id'),
      dataType: 'json',
      success: function(data) {
        if(data.runs && data.runs.length >= 0) {
          var run = data.runs[0];
          self.set("module", run.module);
          self.set("time", new Date(run.time).toUTCString());
          self.set("status", run.status);
          self.set("code", run.code);
          self.set("stdout", run.output.stdout);
          self.set("stderr", run.output.stderr);
        }
        after_fetch();
      },
      error: function(xhr, ajaxOptions, thrownError) {
        if (xhr.readyState == 0 || xhr.status == 0) {
          return;
        } else {
          alert(xhr.status);
          alert(thrownError);
        }
      }
    });
  }
});


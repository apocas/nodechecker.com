$.backstretch("images/background/1.jpg");

/*
$(document).ready(function () {
    $(".dropdown-panel-handle ul").fadeTo(0, 0);
    $(".dropdown-panel-handle").hover(
      function () {
          $(".dropdown-panel-handle ul").stop(true).fadeTo("normal", 1);
      },
      function () {
          $(".dropdown-panel-handle ul").fadeTo("normal", 0);
      }
    );
});


$(document).ready(function () {
    $("#content-area").each(function () {
        $(this).find("section:lt(1)").show()
    });
});

$('.tab-container a').click(function () {
    var index = $('.tab-container a').index(this);
    $('#content-area').children().hide().eq(index).fadeIn();
    $('.tab-container').children().removeClass('active');
    $(this).addClass('active');
    $(".done").hide();
});


$(document).ready(function () {
    $.getJSON( "/api/stats", function(data) {
      var total = parseInt(data.ok) + parseInt(data.nok) + parseInt(data.timedout) + parseInt(data.nottested);

      $('#digit_ok').html(data.ok);
      $('#percentage_ok').html(((data.ok / total) * 100).toFixed(0) + '%');
      $('#digit_nok').html(data.nok);
      $('#percentage_nok').html(((data.nok / total) * 100).toFixed(0) + '%');
      $('#digit_failed').html(data.failed);
      $('#percentage_failed').html(((data.failed / total) * 100).toFixed(0) + '%');
      $('#digit_timedout').html(data.timedout);
      $('#percentage_timedout').html(((data.timedout / total) * 100).toFixed(0) + '%');
      $('#digit_nottested').html(data.nottested);
      $('#percentage_nottested').html(((data.nottested / total) * 100).toFixed(0) + '%');
    });

    $('form').submit(function(e) {
      var module = $("#email").val();
      e.preventDefault();
      $.getJSON( "/api/info/" + module, function(data) {
        console.log(data);

        $(".done").show();

        if(data.runs && data.run.length >= 0) {
          var run = data.runs[0];

          $("#module").html(run.module);
          $("#mtime").html(new Date(run.time).toUTCString());
          $("#mstatus").html(run.status + " (" + run.code + ")");

          $("#stdout").html(ansi_up.ansi_to_html(run.output.stdout));
          $("#stderr").html(ansi_up.ansi_to_html(run.output.stderr));
        } else {
          $("#module").html(module);
          $("#mtime").html('N/A');
          $("#mstatus").html('N/A');
          $("#stdout").hide();
          $("#stderr").hide();
        }
      });
    });
});


$(window).load(function () {
    $('[placeholder]').focus(function () {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function () {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur().parents('form').submit(function () {
        $(this).find('[placeholder]').each(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        });
    });
});
*/


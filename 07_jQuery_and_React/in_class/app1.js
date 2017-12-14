// jQuery draggable (http://api.jqueryui.com/draggable/)
var header = $("h1");

$("#draggable").draggable({
  start: function() {
    header.text("Thank you for dragging the box");
  },
  stop: function() {
    header.text("Please drag the box");
  }
});

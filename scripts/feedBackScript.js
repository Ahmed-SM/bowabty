$('#file').change(function() {
    var file = $('#file')[0].files[0].name;
    $('.file-placeholder').text(file);
  });
  $("#feedback-form").submit(function (event) {
    alert("called.");
    event.preventDefault();
});
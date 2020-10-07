// jQuery hamburger menu toggler

$(function(){
    $('.hamburger-toggle').on('click', function()
    {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
        $('#map').toggleClass();
    });
});

$(function(){
  $('.nav-list').on('click', function()
  {
      $('.toggle').removeClass('open');
      $('.nav-list').removeClass('open');
      $('#map').toggleClass();
  });
});

$('#datetimepicker1').datetimepicker();
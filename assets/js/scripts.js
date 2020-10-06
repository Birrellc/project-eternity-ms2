// jQuery hamburger menu toggler

$(function(){
    $('.hamburger-toggle').on('click', function()
    {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
});

$('#datetimepicker1').datetimepicker();

$('#btnViewDate').click(function() {
  $('#datetimepicker1').datetimepicker('viewDate', moment('11/21/2018', 'MM/DD/YYYY') );
});

$('#btnDate').click(function() {
  $('#datetimepicker1').datetimepicker('date', moment('11/21/2018', 'MM/DD/YYYY') );
});
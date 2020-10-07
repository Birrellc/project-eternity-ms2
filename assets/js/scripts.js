// jQuery hamburger menu toggler

$(function(){
    $('.hamburger-toggle').on('click', function()
    {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
        $('#map').toggleClass();
    });
});



$('#datetimepicker1').datetimepicker();
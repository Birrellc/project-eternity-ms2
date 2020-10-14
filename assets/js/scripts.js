// jQuery hamburger menu toggler

$(function(){
    $('.hamburger-toggle').on('click', function()
    {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
        $('#map').toggleClass();
    });
});



$('#datetimepicker1').datetimepicker({  
    format:'YYYY-MM-DD HH:mm',
    minDate:new Date(),
    sideBySide: true,
    daysOfWeekDisabled: [1, 2],
    stepping:15,
    enabledHours: [16, 17, 18, 19, 20, 21, 22, 23   ]
    });

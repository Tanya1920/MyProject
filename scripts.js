$(function(){
    $('.submenu_mover').click(function(){
        if ($(this).parent().hasClass('open')) {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
        } else {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
            $(this).parent().addClass('open').find('.submenu').animate({
                height: ($(this).parent().find('.submenu a').length * 40)
            }, 1000);
        }
   });
   
    $(document).on('click', '.order .del > div', function(){
        tovarDelete(this);
    });
	$(document).on('change', '.num input', function(e){
        tovarChange(e.target);
    });
	
	$('.popup-desk').click(function(e){
        if (e.target == this) {
            $(this).removeClass('active');
            $('.popup').empty();
        //    $('.basket').html("ЛК");
        }
    });

	
   $('#date').click(function(){
        if ($('#date').val()) {
            selected_day = makeSelectedDate($('#date').val());
            makePopup(selected_day.getFullYear(),selected_day.getMonth());
        } else {
            makePopup(TODAY.getFullYear(),TODAY.getMonth());
        }
    });
    
    $('#date').mask('00-00-0000');
});
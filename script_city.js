
$(function (){
	
	
	document.getElementById('yourcity').addEventListener('click', function(){
		(confirm('Ваш город - Москва?')) ? (document.getElementById('yourcity').innerHTML = '<p>Ваш город: Москва</p>') : (document.getElementById('yourcity').innerHTML = '<p>Ваш город: Немосква</p>');
	});
	

 // b = $('#yourcity').click(function(){prompt('Ваш город  - Москва? (Да / Нет)')});
 // jQuery.alerts.okButton = "ДА";
//let b = $('#yourcity').click(function(){confirm('Ваш город  - Москва? (Да / Нет)')});
  //console.log(b);
  //alert ($('#yourcity').click(function(){confirm('Ваш город  - Москва? (Да / Нет)')}));
    // if (b = true) {
	  //alert('москва');
  //} else  alert ("НеМосква");
	  
  // alert(b);
   
	
	
  //  $('#yourcity').click(function(){
  //      $('.popup-desk').addClass('active').html('<div class="popup gorod"><p>Ваш город - Москва?</p><button class="yes" type="button">ДА</button><button class="no"  type="button">НЕТ</button></div>');
    //    $('.gorod button').click(function(){
            // if $('.gorod button').index(this) == 1
            // if $(this).html() == 'НЕТ'
         //   if ($(this).hasClass('no')) {
       //         $('#yourcity').html('<p>Ваш город: Немосква</p>');
      //      } else {
           //     $('#yourcity').html('<p>Ваш город: Москва</p>');
           // }
           // $('.popup-desk').click();
    //    })
    //});
	
	
	//  function clickGorod(event) {
      //      if (event.target.innerHTML == 'НЕТ') {
      //          document.getElementById('yourcity').innerHTML = '<p>Ваш город: Немосква</p>';
      //      } else {
      //          document.getElementById('yourcity').innerHTML = '<p>Ваш город: Москва</p>';
      //      }
      //      document.querySelector('.popup-desk').dispatchEvent(new Event("click"));
      //  }
   // });
	
//	$('#yourcity').click(function(){
//		clickGorod(event);
//	});
});
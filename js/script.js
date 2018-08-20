$(document).ready(function(){



    var toggler = document.getElementById('toggler');
toggler.addEventListener('click', mainNavVisibleToggle);
function mainNavVisibleToggle(e) {
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
}



    

    $('.lesson').click(function(){
        $('.form-modal').addClass('form-modal-show')
        $('.modal-overlay').show(300);
    });

    $('.modal-overlay').click(function(){
        $('.form-modal').removeClass('form-modal-show')
        $('.modal-overlay').hide(300);
    })




    $("a.video-wrap__item").fancyboxPlus();







  $('.video-wrap').slick({
    // setting-name: setting-value
     slidesToShow: 1,
        centerMode: true,centerPadding: '0px',
  });


   ymaps.ready(init); 
      
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [59.941993, 30.279423],
                zoom: 17
            }); 
            
            var myPlacemark = new ymaps.Placemark([59.941993, 30.279423], {
                hintContent: 'Diez',
                balloonContent: 'Подсказочка'
            }


            );
            
            myMap.geoObjects.add(myPlacemark);
        }

});












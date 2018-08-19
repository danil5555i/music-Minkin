$(document).ready(function(){


    

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
  });


   ymaps.ready(init); 
      
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [59.941993, 30.279423],
                zoom: 17
            }); 
            
            var myPlacemark = new ymaps.Placemark([59.941993, 30.279423], {
                hintContent: 'Содержимое всплывающей подсказки',
                balloonContent: 'Содержимое балуна'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }

});












$(document).ready(function(){
    $(function(){
        $('#countdown').countdown({
          year: 2021, // YYYY Format
          month: 12, // 1-12
          day: 24, // 1-31
          hour: 0, // 24 hour format 0-23
          minute: 0, // 0-59
          second: 0, // 0-59
        });
      });
    $('.t-slider').slick({
        arrows : false,
        slidesToShow : 5 ,
        slidesToScroll : 1,
        vertical : true ,
        autoplay : true,
        responsive : [
          {
              breakpoint: 576,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows : false,
              }
            },
      ]
      }); 
      
      new WOW().init(); 
});
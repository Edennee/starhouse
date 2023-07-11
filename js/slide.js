$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 900,
        autoplay: true,
        arrows: true,
        dots: true,
        responsive:[
            {
            breakpoint: 1000,
            settings:{
                slidesToShow:3,
                slidesToScroll: 3
            }
            },
            {
                breakpoint: 770,
                settings:{
                   slidesToShow:2,
                   slidesToScroll: 2
                }
                }
    ]
    });
  });

  $(document).ready(function(){
    $('.header_slider').slick({
        fade:true,
        dots:true,
        speed:1700,
        autoplay: true,
        responsive:[
            {
            breakpoint: 550,
            settings:{
                arrows: false
            }
            }
        ]
    });
  });

  $(document).ready(function(){
    $('.sertisication_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 900,
        autoplay: true,
        arrows:false,
        responsive:[
            {
            breakpoint: 800,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }, {
                breakpoint: 350,
                settings:{
                   slidesToShow:1,
                   slidesToScroll: 1
                }
                }
        ]
    });
  });
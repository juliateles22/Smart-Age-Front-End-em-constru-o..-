$(function () {
    $('.slick-center').slick({
      infinite: true, // 若要置中模式開無限左不留空
      autoplay: false,
      centerMode: true,
      centerPadding: '40%',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerPadding: '30%',
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        },
      ]
    });
  
  });
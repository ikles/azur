jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  
  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
    $('.burger').removeClass("on");
    $('.resort-open').fadeOut();
    $('.filter-where-list').hide();
    $('.filter-persons-control-wrap').hide();
    
  });


  $(".burger, .top-mnu, .resort-open, .filter-where-list, #where_search, .filter-persons-control-wrap, .filter-input.persons, .offer, .col-1-filter-w, .inf, .sign-info").click(function (e) {
    e.stopPropagation();
  });


  $('.galfull-inn').click(function () {
    $('.inf').fadeOut();
  });

  /************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/


  //$("#phone_1").mask("+7 (999) 999-99-99");

//Add Inactive Class To All Accordion Headers
$('.accordion-header').toggleClass('inactive-header');

  //Set The Accordion Content Width
  var contentwidth = $('.accordion-header').width();
  $('.accordion-content').css({'width' : contentwidth });
  
  //Open The First Accordion Section When Page Loads
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  
  // The Accordion Effect
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
    
    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });


  $('.tabs-control-1 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-1 .tabs_control_item'),
    contentItem = $('.tabs_content-1 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


  $('.resort-control-item').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
  });

  $('.tabs-control-2 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-2 .tabs_control_item'),
    contentItem = $('.tabs_content-2 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


  $('.room-img-slider').each(function () {
    let slick_slider_item = $(this);
    $(slick_slider_item).slick({  
     dots: true,
     arrows: false,
     infinite: false,
     speed: 300,
     slidesToShow: 1
   });

    let slide_count =  $(this).slick("getSlick").slideCount;


    let fancy = $(this).find('[data-fancybox="gallery"]');
    fancy.fancybox({
      arrows: true,
      infobar: false,
      smallBtn: true,
      toolbar: false,
      iframe : {
        css : {
          width : '950px'
        }
      },    
      slideClass: "myClass",
      baseClass: "myclass"
    });

    fancy.append('<span class="slide-count">'+slide_count+' фото</span>');

  }); //each


  $('.slider_1').each(function () {
    let slick_slider_item = $(this);
    $(slick_slider_item).slick({  
     dots: true,
     arrows: true,
     infinite: false,
     speed: 300,
     slidesToShow: 1
   });

  }); 


  






  $('.room-more-item').each(function () {
    let self = $(this);
    let link = $(this).find('.room-bk-r-ab');
    let less = $(this).find('.room-less');
    link.click(function (e) {
      $(this).toggleClass('rotate');
      e.preventDefault();
    //self.toggleClass('_open');
    less.slideToggle();
  });
  });

  $('.rat').each(function () {
    let self = $(this);
    let link = $(this).find('.roll');    
    let txt = $(this).find('.roll .txt');    
    link.click(function (e) {
      $(this).toggleClass('rotate');
      e.preventDefault();
      if (txt.text() == 'Свернуть') {
        txt.text('Подробнее');
      }
      else if (txt.text() == 'Подробнее') {
        txt.text('Свернуть');
      }
      self.toggleClass('_open');
    });
  });

  $('.hot-inf-w').each(function () {
    let self = $(this);
    let link = $(this).find('.roll2');    
    let txt = $(this).find('.roll2 .txt');    
    link.click(function (e) {
      $(this).toggleClass('rotate');
      e.preventDefault();
      if (txt.text() == 'Свернуть') {
        txt.text('Подробнее');
      }
      else if (txt.text() == 'Подробнее') {
        txt.text('Свернуть');
      }
      self.toggleClass('_open');
    });
  });


  let link = $(this).find('.roll3');    
  let txt = $(this).find('.roll3 .txt');    
  link.click(function (e) {

   $(this).toggleClass('rotate');
   e.preventDefault();
   if (txt.text() == 'Все номера') {
    txt.text('Скрыть');
  }
  else if (txt.text() == 'Скрыть') {
    txt.text('Все номера');
  }
  $('.call-popup-bot-phone-open').slideToggle();      
});
  


  $('.col-2-2-btn').click(function (e) {
    e.preventDefault();
    $('.col-2-2-cont-phones').addClass('_open');
    $(this).hide();
  });








  if($('.hotels-w-js-1').length) {

    $('.hotels-w-js-1').slick({  
     dots: false,
     infinite: false,
     onAfterChange: function (slide, index) {
      if (index <= 0) {
        alert("Первый слайд!");
      };
      if (itemsLength >= index) {
        alert("Последний слайд!");
      };
    },
    speed: 300,
    slidesToShow: 4,   
    responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3
      }
    },
    ]
  });

    $('.hotels-w-js-1').on('edge', function(event, slick, direction){
      if (direction == 'left') {
        $('.hotels-w-js-1 .slick-list').addClass('poright');
      }
      else if (direction == 'right') {
        $('.hotels-w-js-1 .slick-list').removeClass('poright');
      }
    });

}//if


if($('.nearby-row-js-1').length) {

  $('.nearby-row-js-1').slick({  
   dots: false,
   infinite: false,

   speed: 300,
   slidesToShow: 4,   
   responsive: [

   {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3        
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 570,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2
    }
  },
  ]
});

  $('.nearby-row-js-1').on('edge', function(event, slick, direction){
    if (direction == 'left') {
      $('.nearby-row-js-1 .slick-list').addClass('poright');
    }
    else if (direction == 'right') {
      $('.nearby-row-js-1 .slick-list').removeClass('poright');
    }
  });

}//if



if($('.hotels-w-js-2').length) {
  $('.hotels-w-js-2').slick({  
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 4,   
   responsive: [

   {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3        
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 570,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2
    }
  },
  ]
});



  $('.hotels-w-js-2').on('edge', function(event, slick, direction){
    if (direction == 'left') {
      $('.hotels-w-js-2 .slick-list').addClass('poright');
    }
    else if (direction == 'right') {
      $('.hotels-w-js-2 .slick-list').removeClass('poright');
    }
  });

}

if ($('.photogal-3-js').length) {
  $('.photogal-3-js').slick({  
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 4,   
   responsive: [

   {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3        
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 570,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2
    }
  },
  ]
});
}







if($('.sale-w-js').length) {
  $('.sale-w-js').slick({  
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 2,   
   responsive: [     
   {
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 570,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2
    }
  },
  ]
});


  $('.sale-w-js').on('edge', function(event, slick, direction){
    if (direction == 'left') {
      $('.sale-w-js .slick-list').addClass('poright');
    }
    else if (direction == 'right') {
      $('.sale-w-js .slick-list').removeClass('poright');
    }
  });

}

if($('.rev-it-w-js').length) {
  $('.rev-it-w-js').slick({  
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 3,   
   responsive: [     
   {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2
    }
  },
  ]
});

  $('.rev-it-w-js').on('edge', function(event, slick, direction){
    if (direction == 'left') {
      $('.rev-it-w-js .slick-list').addClass('poright');
    }
    else if (direction == 'right') {
      $('.rev-it-w-js .slick-list').removeClass('poright');
    }
  });

}


if ($('.gal-3-row').length) {
  $('.gal-3-row').slick({  
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 3,   
   responsive: [     
   {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }  
  ]
});

  $('.gal-3-row').on('edge', function(event, slick, direction){
    if (direction == 'left') {
      $('.gal-3-row .slick-list').addClass('poright');
    }
    else if (direction == 'right') {
      $('.gal-3-row .slick-list').removeClass('poright');
    }
  });

}





if ($('.photogal-w-3-js').length) {
  $('.photogal-w-3-js').slick({  
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 4,   
   responsive: [     
   {
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, 
  {
    breakpoint: 571,
    settings: {
      slidesToShow: 3
    }
  }  
  ]
});


  $('.photogal-w-3-js').on('edge', function(event, slick, direction){
    if (direction == 'left') {
      $('.photogal-w-3-js .slick-list').addClass('poright');
    }
    else if (direction == 'right') {
      $('.photogal-w-3-js .slick-list').removeClass('poright');
    }
  });

}

if ($('.specials-row-js-1').length) {
  $('.specials-row-js-1').slick({  
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 6,   
   responsive: [

   {
    breakpoint: 1321,
    settings: {
      slidesToShow: 5        
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 4
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 571,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 481,
    settings: {
      slidesToShow: 3
    }
  }
  ]
});

  $('.specials-row-js-1').on('edge', function(event, slick, direction){
    if (direction == 'left') {
      $('.specials-row-js-1 .slick-list').addClass('poright');
    }
    else if (direction == 'right') {
      $('.specials-row-js-1 .slick-list').removeClass('poright');
    }
  });
}



/*
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: false,
  variableWidth: true,
  autoplaySpeed: 4000,
  cssEase: 'ease-out',
  dots: true
  */

  $('.filter-action-pda, .housing-action-filter').click(function () {    
    $('.col-1-filter-w').fadeIn();
    $('.overlay').fadeIn();
  });

  $('.burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
    $('.resort-open').fadeToggle();
  });


  $('.link').click(function(e) {
    $('.modal-overlay_1').fadeIn();
    e.preventDefault();
    $('body').addClass('ohi');
  });


  $('.overlay').click(function() {
    $(this).hide();
    $('.col-1-filter-w').hide();
  });
  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });




  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });

  if ($('.lmnu-block-scroll').length) {
    $(".lmnu-block-scroll").mCustomScrollbar({
      axis: "y",
      theme: "dark-3",
      mouseWheel: 1,
      scrollInertia: '230'
    });
  }


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.arr-up').show(400);
    }
    else {
     $('.arr-up').hide();
   }
 });



/*  var $window=$(window),
  $target=$(".col-2-2-sticky"),
  $h=$target.offset().top;
  $window.on('scroll',function(){
    var scrollTop=window.pageYOffset||document.documentElement.scrollTop;
    if(scrollTop>$h){
      $target.addClass("fixed");
      return;
    }else{
      $target.removeClass("fixed");
    }
    return;
  });*/


  jQuery(window).scroll(function() {
    let elem3 = $('.call-pda-row');
    let wrap3 = $('.grade.grade-pda');
    let scroll_sticky3 = wrap3.offset().top;

    if ($(this).scrollTop() > scroll_sticky3) {
      elem3.addClass('fixed').addClass('cpadding');
      console.log($(this).scrollTop()+' - '+ scroll_sticky3)
    }
    else {
     elem3.removeClass('fixed').removeClass('cpadding');
   }
 });



  jQuery(window).scroll(function() {
    let wrap1 = $('.col-2-2-sticky-w');
    
    let elem1 = $('.col-2-2-sticky');
    var scroll_sticky1 = wrap1.offset().top;       
    if ( $(this).scrollTop() > scroll_sticky1) {
      elem1.addClass("fixed");
    }
    else {      
      elem1.removeClass("fixed");
    }


    let elem2 = $('.nearby-section');
    var scroll_sticky2 = elem2.offset().top;
    /*console.log(scroll_sticky2);    */
    if ($(this).scrollTop() > scroll_sticky2 - elem1.height()) {
      elem1.removeClass('fixed');      
    }



  });//scroll

/*  var $window=$(window),
  $target2=$(".call-pda-row"),  
  $h2=$target2.offset().top;  
  $window.on('scroll',function(){
    var scrollTop=window.pageYOffset||document.documentElement.scrollTop;
    console.log(scrollTop)
    if(scrollTop>$h2){
      $target2.addClass("fixed").addClass("cpadding");
      return;
    }else{
      $target2.removeClass("fixed").removeClass("cpadding");;
    }
    return;
  });*/


  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }

  if ($('.housing-actions-pda').length) {
    $(window).scroll(function(){
      var wt = $(window).scrollTop();  
      var wh = $(window).height();    
      if (wt > 600) {
        $('.housing-actions-pda').show(400);
      }
      else {
       $('.housing-actions-pda').hide();
     }
   });  
  }
  

  $('#where_search').on('input', function() { 
    $('.filter-where-list').show();
    $('.input-where-delete').show();
  });

  $('.filter-input.persons').on('focus', function () {
    $('.filter-persons-control-wrap').fadeIn();
  });

  $('.input-where-delete').click(function () {
    $('#where_search').val('');
  });

  

  $('#where_search').hideseek({
    hidden_mode: true,
    nodata: 'Пока ничего не найдено...'
  });


  $('.filter-where-list li').click(function (e) {
    e.preventDefault();    
    $('#where_search').val($(this).text());
    $('.filter-where-list').hide();
  });



  const allowedDates = [
  '2021-11-01', '2021-11-02', '2021-11-03',  '2021-11-04',  '2021-11-05',  '2021-11-06',  '2021-11-07',  '2021-11-08',  '2021-11-09',  '2021-11-10',  '2021-11-11',  '2021-11-12',  '2021-11-13', '2021-11-14',
  '2021-12-13', '2021-12-14', '2021-12-15', '2021-12-16','2021-12-17','2021-12-18','2021-12-19','2021-12-20','2021-12-21','2021-12-22','2021-12-23','2021-12-24','2021-12-25','2021-12-26','2021-12-27','2021-12-28','2021-12-29','2021-12-30','2021-12-31',
  ];




  if ($('#filter_input_date').length) {
    new Litepicker({
      element: document.getElementById('filter_input_date'),
      singleMode: false,
      delimiter: ' - ',
      lang: "ru-RU",
      format: 'DD MMM',
      numberOfMonths: 2,
      setup: (picker) => {
        picker.on('hide', () => {
          $('.container__main_before-1').removeClass('on');
        });
      },
      tooltipText: {
        one: 'night',
        other: 'nights'
      },
      tooltipNumber: (totalDays) => {
        return totalDays - 1;
      },
      lockDaysFilter: (date1, date2, pickedDates) => {
        return allowedDates.includes(date1.format('YYYY-MM-DD'));
      }
    });
  }

  

  const filter_input_persons =  $('.filter-input.persons');
  let total = '';
  let total_adult = '';
  let total_children = '';
  let total_babies = '';

  $('.filter-persons-control-row').each(function () {
    let self = $(this);
    let control = $(this).find('.filter-persons-control');
    let plus = $(this).find('.filter-persons-control._plus');
    let minus = $(this).find('.filter-persons-control._minus');
    let input = $(this).find('.filter-persons-input');        

    let input_adults = $('.filter-persons-input.adults');
    let input_children = $('.filter-persons-input.children');
    let input_babies = $('.filter-persons-input.babies');


    control.click(function () {

     if ($(this).hasClass('_plus')) {
      input.val(+input.val() + 1);
      if ( +input.val() < 0) {
        input.val(0);
      }
    }
    else if ($(this).hasClass('_minus')) {
      input.val(+input.val() - 1);
      if ( +input.val() < 0) {
        input.val(0);
      }
    }

    if ( input.val() > 0 ) {
      minus.removeClass('dis');      
    }
    else {
     minus.addClass('dis'); 
   }

   if (input.hasClass('adults') && +input_adults.val() > 0 ) {
     total_adult = input_adults.val() + ' Взрослых, '; 
   }
   else if (input.hasClass('adults') && +input_adults.val() <= 0) {
    total_adult = '';
  }

  if (input.hasClass('children') && +input_children.val() > 0 ) {
   total_children = input_children.val() + ' Детей, ';
 }
 else if (input.hasClass('children') && +input_children.val() <= 0) {
  total_children = '';
}


if (input.hasClass('babies') && +input_babies.val() > 0) {
  total_babies = input_babies.val() + ' Младенцев, ';
}
else if ( input.hasClass('babies') && +input_babies.val() <= 0 ) {
  total_babies = '';
}


total = total_adult + total_children + total_babies;

if (total != '') {
  $('.where-persons-pda').addClass('on');

}
else {
 $('.where-persons-pda').removeClass('on'); 

}

filter_input_persons.val(total);








}); //control.click
  });

  
  $('.where-persons-pda').click(function () {
    if ( $(this).hasClass('on') ) {
      $('.container__main_before-2').removeClass('on');
      $('.filter').removeClass('on-2');  
    }
    else {
      return;
    }
  });  
  


  function open_date_pda() {
    $('#filter_input_date').click(function () {
      $('.container__main_before-1').addClass('on');

      $('html, body').animate({
        scrollTop: 0
      });
    });

    $('#where_search').on('focus', function () {
      $('.filter').addClass('on');

      $('html, body').animate({
        scrollTop: 0
      });


    });
  }
  function open_persons_pda() {
   $('.filter-input.persons').on('focus', function () {
    $('.filter').addClass('on-2');
    $('.container__main_before-2').addClass('on');

    $('html, body').animate({
      scrollTop: 0
    });

  });
 }

 $('.ab').each(function () {
  let self = $(this);
  let tit = $(this).find('.ab-w');
  let cont = $(this).find('.ab-ul');
  tit.click(function () {
    self.toggleClass('_open');
    cont.slideToggle();
  })
});

 $('.icn').click(function () {
  $('.all-ht-it-onmap-w').show();
  console.log(22)
});

 $('.all-ht-it-onmap-w').each(function () {
   let self = $(this);
   let link = $(this).find('.sign');
   link.click(function () {
     self.fadeOut();
   });
 })

 $('.container__main_before-3').click(function () {  
  $('.call-popup').removeClass('_open');
  $('body').removeClass('ohi');
});

 if ($('.gridmasonry').length) {
   $('.gridmasonry').masonry({
  // options
  itemSelector: '.grid-item',
  //columnWidth: 200
});
 }


 $('.call-pda-btn').click(function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  });
  $('.call-popup').addClass('_open');
  $('body').addClass('ohi');
});


 $(window).resize(function() {
  if( $(window).width() < 481 ) {

    open_date_pda();

    open_persons_pda();

  }
  });//res

 if( $(window).width() < 481 ) {
  open_date_pda();

  open_persons_pda();

  }//w

//filter-col-persons

$('.inf').each(function () {
  let self = $(this);
  let close = $(this).find('.inf-top-cls');
  close.click(function () {
    self.fadeOut();
  });
});


$('.sign-close').click(function (e) {
  e.preventDefault();
  $('body').removeClass('ohi');
  $('.galfull').fadeOut();
  $('.inf').fadeOut();

});

let i = 0;


let selfNum;
let selfInfo;

$('.galmin-item').each(function (index) {

  let self = $(this);  
  let info = $(this).find('.grid-inf-item').html();
  
  let href = $(this).attr('href');
  i++;
  self.attr("data-num", i);

  self.click(function (e) {
    e.preventDefault();
    $('body').addClass('ohi');
    selfNum = $(this).attr('data-num');
    selfInfo = $(this).find('.grid-inf-item').html();    
    console.log('click open '+selfNum);
    $('html, body').animate({
      scrollTop: 0
    });
    $('.galfull').fadeIn();
    $('.inf-inner').html(info);
    $('.galbigimage').attr('src', href);
  });
});








//gridmasonry


/*.gal-arrow.slick-prev
.gal-arrow.slick-next*/

const galLength = $('.galmin-item').length;

function galPrev() {      
  if (selfNum >= 2) {
    $('.gal-arrow.slick-next').show();
    let href = $('.galmin-item')[selfNum--].pathname;
    let info = $('.grid-inf-item')[selfNum];
    console.log(selfNum);
    
    
    
    $('.galbigimage').attr('src', href);
    $('.inf-inner').html(info);
    $('.inf').hide();
  } 
  else {
    selfNum = 1;
    $('.gal-arrow.slick-prev').hide();
  } 
}
function galNext() {   
  if (selfNum < galLength -1) {
    let href = $('.galmin-item')[selfNum++].pathname;
    let info = $('.grid-inf-item')[selfNum];
    console.log(selfNum);
    $('.gal-arrow.slick-prev').show();
    $('.galbigimage').attr('src', href);
    $('.inf-inner').html(info);
    $('.inf').hide();
  } 
  else {
    console.log(selfNum);    
    $('.gal-arrow.slick-next').hide();
  } 

  
  

}


$('.gal-arrow').click(function () {
  //$('.inf').fadeOut();
  if ($(this).hasClass('slick-prev')) {
    galPrev();
  }
  else if ($(this).hasClass('slick-next')) {
    galNext();
  }
});


$('.sign-info').click(function (e) {
  e.preventDefault();
  $('.inf').fadeIn();
});




$('.container__main_before-1').click(function () {
  $(this).removeClass('on');
});

$('.container__main_before-2').click(function () {
  $(this).removeClass('on');
  $('.filter').removeClass('on-2');
});


$('.where-close-pda, .filter-where-list li').click(function () {
  $('.filter').removeClass('on');
});

/*let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);*/









function divideNumberByPieces(x, delimiter) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
}

const priceSlider = document.querySelector('.price__range--1');
if (priceSlider) {

  let textFrom = priceSlider.getAttribute('data-from');
  let textTo = priceSlider.getAttribute('data-to');

  noUiSlider.create(priceSlider, {
    start: [0, 7000],    
    connect: true,
    step: 500,
    /*tooltips: [wNumb({ decimals: 2, prefix: '' + '' }), wNumb({ decimals: 2, prefix: '' + '' })],*/    
    range: {
      'min': [0],
      'max': [13000]
    },
    /*format: wNumb({
      decimals: 0,
      thousand: ',',
      suffix: ' (US $)'
    })*/
  });


  const priceStart = document.getElementById('price-start');
  const priceEnd = document.getElementById('price-end');
  priceStart.addEventListener('change', setPriceValues);
  priceEnd.addEventListener('change', setPriceValues);




//Значения из ползунков в инпуты
priceSlider.noUiSlider.on('update', function(values, handle) {
  priceStart.value = Number(priceSlider.noUiSlider.get()[0]);
  priceEnd.value = Number(priceSlider.noUiSlider.get()[1]);
});



function setPriceValues() {
  let priceStartValue;
  let priceEndValue;
  if (priceStart.value != '') {
    priceStartValue = priceStart.value;
  }
  if (priceEnd.value != '') {
    priceEndValue = priceEnd.value;
  }
  priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);


  } //spV
}// if priceSlider





}); //ready


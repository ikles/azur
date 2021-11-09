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


  $(".burger, .top-mnu, .resort-open, .filter-where-list, #where_search, .filter-persons-control-wrap, .filter-input.persons").click(function (e) {
    e.stopPropagation();
  });


  /************************************/

$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});

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





  /*$('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: false,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });*/







if($('.hotels-w-js-1').length) {

  $('.hotels-w-js-1').slick({  
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
      slidesToShow: 3
    }
  },
  ]
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

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
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

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


}); //ready


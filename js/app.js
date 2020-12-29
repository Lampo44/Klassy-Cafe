// website Custom JS starts
  // Website Loading animation
  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
  // Bootstrap Menu
  $(document).ready(function () {
    $('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

      $('.animated-icon3').toggleClass('open');
    });
  });
  // Bootstrap Tabs
  var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
  // Bootstrap Shrink navbar after scroll
  $(document).on("scroll", function(){

    if ($(document).scrollTop() > 120){
      $(".primary-nav").addClass("shrink");
    } else {
      $(".primary-nav").removeClass("shrink");
    }

  });
  // Owl Carousel
  $('#slider').owlCarousel({
    loop:true,
    items: 1,
    margin:0,
    autoplay: true,
    nav:true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  })
  $('#foodCarousel').owlCarousel({
    loop:true,
    items: 5,
    margin:25,
    autoplay: true,
    autoplayTimeout:5000,
    nav:true,
    navText : ['<i class="fa fa-chevron-right"></i>','<i class="fa fa-chevron-left"></i>'],
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      576:{
          items:3,
          nav:true
      },
      768:{
          items:3,
          nav:true
      },
      1200:{
          items:5,
          nav:true
      }
    }
  })
  // ScrollReveal
  ScrollReveal().reveal('.about-us', { delay: 300 });
  ScrollReveal().reveal('.chef-intro', { delay: 300 });
  ScrollReveal().reveal('.tabs-main', { delay: 300 });
  // Slick Slider 
  $(document).ready(function(){
    $('.slider').slick({
      autoplay:true,
      accessibility:true,
      adaptiveHeight:false,
      autoplaySpeed:3000,
      arrows:true,
      pauseOnHover:false,
      zIndex:2,
      centerPadding: 0,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
    });
  });
  // Website loader
  setTimeout(function(){
    $('.loader-bg').fadeToggle();
  }, 1500);
          
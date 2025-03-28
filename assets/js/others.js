$(function() {

  numberCounter('.counter', '.reset-trigger', '.start-trigger', 1974, 2024, 3000, function() {
      // console.log("Animation started");
  }, function() {
      // console.log("Animation ended");
  }, function() {
      // console.log("Counter reset");
  }, function() {
      // console.log("Counter start");
  });
  $('.start-trigger').click();


  // Navi
  var isDesktop = false;
  var isMobile = false;
  var isInitDesktop = false;
  var isInitMobile = false;

  if($(window).width() > 1024){

      // msgDesktop();

      isInitDesktop = true;
      isInitMobile = false;

      $('.p50header').unbind( "mouseenter" );
      $('.p50header').unbind( "mouseleave" );
      $('.p50header').bind('mouseenter', function() {
          $(this).addClass('active')
      })
      .bind('mouseleave', function(){
          $(this).removeClass('active')
      });

      if(isInitDesktop == true){
          // console.log('isInitDesktop:', isInitDesktop);
          // $('.JhasSub > a').bind('mouseenter', function() {
          //     // console.log('subnavi2', $(this));
          //     $(this).addClass('activeNavi');
          //     $(this).siblings('div.JhasSubInner').show();
          // }).bind('mouseleave', function(){
          //     $(this).removeClass('activeNavi');
          //     $(this).siblings('div.JhasSubInner').hide();
          // });

          // $('.JhasSubInner').bind('mouseenter', function() {
          //     // console.log('subnavi');
          //     $(this).siblings('a').addClass('activeNavi');
          //     $(this).show();
          // }).bind('mouseleave', function(){
          //     $(this).siblings('a').removeClass('activeNavi');
          //     $(this).hide();
          // });
      }  

  } else {

      isInitDesktop = false;
      isInitMobile = true;

      $('.p50header').unbind( "mouseenter" );
      $('.p50header').unbind( "mouseleave" );
      $('.p50header').bind('mouseenter', function() {
          $(this).addClass('active')
      })
      .bind('mouseleave', function(){
          $(this).removeClass('active')
      });

      if(isInitMobile == true){
          // console.log('isInitMobile:', isInitMobile);
          // $('.JhasSub > a').click(function(e){
          //     e.preventDefault();
          //     if(!$(this).hasClass('activeNavi')){
          //         $(this).addClass('activeNavi');
          //         $(this).siblings('div.JhasSubInner').slideDown(300);
          //     } else {
          //         $(this).removeClass('activeNavi');
          //         $(this).siblings('div.JhasSubInner').slideUp(300);
          //     }
          // });

          $('.p50headerRightBurger').click(function(){
              // console.log('p50headerRightBurger');
              if(!$(this).siblings('.p50headerRightBtm').hasClass('show')){
                  $(this).parent().parent().addClass('active');
                  $(this).siblings('.p50headerRightBtm').addClass('show');
                  $(this).siblings('.p50headerRightBtm').slideDown(300);
                  $('body').addClass('noScrollbar');
              } else {
                  $(this).parent().parent().removeClass('active');
                  $(this).siblings('.p50headerRightBtm').removeClass('show');
                  $(this).siblings('.p50headerRightBtm').slideUp(300);
                  $('body').removeClass('noScrollbar');
              }
          })

          $('.p50headerRightBtm ul li').each(function(){
            $(this).children('a').click(function(){
              // console.log('Clicked!!!!')
              $('.p50headerInner ').removeClass('active');
              $('.p50headerRightBtm').removeClass('show');
              $('.p50headerRightBtm').slideUp(300);
              $('body').removeClass('noScrollbar');
            })
          })
      }

  }

  $( window ).resize(function() {
      // // console.log($(window).width());

      if($(window).width() > 1024){

          // gsap.globalTimeline.resume();
          // gsap.globalTimeline.progress(1).resume(); 

          isDesktop = true;
          isMobile = false;

          // trigger close mobile navi
          if($('.p50headerRightBurger').parent().hasClass('active')){
              // console.log('p50headerRightBurger parent hasClass');
              $('.p50headerRightBurger').click();
          }
          if($('.JhasSub a').hasClass('activeNavi')){
              // console.log('JhasSub a hasClass');
              $('.JhasSub a.activeNavi').click();
          }

          
          if(isInitDesktop == true && isDesktop == true){
              // console.log('isInitDesktop == true && isDesktop == true');
          } else if(isInitDesktop == false && isDesktop == true){
              // console.log('isDesktop:', isDesktop);
              isInitMobile = false;
              isInitDesktop = true;

              $('.p50header').unbind( "mouseenter" );
              $('.p50header').unbind( "mouseleave" );

              $('.p50header').bind('mouseenter', function() {
                  $(this).addClass('active')
              })
              .bind('mouseleave', function(){
                  $(this).removeClass('active')
              });

              // $('.JhasSub > a').bind('mouseenter', function() {
              //     // console.log('subnavi2', $(this));
              //     $(this).addClass('activeNavi');
              //     $(this).siblings('div.JhasSubInner').show();
              // }).bind('mouseleave', function(){
              //     $(this).removeClass('activeNavi');
              //     $(this).siblings('div.JhasSubInner').hide();
              // });

              // $('.JhasSubInner').bind('mouseenter', function() {
              //     // console.log('subnavi');
              //     $(this).siblings('a').addClass('activeNavi');
              //     $(this).show();
              // }).bind('mouseleave', function(){
              //     $(this).siblings('a').removeClass('activeNavi');
              //     $(this).hide();
              // });
          }
          

      } else {

          // gsap.globalTimeline.pause();
          // gsap.globalTimeline.progress(1).pause(); 

          isDesktop = false;
          isMobile = true;

          
          if(isInitMobile == true && isMobile == true){
              // console.log('isInitMobile == true && isMobile == true');
          } else if(isInitMobile == false && isMobile == true){
              // console.log('isMobile:', isMobile, ' isDesktop:', isDesktop);
              isInitMobile = true;
              isInitDesktop = false;

              $('.JhasSub > a').unbind( "mouseenter" );
              $('.JhasSub > a').unbind( "mouseleave" );
              $('.JhasSubInner').unbind( "mouseenter" );
              $('.JhasSubInner').unbind( "mouseleave" );
              $( ".p50headerRightBurger" ).unbind();
              $('.JhasSub > a').unbind();

              $('.p50header').unbind( "mouseenter" );
              $('.p50header').unbind( "mouseleave" );
              $('.p50header').bind('mouseenter', function() {
                  $(this).addClass('active')
              })
              .bind('mouseleave', function(){
                  $(this).removeClass('active')
              });


              // $('.JhasSub > a').click(function(e){
              //     // console.log('.JhasSub > a');
              //     e.preventDefault();
              //     if(!$(this).hasClass('activeNavi')){
              //         $(this).addClass('activeNavi');
              //         $(this).siblings('div.JhasSubInner').slideDown(300);
              //     } else {
              //         $(this).removeClass('activeNavi');
              //         $(this).siblings('div.JhasSubInner').slideUp(300);
              //     }
              // });

              $('.p50headerRightBurger').click(function(){
                  // console.log('p50headerRightBurger');
                  if(!$(this).siblings('.p50headerRightBtm').hasClass('show')){
                      $(this).parent().parent().addClass('active');
                      $(this).siblings('.p50headerRightBtm').addClass('show');
                      $(this).siblings('.p50headerRightBtm').slideDown(300);
                      $('body').addClass('noScrollbar');
                  } else {
                      $(this).parent().parent().removeClass('active');
                      $(this).siblings('.p50headerRightBtm').removeClass('show');
                      $(this).siblings('.p50headerRightBtm').slideUp(300);
                      $('body').removeClass('noScrollbar');
                  }
              })

              $('.p50headerRightBtm ul li').each(function(){
                $(this).children('a').click(function(){
                  // console.log('Clicked!!!!')
                  $('.p50headerRightBtm').removeClass('show');
                  $('.p50headerRightBtm').slideUp(300);
                  $('body').removeClass('noScrollbar');
                })
              })
          }
          
      }
  });

  $('.p50headerRightBtm ul li').each(function(){
    $(this).children('a').click(function(e){
      
      var targetId = $(this).attr('href');
      var targetElement = $(targetId);
      $('html, body').animate({
          scrollTop: targetElement.offset().top
      }, 2000);
    })
  })
  $('.p50headerRightTop ul li').each(function(){
    $(this).children('a').click(function(e){
     
      var targetId = $(this).attr('href');
      var targetElement = $(targetId);
      $('html, body').animate({
          scrollTop: targetElement.offset().top
      }, 2000);
    })
  })
  $('.p50headerRightBtmM ul li').each(function(){
    $(this).children('a').click(function(e){
     
      var targetId = $(this).attr('href');
      var targetElement = $(targetId);
      $('html, body').animate({
          scrollTop: targetElement.offset().top
      }, 2000);
    })
  })

  $('.p50headerLeft').click(function(e){
 
      $('html, body').animate({
          scrollTop: $('.p50bannerContainer').offset().top
      }, 2000);
  })
  

  var prevScrollpos = window.pageYOffset;

  $(window).scroll(function(){
    // // console.log('scroll');
    var currentScrollPos = window.pageYOffset;
      // // console.log(prevScrollpos, currentScrollPos);
      if (prevScrollpos > currentScrollPos || prevScrollpos < 0) {
          // document.getElementById("navbar").style.top = "0";
          $(".p50header").css("top", "0px");
          $(".p50header").addClass("active");
          $('.p50header').unbind( "mouseleave" );
      } else {
          // document.getElementById("navbar").style.top = "-101px";
          $(".p50header").css("top", "-101px");
          $(".p50header").removeClass("active");
          $('.p50header').unbind( "mouseleave" );
      }

      if (currentScrollPos == 0) {
          $(".p50header").removeClass("active");
          // console.log('top');
          $('.p50header').bind('mouseleave', function(){
              $(this).removeClass('active');
              // console.log('top mouseleave');
          });
      }
      prevScrollpos = currentScrollPos;
  });
  // window.onscroll = function() {
  //     var currentScrollPos = window.pageYOffset;
  //     // // console.log(prevScrollpos, currentScrollPos);
  //     if (prevScrollpos > currentScrollPos || prevScrollpos < 0) {
  //         // document.getElementById("navbar").style.top = "0";
  //         $(".p50header").css("top", "0px");
  //         $(".p50header").addClass("active");
  //         $('.p50header').unbind( "mouseleave" );
  //     } else {
  //         // document.getElementById("navbar").style.top = "-101px";
  //         $(".p50header").css("top", "-101px");
  //         $(".p50header").removeClass("active");
  //         $('.p50header').unbind( "mouseleave" );
  //     }

  //     if (currentScrollPos == 0) {
  //         $(".p50header").removeClass("active");
  //         // console.log('top');
  //         $('.p50header').bind('mouseleave', function(){
  //             $(this).removeClass('active');
  //             // console.log('top mouseleave');
  //         });
  //     }
  //     prevScrollpos = currentScrollPos;
  // }


  // var youTubePlayer;
  // function homeYT(){
  //   var videoId =  $('#p50bannerBG02').data('yt');
  //   var startSeconds = 0; 
  //   var endSeconds = 10;
  //   var suggestedQuality = 'tiny';
  //   var height = 300;
  //   var width = 400;

  //   // console.log('videoId: ', videoId);

  //   function onError(event) {
  //     youTubePlayer.personalPlayer.errors.push(event.data);
  //   }


  //   function onReady(event) {
  //     var player = event.target;

  //     player.loadVideoById({ 
  //       suggestedQuality: suggestedQuality,
  //       videoId: videoId 
  //     });

  //     // player.pauseVideo();
  //     player.playVideo();
  //     // youTubePlayerDisplayFixedInfos();

  //     // console.log('player: ', player);
  //   }


  //   function onStateChange(event) {
  //     // var volume = Math.round(event.target.getVolume());
  //     // var volumeItem = document.getElementById(youTubePlayerVolumeItemId);

  //     // if (volumeItem && Math.round(volumeItem.value) != volume) {
  //     //   volumeItem.value = volume;
  //     // }
  //   }

  //   // player  = new YT.Player('p50bannerBG02',{ 
  //   //   videoId: videoId,
  //   //   height: height,
  //   //   width: width,
  //   //   playerVars: { 
  //   //     'autohide': 0,
  //   //     'cc_load_policy': 0,
  //   //     'controls': 2,
  //   //     'disablekb': 1,
  //   //     'iv_load_policy': 3,
  //   //     'modestbranding': 1,
  //   //     'rel': 0,
  //   //     'showinfo': 0,
  //   //     'mute': 1,
  //   //     'autoplay': 1,
  //   //     'controls': 0,
  //   //     'loop': 1,
  //   //     'playlist': videoId,
  //   //     'start': 0,
  //   //     'end': 10,
  //   //   },

  //   //   events: { 
  //   //     'onError': onError,
  //   //     'onReady': onReady,
  //   //     'onStateChange': onStateChange 
  //   //   } 
  //   // });

  //   // var player;
  //   // function onYouTubeIframeAPIReady() {
  //   //     player = new YT.Player('p50bannerBG02', {
  //   //         videoId: videoId, // Replace with your test video ID
  //   //         playerVars: {
  //   //             'autoplay': 1, 
  //   //             'mute': 1, 
  //   //             'start': 0,
  //   //             'end': 10,
  //   //             'loop': 1,
  //   //             'playlist': videoId,
  //   //         },
  //   //         events: {
  //   //             'onReady': onPlayerReady
  //   //         }
  //   //     });
  //   // }
  //   // onYouTubeIframeAPIReady();

  //   // function onPlayerReady(event) {
  //   //     // console.log("PlayerInfo:", event.target.playerInfo); 
  //   // }

  //   function onReady(event) {
  //       // console.log("Player is ready!", event, event.target.playerInfo.playerVars);
  //       // // console.log("Start Seconds: ", event.target.playerInfo.playerVars.start);
  //       // // console.log("End Seconds: ", event.target.playerInfo.playerVars.end);
  //   }

  //   function onStateChange(state) {
  //     // console.log('onStateChange');
  //     if (state.data === YT.PlayerState.ENDED) {
  //       // console.log('ENDED');
  //       player.loadVideoById({
  //         videoId: videoId,
  //         startSeconds: startSeconds,
  //         endSeconds: endSeconds
  //       });
  //     }
  //   }

  // }

  // homeYT();
  // // console.log('youTubePlayer: ', youTubePlayer);

  setTimeout(function(){
    $('.p50LoadingContainer').addClass('loaded');
    // $('.p50bannerBG > iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    // $('.p50c5BG > iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');

    setTimeout(function(){
      var children = $(".p50bannerTitle h1 span");
      var index = 0;
      function addClassToNextChild() {
          if (index == children.length) return;
          children.eq(index++).addClass("show");
          window.setTimeout(addClassToNextChild, 200);
      }
      addClassToNextChild();
      setTimeout(function(){
        $('.p50bannerBtn').addClass("show");
      }, 400);

      setTimeout(function(){
        $('body').removeClass('noScrollbar');
        $('.p50liveBanner').addClass('show');
        AOS.init();
        // youTubePlayer.playVideo();
        runSplit();
      }, 400);

    }, 400);

    // homeYT();

  }, 3500);

  // Check if the URL has a hash part and redirect after initial setups
  // if (window.location.hash) {
  //     // Remove the '#' from the hash
  //     var hash = window.location.hash.substring(1);

  //     setTimeout(function() {
  //         // Use jQuery to find the element with the corresponding 'id' and scroll to it smoothly
  //         var element = $('#' + hash);
  //         if (element.length) {
  //             $('html, body').animate({
  //                 scrollTop: element.offset().top
  //             }, 1000); // Duration in milliseconds for the animation
  //         }
  //     }, 3800); // This timeout includes the initial 3500 ms plus a delay for any initial animation
  // }

  // Function to extract the correct hash from the URL
  function extractHash(url) {
    var hashIndex = url.lastIndexOf('#');
    if (hashIndex === -1) return ''; // No hash found
    var hashString = url.substring(hashIndex + 1);
    var queryParamIndex = hashString.indexOf('?');
    if (queryParamIndex !== -1) {
        hashString = hashString.substring(0, queryParamIndex);
    }
    return hashString;
  }

  // Extract hash from current URL
  var hash = extractHash(window.location.href);

  // If a hash is present, handle the scrolling
  if (hash) {
    $(document).ready(function() {
        setTimeout(function() {
            var element = $('#' + hash);
            if (element.length) {
                $('html, body').animate({
                    scrollTop: element.offset().top
                }, 1000); // Duration in milliseconds for the animation
            }
        }, 3800); // Delay to accommodate any initial animations or delays
    });
  }


  $('.p50liveBannerClose').click(function(){
    // $(this).parent().remove();
    $(this).parent().addClass('after');
  })


  // Highlight Text
  // let typeSplit;
  // // Split the text up
  // function runSplit() {
  //   typeSplit = new SplitType(".split-lines", {
  //     types: "lines, words"
  //   });
  //   $(".line").append("<div class='line-mask'></div>");
  //   createAnimation();
  // }
  // // typeSplit.revert();
  // runSplit();
  // // Update on window resize
  // let windowWidth = $(window).innerWidth();
  // window.addEventListener("resize", function () {
  //   if (windowWidth !== $(window).innerWidth()) {
  //     windowWidth = $(window).innerWidth();
  //     typeSplit.revert();
  //     runSplit();
  //   }
  // });

  // gsap.registerPlugin(ScrollTrigger);

  // function createAnimation() {

  //   $(".line").each(function (index) {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: $(this),
  //         // trigger element - viewport
  //         start: "50% 50%",
  //         end: "bottom 50%",
  //         // pin: true,
  //         // start: 'center center',
  //         // end: '+=1500 bottom',
  //         // scrub: 1,
  //         scrub: 1,
  //         markers: false,
  //       }
  //     });
  //     // console.log('inside', $(this).find(".line-mask"));
  //     tl.to($(this).find(".line-mask"), {
  //       width: "0%",
  //       // duration: 2,
  //       stagger: 0.5,
  //       // ease: "power1",
  //     });
  //   });
  // }


  let typeSplit;
  // Split the text up
  function runSplit() {
    typeSplit = new SplitType(".split-lines", {
      types: "lines"
    });
    $(".line").append("<div class='line-mask'></div>");
    createAnimation();
  }
  // typeSplit.revert();

  runSplit();

  // Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      typeSplit.revert();
      runSplit();
    }
  });

  gsap.registerPlugin(ScrollTrigger);

  function createAnimation() {

    let prevEndTrigger = "";

    // $(".line").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(".line"),
          // trigger element - viewport
          // start: () => prevEndTrigger ? "center center" : "center center-=20%",
          // end: () => "bottom center+=10%",
          start: 'center 80%',
          end: 'bottom 30%',
          // pin: true,
          // scrub: 1,
          scrub: 1,
          markers: false,
        }
      });

      // tl.fromTo($(".line"), {
      //   "--highlight-offset": "0%"
      // }, {
      //   "--highlight-offset": "100%",
      //   ease: "linear",
      //   stagger: 0.5,
      // });

      tl.to($(".line"), {
        "--highlight-offset": "100%",
        ease: "linear",
        stagger: 0.5,
      });

      // console.log('prevEndTrigger: ', prevEndTrigger);
      prevEndTrigger = () => tl.scrollTrigger.end;
    // });
  }


  // Hightlight Test02
  // const splitText = new SplitText(".p50c2Content p", {
  //   type: "lines",
  //   linesClass: "line" 
  // });

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".p50c2Content",
  //     scrub: 1,
  //     start: "top 65%",
  //     end: "bottom 65%",
  //     markers: true 
  //   } 
  // });

  // // tl.from(".line", {
  // //   x: -100,
  // //   stagger: 0.5 
  // // });

  // tl.to(".line", {
  //   // duration: 1,
  //   "--highlight-offset": "100%",
  //   stagger: 0.5 
  // }, "<+=0.3"
  // );


  var owl01 = $('.p50c3Swiper');
  owl01.on('initialize.owl.carousel', function(event) {
    // console.log('p50c3Swiper initialize');
    $('.p50c3Swiper .item').each(function(){

      $(".p50c3Container").on("click", ".p50generalBtn", function(e) {
        e.preventDefault();
        if ($(this).hasClass('articlebtn')) {
          // If it has 'articlebtn', allow it to navigate (or add any custom behavior)
          window.location.href = $(this).attr('href');  // Redirect to the link's href
        } else {
          // For other '.p50generalBtn' elements, execute the existing fadeIn and class addition
          $(document).find($(this).attr('href')).fadeIn(300);
          $('body').addClass('noScrollbar');
        }
      });
    })
  })
  owl01.owlCarousel({
      items:1,
      loop:true,
      margin:85,
      autoplay:true,
      autoplayTimeout:3500,
      smartSpeed: 1500,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1,
            margin:33,
        },
        767:{
            items:1,
            margin:33,
        },
        768:{
            items:1
        }
      }
  });

  // var owl02 = $('.p50c4Carousel01');
  // owl02.on('initialize.owl.carousel', function(event) {
  //   // console.log('p50c4Carousel01 initialize');
  //   $('.p50c4Carousel01 .item').each(function(){
  //     // // console.log($(this).attr('class'));
  //     let ytID = $(this).children('.p50c3SwiperInner').children('.p50generalBtn').data('yt');
  //     // console.log('ytID: ', ytID);
  //     $(this).children('.p50c4SwiperInner').children('.p50generalBtn').click(function(){
  //       var ID = $(this).attr('href');
  //       $(document).find( $(this).attr('href') ).fadeIn(300);
  //       $('body').addClass('noScrollbar');
  //       // console.log('ID: ', ID);

  //       var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
  //       // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  //     })
  //   })
  // })
  // owl02.owlCarousel({
  //     items:2,
  //     loop:true,
  //     margin:20,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     smartSpeed: 1500,
  //     autoplayHoverPause:true,

  //     // autoplay: true,
  //     // slideTransition: 'linear',
  //     // autoplayTimeout: 6000,
  //     // autoplaySpeed: 6000,
  //     // autoplayHoverPause: true,

  //     // mouseDrag: false,
  //     // touchDrag: false,
  //     responsive:{
  //       0:{
  //           items:1
  //       },
  //       767:{
  //           items:1
  //       },
  //       768:{
  //           items:2
  //       }
  //     }
  // });

  // var owl02 = $('.p50c4Carousel01');
  // owl02.on('initialize.owl.carousel', function(event) {
  //   // console.log('p50c4Carousel01 initialize');
  //   $('.p50c4Carousel01 .item').each(function(){
  //     // // console.log($(this).attr('class'));
  //     let ytID = $(this).children('.p50c4SwiperInner').children('.p50generalBtn').data('yt');
  //     // console.log('ytID: ', ytID);

  //     let ytCover = 'https://img.youtube.com/vi/'+ytID+'/maxresdefault.jpg';
  //     $(this).children('.p50c4SwiperBG').css('background-image','url('+ytCover+')');
  //     // console.log('ytCover: ', ytCover);

  //     $(this).children('.p50c4SwiperInner').children('.p50generalBtn').click(function(e){
  //       e.preventDefault();
  //       var ID = $(this).attr('href');
  //       $(document).find( $(this).attr('href') ).fadeIn(300);
  //       $('body').addClass('noScrollbar');
  //       // console.log('ID: ', ID);

  //       var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
  //       // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  //     })
  //   })
  // })
  // owl02.owlCarousel02({
  //   items: 2,
  //   loop: true,
  //   margin: 20,
  //   autoplay: true,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 0,
  //   autoplaySpeed: 8000,
  //   autoplayHoverPause: false ,
  //   responsive:{
  //     0:{
  //         items:1
  //     },
  //     767:{
  //         items:1
  //     },
  //     768:{
  //         items:2
  //     }
  //   }
      
  // });
  var resizeTicker = true;
  if ($(window).width() <= 1024) {
     resizeTicker = false;
  } else { 
     resizeTicker = true;
  }
  
  let mainTicker = new Flickity('.p50c4Carousel01F', {
    accessibility: true,
    resize: resizeTicker,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: true,
    setGallerySize: true,
    draggable: true,
    cellAlign: 'left',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                resize: false,
            }
        }
    ],
    on: {
        ready: function() {
          $('.p50c4Carousel01 .b-slider__slide').each(function(){
            $(this).mouseover(function(){
            }).mouseleave(function(){
            });
  
            // Ambil gambar dari data-img
            let imgSrc = $(this).find('.p50generalBtn').attr('data-img');
  
            // Jika data-img kosong, pakai gambar default
            if (!imgSrc) {
                imgSrc = '/assets/images/default-image.jpg';
            }
  
            // Set gambar sebagai background
            $(this).find('.p50c4SwiperBG').css('background-image', 'url('+ imgSrc +')');
          });
        },
        change: function( index ) {
        }
      }
  });
  
  let mainTicker02 = new Flickity('.p50c4Carousel02F', {
    accessibility: true,
    resize: resizeTicker,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: true,
    setGallerySize: true,
    draggable: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                resize: false,
            }
        }
    ],
    on: {
        ready: function() {
          $('.p50c4Carousel02 .b-slider__slide').each(function(){
            // Ambil gambar dari data-img
            let imgSrc = $(this).find('.p50generalBtn').attr('data-img');
  
            // Jika data-img kosong, pakai gambar default
            if (!imgSrc) {
                imgSrc = '/assets/images/default-image.jpg';
            }
  
            // Set gambar sebagai background
            $(this).find('.p50c4SwiperBG').css('background-image', 'url('+ imgSrc +')');
          });
        },
        change: function( index ) {
        }
      }
  });
  

  let mainTicker03 = new Flickity('.p50c9Carousel01F', {
    accessibility: true,
    resize: resizeTicker,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: true,
    setGallerySize: true,
    draggable: true,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              resize: false,
          }
      }
  ],
    on: {
      ready: function() {
      },
      change: function( index ) {
      }
    }
  });
  let mainTicker04 = new Flickity('.p50c9Carousel02F', {
    accessibility: true,
    resize: resizeTicker,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: true,
    setGallerySize: true,
    draggable: true,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              resize: false,
          }
      }
  ],
    on: {
      ready: function() {
      },
      change: function( index ) {
      }
    }
  });
  mainTicker03.resize();
  mainTicker04.resize();

  let mainTicker05 = new Flickity('.p50cMSGcarousel01', {
    accessibility: true,
    resize: resizeTicker,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: true,
    setGallerySize: true,
    draggable: true,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              resize: false,
          }
      }
  ],
    on: {
      ready: function() {
      },
      change: function( index ) {
      }
    }
  });
  let mainTicker06 = new Flickity('.p50cMSGcarousel02', {
    accessibility: true,
    resize: resizeTicker,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: true,
    setGallerySize: true,
    draggable: true,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              resize: false,
          }
      }
  ],
    on: {
      ready: function() {
      },
      change: function( index ) {
      }
    }
  });
  mainTicker05.resize();
  mainTicker06.resize();


  let isTickerHovered = false;
  let isTicker02Hovered = false;
  let isTicker03Hovered = false;
  let isTicker04Hovered = false;
  let isTicker05Hovered = false;
  let isTicker06Hovered = false;

  let tickerDirection = -1;
  let ticker02Direction = 1; 
  let ticker03Direction = -1;
  let ticker04Direction = 1; 
  let ticker05Direction = -1;
  let ticker06Direction = 1; 

  // Set initial position to be 0
  mainTicker.x = 0;
  mainTicker02.x = 0;
  mainTicker03.x = 0;
  mainTicker04.x = 0;
  mainTicker05.x = 0;
  mainTicker06.x = 0;

  // Start the marquee animation
  // play();

  function setSpeed() {
    if (window.innerWidth < 769) { 
        return 1.1;
    }  else {
        return 2;
    }
  }

  // Main function that 'plays' the marquee.
  // function play() {
  //   // Set the decrement of position x
  //   // mainTicker.x -= 4.5;
  //   mainTicker.x -= setSpeed();
  //   mainTicker02.x += setSpeed();
  //   mainTicker03.x -= setSpeed();
  //   mainTicker04.x += setSpeed();

  //   // Settle position into the slider
  //   mainTicker.settle(mainTicker.x);
  //   mainTicker02.settle(mainTicker02.x);
  //   mainTicker03.settle(mainTicker03.x);
  //   mainTicker04.settle(mainTicker04.x);

  //   // // console.log('mainTicker: ', mainTicker, mainTicker.x);

  //   // Set the requestId to the local variable
  //   requestId = window.requestAnimationFrame(play);
  // }

  function play(ticker) {
    let speed = setSpeed();

    if (ticker === mainTicker) {
        ticker.x += speed * tickerDirection; 
    } else if (ticker === mainTicker02) {
        ticker.x += speed * ticker02Direction;
    } else if (ticker === mainTicker03) {
        ticker.x += speed * ticker03Direction; 
    } else if (ticker === mainTicker04) {
        ticker.x += speed * ticker04Direction;
    } else if (ticker === mainTicker05) {
        ticker.x += speed * ticker05Direction; 
    } else if (ticker === mainTicker06) {
        ticker.x += speed * ticker06Direction;
    }

    // ticker.x -= setSpeed();
    ticker.settle(ticker.x);
    ticker.requestId = window.requestAnimationFrame(play.bind(null, ticker)); 
  }


  // Main function to cancel the animation.
  // function pause() {
  //   if (requestId) {
  //     // console.log(requestId);
  //     // Cancel the animation
  //     window.cancelAnimationFrame(requestId);

  //     // Reset the requestId for the next animation.
  //     requestId = undefined;
  //   }
  // }

  let marqueeSlider = document.querySelector('.p50c4Carousel01F');
  let marqueeSlider02 = document.querySelector('.p50c4Carousel02F');
  let marqueeSlider03 = document.querySelector('.p50c9Carousel01F');
  let marqueeSlider04 = document.querySelector('.p50c9Carousel02F');
  let marqueeSlider05 = document.querySelector('.p50cMSGcarousel01');
  let marqueeSlider06 = document.querySelector('.p50cMSGcarousel02');
   
  marqueeSlider.addEventListener('mouseenter', () => {
    // pause()
    isTickerHovered = true;
    pauseIfNeeded(); 
  });
  marqueeSlider.addEventListener('mouseleave', () => {
    // play()
    isTickerHovered = false;
    playIfNeeded();  
  });
  marqueeSlider02.addEventListener('mouseenter', () => {
    // pause()
    isTicker02Hovered = true;
    pauseIfNeeded(); 
  });
  marqueeSlider02.addEventListener('mouseleave', () => {
    // play()
    isTicker02Hovered = false;
    playIfNeeded();  
  });
  marqueeSlider03.addEventListener('mouseenter', () => {
    // pause()
    // console.log('hover 03')
    isTicker03Hovered = true;
    pauseIfNeeded(); 
  });
  marqueeSlider03.addEventListener('mouseleave', () => {
    // play()
    isTicker03Hovered = false;
    playIfNeeded();  
  });
  marqueeSlider04.addEventListener('mouseenter', () => {
    // pause()
    isTicker04Hovered = true;
    pauseIfNeeded(); 
  });
  marqueeSlider04.addEventListener('mouseleave', () => {
    // play()
    isTicker04Hovered = false;
    playIfNeeded();  
  });
  marqueeSlider05.addEventListener('mouseenter', () => {
    // pause()
    // console.log('hover 05')
    isTicker05Hovered = true;
    pauseIfNeeded(); 
  });
  marqueeSlider05.addEventListener('mouseleave', () => {
    // play()
    isTicker05Hovered = false;
    playIfNeeded();  
  });
  marqueeSlider06.addEventListener('mouseenter', () => {
    // pause()
    isTicker06Hovered = true;
    pauseIfNeeded(); 
  });
  marqueeSlider06.addEventListener('mouseleave', () => {
    // play()
    isTicker06Hovered = false;
    playIfNeeded();  
  });

  function pauseIfNeeded() {
    if (isTickerHovered) pauseTicker(mainTicker); 
    if (isTicker02Hovered) pauseTicker(mainTicker02); 
    if (isTicker03Hovered) pauseTicker(mainTicker03); 
    if (isTicker04Hovered) pauseTicker(mainTicker04); 
    if (isTicker05Hovered) pauseTicker(mainTicker05); 
    if (isTicker06Hovered) pauseTicker(mainTicker06); 
  }

  function playIfNeeded() {
      if (!isTickerHovered) playTicker(mainTicker); 
      if (!isTicker02Hovered) playTicker(mainTicker02);
      if (!isTicker03Hovered) playTicker(mainTicker03); 
      if (!isTicker04Hovered) playTicker(mainTicker04);
      if (!isTicker05Hovered) playTicker(mainTicker05); 
      if (!isTicker06Hovered) playTicker(mainTicker06);
  }

  function pauseTicker(ticker) {
      if (ticker.requestId) { 
        // // console.log(ticker, ticker.requestId);
        window.cancelAnimationFrame(ticker.requestId);
        ticker.requestId = undefined;
      }
  }

  function playTicker(ticker) {
      if (!ticker.requestId) {
        // // console.log("Playing ticker:", ticker);
        ticker.requestId = window.requestAnimationFrame(play.bind(null, ticker)); 
      } else {
        // // console.log("Ticker already playing:", ticker); // Add debugging
      }
  }

  playTicker(mainTicker); 
  playTicker(mainTicker02); 
  playTicker(mainTicker03); 
  playTicker(mainTicker04); 
  playTicker(mainTicker05); 
  playTicker(mainTicker06); 



  // var splide02 = new Splide('.p50c4Splide01', {
  //   type: 'loop',
  //   drag: 'free',
  //   focus: 'center',
  //   autoWidth: false,
  //   perPage: 2,
  //   direction: 'rtl',
  //   autoScroll: {
  //     speed: 2 
  //   } 
  // });
  // splide02.on( 'mounted', function () {
  //   // console.log('splide02 mounted');
  //   $('.p50c4Splide01 .splide__slide').each(function(){
  //     // // console.log($(this).attr('class'));
  //     let ytID = $(this).children('.p50c3SwiperInner').children('.p50generalBtn').data('yt');
  //     // console.log('ytID: ', ytID);
  //     $(this).children('.p50c4SwiperInner').children('.p50generalBtn').click(function(){
  //       var ID = $(this).attr('href');
  //       $(document).find( $(this).attr('href') ).fadeIn(300);
  //       $('body').addClass('noScrollbar');
  //       // console.log('ID: ', ID);

  //       var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
  //       // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  //     })
  //   })
  // });

  // splide02.mount(window.splide.Extensions);


  // var swiper2 = new Swiper(".p50c4Swiper01", {
  //   spaceBetween: 30,
  //   slidesPerView: 2,
  //   //centeredSlides: true,
  //   loop: true,
  //   // loopAdditionalSlides: 4,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: true,
  //   },

  //   speed: 4000,
  //   // pagination: {
  //   //   el: ".swiper-pagination",
  //   //   clickable: true 
  //   // },

  //   // navigation: {
  //   //   nextEl: ".swiper-button-next",
  //   //   prevEl: ".swiper-button-prev" 
  //   // } 
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //     },
  //   },
  //   on: {
  //   init: function () {
  //       // console.log('swiper initialized');
  //       const swiperWidth = swiper2.swiper.size;
  //       if( ! swiper2.originalSlidesWidth ){
  //         swiper2.originalSlidesWidth = swiper2.swiper.slidesSizesGrid.reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0 );
  //       }
  //       const allSlidesWidth = swiper2.swiper.slidesSizesGrid.reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0 );
  //       const smallestSlide = Math.min( ...swiper2.swiper.slidesSizesGrid );
  //       // if all slides are smaller than swiper area and smallest slide
  //       if( swiperWidth + smallestSlide > allSlidesWidth ){
  //         // calculate needed duplicates
  //         const existingDuplicates = Math.round( ( allSlidesWidth - swiper2.originalSlidesWidth ) / swiper2.originalSlidesWidth );
  //         const duplicatesNeeded = Math.ceil( ( swiperWidth + smallestSlide ) / swiper2.originalSlidesWidth ) - 1 - existingDuplicates;
  //         // get all slides html
  //         if( ! swiper2.allSlidesHTML ){
  //           swiper2.allSlidesHTML = swiper2.swiper.slides.reduce( ( accumulator, currentValue ) => accumulator + '<div class="swiper-slide swiper-slide-duplicate">' + currentValue.innerHTML + '</div>', '' );
  //         }
  //         // add duplicated slides
  //         for( let i = 0; i < duplicatesNeeded; i++ ){
  //           swiper2.swiper.slidesEl.insertAdjacentHTML( 'beforeend', swiper2.allSlidesHTML );
  //         }
  //         // update swiper
  //         swiper2.swiper.update();
  //       }

  //     },
  //   },
  // });

  // swiper2.on('afterInit', function () {
  //   // console.log('afterInit!!');
    
  // });


  // $('.slick.marquee').slick02({
  //   speed: 8000,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   centerMode: false,
  //   cssEase: 'linear',
  //   slidesToShow: 2,
  //   draggable: false,
  //   focusOnSelect: false,
  //   pauseOnFocus: true,
  //   pauseOnHover: false,
  //   slidesToScroll: 1,
  //   variableWidth: false,
  //   infinite: true,
  //   initialSlide: 1,
  //   arrows: false,
  //   buttons: false 
  // });

  // $('.slick.marquee').on('init', function(event, slick){
  //   // console.log('p50c4Carousel01 initialize');
  //   $('.p50c4Carousel01 .item').each(function(){
  //     // // console.log($(this).attr('class'));
  //     let ytID = $(this).children('.p50c3SwiperInner').children('.p50generalBtn').data('yt');
  //     // console.log('ytID: ', ytID);
  //     $(this).children('.p50c4SwiperInner').children('.p50generalBtn').click(function(){
  //       var ID = $(this).attr('href');
  //       $(document).find( $(this).attr('href') ).fadeIn(300);
  //       $('body').addClass('noScrollbar');
  //       // console.log('ID: ', ID);

  //       var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
  //       // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  //     })
  //   })
  // });

  // // $(".slick.marquee").on( "mouseover", function() {
  // //   // console.log('mouseover');
  // //   // $('.slick.marquee').slick('slickPause');
  // //   $(this).slick('slickPause');
  // // }).on( "mouseout", function() {
  // //   // console.log('mouseout');
  // //   // $('.slick.marquee').slick('slickPlay');
  // //    $(this).slick('slickPlay');
  // // });

  



  // var owl02b = $('.p50c4Carousel02');
  // owl02b.on('initialize.owl.carousel', function(event) {
  //   // console.log('p50c4Carousel02 initialize');
  //   $('.p50c4Carousel02 .item').each(function(){
  //     // // console.log($(this).attr('class'));
  //     let ytID = $(this).children('.p50c3SwiperInner').children('.p50generalBtn').data('yt');
  //     // console.log('ytID: ', ytID);
  //     $(this).children('.p50c4SwiperInner').children('.p50generalBtn').click(function(){
  //       var ID = $(this).attr('href');
  //       $(document).find( $(this).attr('href') ).fadeIn(300);
  //       $('body').addClass('noScrollbar');
  //       // console.log('ID: ', ID);

  //       var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
  //       // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  //     })
  //   })
  // })
  // owl02b.owlCarousel({
  //     items:2,
  //     loop:true,
  //     margin:30,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     smartSpeed: 1500,
  //     autoplayHoverPause:true,
  //     // mouseDrag: false,
  //     // touchDrag: false,
  //     rtl:true,
  //     responsive:{
  //       0:{
  //           items:1
  //       },
  //       767:{
  //           items:1
  //       },
  //       768:{
  //           items:2
  //       }
  //     }
  // });

  // var owl02b = $('.p50c4Carousel02');
  // owl02b.on('initialize.owl.carousel', function(event) {
  //   // console.log('p50c4Carousel02 initialize');
  //   $('.p50c4Carousel02 .item').each(function(){
  //     // // console.log($(this).attr('class'));
  //     let ytID = $(this).children('.p50c4SwiperInner').children('.p50generalBtn').data('yt');
  //     // console.log('ytID: ', ytID);

  //     let ytCover = 'https://img.youtube.com/vi/'+ytID+'/maxresdefault.jpg';
  //     $(this).children('.p50c4SwiperBG').css('background-image','url('+ytCover+')');
  //     // console.log('ytCover: ', ytCover);

  //     $(this).children('.p50c4SwiperInner').children('.p50generalBtn').click(function(e){
  //       e.preventDefault();
  //       var ID = $(this).attr('href');
  //       $(document).find( $(this).attr('href') ).fadeIn(300);
  //       $('body').addClass('noScrollbar');
  //       // console.log('ID: ', ID);

  //       var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
  //       // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
  //       $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  //     })
  //   })
  // })
  // owl02b.owlCarousel02({
  //   items: 2,
  //   loop: true,
  //   margin: 20,
  //   autoplay: true,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 0,
  //   autoplaySpeed: 8000,
  //   autoplayHoverPause: false ,
  //   rtl:true,
  //   responsive:{
  //     0:{
  //         items:1
  //     },
  //     767:{
  //         items:1
  //     },
  //     768:{
  //         items:2
  //     }
  //   }
  // });


  function setupVideoHover(videoElementId, videoId) {
    const element = document.getElementById(videoElementId);
    
    // console.log('element: ', element, videoElementId, element.nextElementSibling.nextElementSibling);
    // Assuming 'player' is your YT.Player instance
    let player;

    element.nextElementSibling.nextElementSibling.addEventListener('mouseover', function(ele) {
      // console.log('mouseover', this.parentNode.className);

        // element.parentNode.classList.add('active');
      this.parentNode.classList.add('active');

        if (!player) {
            player = new YT.Player(videoElementId, {
                videoId: videoId,
                playerVars: { 
                  'autohide': 0,
                  'cc_load_policy': 0,
                  'controls': 2,
                  'disablekb': 1,
                  'iv_load_policy': 3,
                  'modestbranding': 1,
                  'rel': 0,
                  'showinfo': 0,
                  'start': 3 ,
                  'mute': 1,
                  'autoplay': 1,
                  'controls': 0,
                  'loop': 1,
                  'playlist': videoId,
                },
                events: {
                    'onReady': function(event) {
                        event.target.playVideo();
                    }
                }
            });
        } else {
            player.playVideo();
        }
    });

    element.nextElementSibling.nextElementSibling.addEventListener('mouseleave', function() {
      // console.log('mouseleave');
        if (player) {
          this.parentNode.classList.remove('active');
          player.pauseVideo();
        }
    });
  }

  $(".p50c5Tabs").tabs({
    active: 0,
    create: function( event, ui ) {

      $('.p50c5BvoteMainBtn').click(function(){
        var num = parseInt($(this).parent().siblings('.p50c5BvoteMain').children('p').children('span').text());
        if(!$(this).parent().hasClass('active')){
          $().addVoteCount($(this).data('video-id'));

          $(this).parent().addClass('active');
          $(this).parent().siblings('.p50c5BvoteMain').children('p').children('span').text(num += 1);
        } else {
          $(this).parent().removeClass('active');
          $(this).parent().siblings('.p50c5BvoteMain').children('p').children('span').text(num -= 1);
        }
      })

      $('.p50c5BvoteSecondBtn').click(function(){
        $().addVoteCount($(this).data('video-id'));

        var num = parseInt($(this).parent().siblings('.p50c5BvoteMain').children('p').children('span').text());
        if(!$(this).parent().hasClass('active')){
          $(this).parent().addClass('active');
          $(this).parent().siblings('.p50c5BvoteMain').children('p').children('span').text(num += 1);
        } else {
          $(this).parent().removeClass('active');
          $(this).parent().siblings('.p50c5BvoteMain').children('p').children('span').text(num -= 1);
        }
      })
    }
  });

  
  
  var owl03 = $('.p50c5carousel01');
  owl03.on('initialize.owl.carousel', function(event) {
    // console.log('initialize');
    $('.p50c5carousel01 .item').each(function(){
      // // console.log($(this).attr('class'));
      let ID = $(this).children('.p50c5carousel01YT').attr('id');
      let ytID = $(this).children('.p50c5carousel01YT').data('yt');
      // console.log(ID, ytID);
      // ytPlayer(ID, ytID);
      setupVideoHover(ID, ytID);

      let ytCover = 'https://img.youtube.com/vi/'+ytID+'/maxresdefault.jpg';
      
      // if (ytID !== 'zwQLFGKMt7E'){
      //   $(this).children('.p50c5SwiperBG').css('background-image','url('+ytCover+')');
      //   // console.log('ytCover: ', ytCover);
      // }

      $(this).find('.p50c5SwiperBG').each(function() {

        let ytCover;
    
        if ($(this).hasClass('no-img')) {
            ytCover = 'https://img.youtube.com/vi/' + ytID + '/hqdefault.jpg';
        } else {
            ytCover = 'https://img.youtube.com/vi/' + ytID + '/maxresdefault.jpg';
        }
    
        $(this).css('background-image', 'url(' + ytCover + ')');
      });

      $(this).children('.p50c5SwiperInner').children('.p50c5SwiperPlay').click(function(){
        // console.log('PLAY');
      })

      $(this).children('.p50c5SwiperInner').children('.p50c5SwiperVote').click(function(){
        var num = parseInt($(this).children('p').children('span').text());
        // console.log('VOTE', num, typeof(num));
        if(!$(this).parent().hasClass('active')){
          $().addVoteCount($(this).data('video-id'));

          $(this).parent().addClass('active');
          $(this).children('p').children('span').text(num += 1);
        } else {
          $(this).parent().removeClass('active');
          $(this).children('p').children('span').text(num -= 1);
        }
      })

      $(this).children('.p50c5SwiperInner').children('.p50c5SwiperPlay').click(function(e){
        e.preventDefault();
        var ID = $(this).attr('href');
        var IDyt = $(ID)
        // console.log(ID, IDyt);
        $(document).find( $(this).attr('href') ).fadeIn(300);
        $('body').addClass('noScrollbar');
        var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
        // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
        $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
        $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })

    })
  })
  owl03.owlCarousel({
      items:3,
      // loop:true,
      margin:20,
      // autoplay:true,
      // autoplayTimeout:1500,
      smartSpeed: 1500,
      // autoplayHoverPause:true,
      // mouseDrag: false,
      // touchDrag: false,
      // rtl:true,
      responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        768:{
            items:3
        }
      }
  });


  var owl04 = $('.p50c5carousel02');
  owl04.on('initialize.owl.carousel', function(event) {
    // console.log('initialize');
    $('.p50c5carousel02 .item').each(function(){
      // // console.log($(this).attr('class'));
      let ID = $(this).children('.p50c5carousel02YT').attr('id');
      let ytID = $(this).children('.p50c5carousel02YT').data('yt');
      // console.log(ID, ytID);
      // ytPlayer(ID, ytID);
      setupVideoHover(ID, ytID);

      // let ytCover = 'https://img.youtube.com/vi/'+ytID+'/maxresdefault.jpg';
      // $(this).children('.p50c5SwiperBG').css('background-image','url('+ytCover+')');

      $(this).find('.p50c5SwiperBG').each(function() {

        let ytCover;
    
        if ($(this).hasClass('no-img')) {
            ytCover = 'https://img.youtube.com/vi/' + ytID + '/hqdefault.jpg';
        } else {
            ytCover = 'https://img.youtube.com/vi/' + ytID + '/maxresdefault.jpg';
        }
    
        $(this).css('background-image', 'url(' + ytCover + ')');
      });
      // // console.log('ytCover: ', ytCover);

      $(this).children('.p50c5SwiperInner').children('.p50c5SwiperPlay').click(function(){
        // console.log('PLAY');
      })

      $(this).children('.p50c5SwiperInner').children('.p50c5SwiperVote').click(function(){
        
        var num = parseInt($(this).children('p').children('span').text());
        // console.log('VOTE', num, typeof(num));
        if(!$(this).parent().hasClass('active')){
          $(this).parent().addClass('active');
          $(this).children('p').children('span').text(num += 1);
        } else {
          $(this).parent().removeClass('active');
          $(this).children('p').children('span').text(num -= 1);
        }
      })

      $(this).children('.p50c5SwiperInner').children('.p50c5SwiperPlay').click(function(e){
        e.preventDefault();
        var ID = $(this).attr('href');
        var IDyt = $(ID)
        // console.log(ID, IDyt);
        $(document).find( $(this).attr('href') ).fadeIn(300);
        $('body').addClass('noScrollbar');
        var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
        // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
        $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
        $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      })

    })
  })
  owl04.owlCarousel({
      items:3,
      // loop:true,
      margin:20,
      // autoplay:true,
      // autoplayTimeout:1500,
      smartSpeed: 1500,
      // autoplayHoverPause:true,
      // mouseDrag: false,
      // touchDrag: false,
      // rtl:true,
      responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        768:{
            items:3
        }
      }
  });

  
  
  // var owl05 = $('.p50c9carousel01');
  // owl05.owlCarousel({
  //     items:1,
  //     loop:true,
  //     margin:24,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     smartSpeed: 1500,
  //     autoplayHoverPause:true,
  //     // mouseDrag: false,
  //     // touchDrag: false,
  //     responsive:{
  //       0:{
  //           items:1,
  //           margin:15,
  //       },
  //       767:{
  //           items:1,
  //           margin:15,
  //       },
  //       768:{
  //           items:1
  //       }
  //     }
  // });

  // var owl06 = $('.p50c9carousel02');
  // owl06.owlCarousel({
  //     items:1,
  //     loop:true,
  //     margin:24,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     smartSpeed: 1500,
  //     autoplayHoverPause:true,
  //     rtl:true,
  //     // mouseDrag: false,
  //     // touchDrag: false,
  //     responsive:{
  //       0:{
  //           items:1,
  //           margin:15,
  //       },
  //       767:{
  //           items:1,
  //           margin:15,
  //       },
  //       768:{
  //           items:1
  //       }
  //     }
  // });



  

  // Start the marquee animation
  // play02();

  // function setSpeed() {
  //   if (window.innerWidth < 769) { 
  //       return 1.5;
  //   } else if (window.innerWidth < 769) { 
  //       return 1.5;
  //   } else {
  //       return 4.5;
  //   }
  // }

  // // Main function that 'plays' the marquee.
  // function play02() {
  //   // // console.log('play02', setSpeed());
  //   // Set the decrement of position x
  //   // mainTicker.x -= 4.5;
  //   mainTicker03.x -= setSpeed();
  //   mainTicker04.x += setSpeed();

  //   // Settle position into the slider
  //   mainTicker03.settle(mainTicker.x);
  //   mainTicker04.settle(mainTicker02.x);

  //   // // console.log('mainTicker: ', mainTicker, mainTicker.x);

  //   // Set the requestId to the local variable
  //   requestId = window.requestAnimationFrame(play02);
  // }


  // var owl05 = $('.p50c9carousel01');
  // owl05.owlCarousel02({
  //   items: 2,
  //   loop: true,
  //   margin: 24,
  //   autoplay: true,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 0,
  //   autoplaySpeed: 8000,
  //   autoplayHoverPause: false ,
  //   responsive:{
  //     0:{
  //         items:1,
  //         margin:15,
  //     },
  //     767:{
  //         items:1,
  //         margin:15,
  //     },
  //     768:{
  //         items:2
  //     }
  //   }
  // });

  // var owl06 = $('.p50c9carousel02');
  // owl06.owlCarousel02({
  //   items: 2,
  //   loop: true,
  //   margin: 24,
  //   autoplay: true,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 0,
  //   autoplaySpeed: 8000,
  //   autoplayHoverPause: false ,
  //   rtl:true,
  //   responsive:{
  //     0:{
  //         items:1,
  //         margin:15,
  //     },
  //     767:{
  //         items:1,
  //         margin:15,
  //     },
  //     768:{
  //         items:2
  //     }
  //   }
  // });


  $('.milestone-carousel').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    margin: 0,
    URLhashListener:false,
    // autoplayHoverPause: true,
    // startPosition: 'URLHash',
    responsiveClass: true,
    linked: ".years-carousel" 
  });


  $(".years-carousel").on("initialize.owl.carousel link.to.owl.carousel", function () {
    $(this.$element).find(".owl-item.current").removeClass("current");

    var current = $(this.$element).find(".owl-item.active.center").length ?
    $(this.$element).find(".owl-item.active.center") :
    $(this.$element).find(".owl-item.active").eq(0);

    current.addClass("current");

  }).on('changed.owl.carousel', function(property){
      var current = property.item.index;
      // window.location.hash = current + 1;
      // window.location.hash = '';
      property.preventDefault();
      // console.log('current: ', current, property);
  }).owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    responsiveClass: true,
    items: 3,
    margin: 25,
    center: true,
    URLhashListener:false,
    // startPosition: 'URLHash',
    autoWidth:true,
    responsive: {
      0: {
        items: 3,
        // nav: false 
      },

      768: {
        items: 3,
        // nav: false 
      } 
    },

    linked: ".milestone-carousel" 
  });
    

  $('#history-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#timeline-slider',
    infinite: false,
    draggable: false,
    adaptiveHeight: true,
  });

  $('#timeline-slider').on('init', function(event, slick, currentSlide, nextSlide){
    // console.log('INIT', event, slick, currentSlide, nextSlide, slick.$slides[currentSlide], slick.$slides[nextSlide]);

    $(slick.$slides[0]).addClass('show');

    setTimeout(function(){ 
      var timelineBanner = $('.p50c10ContentLeft').outerHeight();
      // // console.log('timelineBanner: ', timelineBanner);
      $('#timeline-slider .slick-list').css('top', timelineBanner + 'px');
    }, 200);
    

    $(window).resize(function(){
      setTimeout(function(){ 
        var timelineBanner = $('.p50c10ContentLeft').outerHeight();
        // // console.log('timelineBanner: ', timelineBanner);
        $('#timeline-slider .slick-list').css('top', timelineBanner + 'px');
      }, 200);
    });

  });

  $('#timeline-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#history-slider',
    // dots: false,
    arrows: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false,
    variableWidth: true,
    draggable: true,
  });

  $('#timeline-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

    // $('.timeline-item').removeClass('show');
    $('.timeline .slick-list .slick-track .slick-slide').removeClass('show');
    
    // console.log('beforeChange', event, slick, currentSlide, nextSlide, slick.$slides[currentSlide], slick.$slides[nextSlide]);

    // slick.$slides[currentSlide].removeClass('show');

    // $(slick.$slides[currentSlide]).removeClass('show');

    var slideWidth = slick.$slides.eq(nextSlide).outerWidth();
    var slideWidth02 = slick.$slides.eq(nextSlide).innerWidth();
    var slideWidth03 = slick.$slides.eq(nextSlide).width();
    var centerOffset = (slick.$list.width() - slideWidth) / 2;
    var centerOffset02 = (slick.$list.width() - slideWidth) / 4;
    var translateX = -(slick.$slides.eq(nextSlide).position().left - centerOffset);
    var translateX02 = -(slick.$slides.eq(nextSlide).position().left - centerOffset02);

    // console.log('test: ', slideWidth, centerOffset, translateX, centerOffset02, translateX02, slideWidth02, slideWidth03, slick.$list.width(), slick.$list.children());

    

    // setTimeout(function(){
    //     slick.$list.children().css('transform', 'translate3d(' + translateX + 'px, 0px, 0px)');
    // }, 1000);

    $(slick.$slides[nextSlide]).addClass('show');
    // setTimeout(function(){
    //   $(slick.$slides[nextSlide]).addClass('show');
    // }, 500);

  });

  // $('#timeline-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //   // console.log('afterChange', currentSlide, nextSlide, slick.$slides.length);
  //   if(slick.$slides.length > currentSlide){
  //     // console.log('not last slides');
  //     // slick.$slides[currentSlide+1].addClass('show');

  //     setTimeout(function(){
  //       $(slick.$slides[currentSlide+1]).addClass('show');
  //     }, 500);
      
  //   }
  // });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    grid: {
      rows: 2,
    },
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 2,
        },
      },
      767: {
        slidesPerView: 1,
        grid: {
          rows: 2,
        },
      },
      768: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
      1024: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
    },
  });



  // Countdown Timer
  const controller = new AbortController();
  // Set the date we're counting down to
  const countDownDate = new Date("August 17, 2024 00:00:00").getTime();
  const clockDaysElement = document.querySelector(".clock-days");
  const clockHoursElement = document.querySelector(".clock-hours");
  const clockMinutesElement = document.querySelector(".clock-minutes");
  const clockSecondsElement = document.querySelector(".clock-seconds");
  // Create an animation callback every second:
  animationInterval(1000, controller.signal, time => {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );

    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);

    // // console.log(days, String(hours).padStart(2, '0'), minutes, seconds);

    // Display the results
    clockDaysElement.textContent = String(days).padStart(2, '0');
    clockHoursElement.textContent = String(hours).padStart(2, '0');
    clockMinutesElement.textContent = String(minutes).padStart(2, '0');
    clockSecondsElement.textContent = String(seconds).padStart(2, '0');

    // If the count down is finished, write some text
    if (distance < 0) {
      controller.abort();
      document.querySelector(".clock-container").innerHTML = "EXPIRED";
    }
  });

  function animationInterval(ms, signal, callback) {
    // Prefer currentTime, as it'll better sync animtions queued in the
    // same frame, but if it isn't supported, performance.now() is fine.
    const start = document.timeline ?
    document.timeline.currentTime :
    performance.now();

    function frame(time) {
      if (signal.aborted) return;
      callback(time);
      scheduleFrame(time);
    }

    function scheduleFrame(time) {
      const elapsed = time - start;
      const roundedElapsed = Math.round(elapsed / ms) * ms;
      const targetNext = start + roundedElapsed + ms;
      const delay = targetNext - performance.now();
      setTimeout(() => requestAnimationFrame(frame), delay);
    }

    scheduleFrame(start);
  }

  

  // Message Mobile
  // var owlMSG01 = $('.p50cMSGcarousel01');
  // owlMSG01.owlCarousel({
  //     items:2,
  //     loop:true,
  //     margin:24,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     smartSpeed: 1500,
  //     autoplayHoverPause:true,
  //     // mouseDrag: false,
  //     // touchDrag: false,
  //     responsive:{
  //       0:{
  //           items:1,
  //           margin:15,
  //       },
  //       767:{
  //           items:1,
  //           margin:15,
  //       },
  //       768:{
  //           items:2
  //       }
  //     }
  // });

  // var owlMSG02 = $('.p50cMSGcarousel02');
  // owlMSG02.owlCarousel({
  //     items:2,
  //     loop:true,
  //     margin:24,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     smartSpeed: 1500,
  //     autoplayHoverPause:true,
  //     rtl:true,
  //     // mouseDrag: false,
  //     // touchDrag: false,
  //     responsive:{
  //       0:{
  //           items:1,
  //           margin:15,
  //       },
  //       767:{
  //           items:1,
  //           margin:15,
  //       },
  //       768:{
  //           items:2
  //       }
  //     }
  // });


  // Message Scrolling
  // function msgDesktop(){

  //   gsap.set('.p50cMSGContent', {
  //     width: '100%',
  //     height: gsap.getProperty('.p50cMSGContent', 'height'), // apply the height of the image stack
  //     onComplete: () => {
  //       // console.log('HEIGHT: ', gsap.getProperty('.p50cMSGContent', 'height'));
  //       gsap.set('#imgGroup', { opacity: 1, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, perspective: 300 });
  //       gsap.set('#imgGroup img', {
  //         position: 'absolute',
  //         attr: { id: (i, t, a) => {//use GSAP's built-in loop to setup each image
  //             // // console.log('t: ', t);
  //             initImg(i, t);
  //             return 'img' + i;
  //           } 
  //         } 
  //       });


  //       // gsap.timeline({
  //       //   // defaults: { duration: 1 },
  //       //   onUpdate: () => {if (gsap.getProperty('#cursorClose', 'opacity') == 1) closeDetail();}, //close detail view on scroll
  //       //   scrollTrigger: {
  //       //     trigger: ".p50cMSGContentOuter",
  //       //     pin: true,
  //       //     markers: true,
  //       //     scrub: 2,
  //       //     start: "top top",
  //       //     end: "+=900 bottom"
  //       //   },
  //       // }).
  //       // fromTo('.imgBox', { z: -5000 }, { z: 350, stagger: -0.3, ease: 'none' }, 0.3).
  //       // fromTo('.imgBox img', { scale: 3 }, { scale: 1.15, stagger: -0.3, ease: 'none' }, 0.3).
  //       // to('.imgBox', { duration: 0, pointerEvents: 'auto', stagger: -0.3 }, 0.5).
  //       // from('.imgBox img', { duration: 0.3, opacity: 0, stagger: -0.3, ease: 'power1.inOut' }, 0.3).
  //       // to('.imgBox img', { duration: 0.1, opacity: 0, stagger: -0.3, ease: 'expo.inOut' }, 1.2).
  //       // to('.imgBox', { duration: 0, pointerEvents: 'none', stagger: -0.3 }, 1.27)
  //       // ;

  //       // gsap.from(".imgBox", {
  //       //   scrollTrigger: {
  //       //     trigger: ".p50cMSGContentOuter",
  //       //     pin: true,
  //       //     markers: true,
  //       //     scrub: 2,
  //       //     start: "center center",
  //       //     end: "+=900 center"
  //       //   },
  //       //   opacity: 0,
  //       //   z: -5000,
  //       //   ease: "expo.inOut",
  //       //   stagger: {
  //       //     amount: 3,
  //       //     from: "random"
  //       //   }
  //       // });

  //       gsap.fromTo(".imgBox", 
  //         { 
  //           z: -1000 ,
  //           opacity: 0
  //         },
  //         {
  //           scrollTrigger: {
  //             trigger: ".p50cMSGContentOuter",
  //             pin: true,
  //             markers: false,
  //             scrub: 1,
  //             start: "top top",
  //             end: "+=3000 top"
  //           },
  //           opacity: 1,
  //           z: 350,
  //           ease: "expo.inOut",
  //           stagger: {
  //             amount: -0.6,
  //             // from: "random"
  //             // from: from
  //           }
  //         }
  //       );

  //       // intro animation
  //       // gsap.from(window, { 
  //       //   duration: 1.4, 
  //       //   scrollTo: gsap.getProperty('.p50cMSGContent', 'height') / 3, 
  //       //   ease: 'power2.in' 
  //       // });
  //       // gsap.from('.imgBox', { 
  //       //   duration: 0.2, 
  //       //   opacity: 0, 
  //       //   stagger: 0.06, 
  //       //   ease: 'power1.inOut' 
  //       // });
  //     } 
  //   });
  // }

  // msgDesktop();

  


  // // gsap.set('#scrollDist', {
  // //   width: '100%',
  // //   height: gsap.getProperty('.p50cMSGContent', 'height'), // apply the height of the image stack
  // //   onComplete: () => {
  // //     // console.log('HEIGHT: ', gsap.getProperty('.p50cMSGContent', 'height'));
  // //     gsap.set('#imgGroup', { opacity: 1, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, perspective: 300 });
  // //     gsap.set('#imgGroup img', {
  // //       position: 'absolute',
  // //       attr: { id: (i, t, a) => {//use GSAP's built-in loop to setup each image
  // //           // // console.log('t: ', t);
  // //           initImg(i, t);
  // //           return 'img' + i;
  // //         } 
  // //       } 
  // //     });


  // //     gsap.timeline({
  // //       // defaults: { duration: 1 },
  // //       onUpdate: () => {if (gsap.getProperty('#cursorClose', 'opacity') == 1) closeDetail();}, //close detail view on scroll
  // //       scrollTrigger: {
  // //         trigger: '#scrollDist',
  // //         start: 'top top',
  // //         end: 'bottom bottom',
  // //         scrub: 1
  // //       },
  // //     }).
  // //     fromTo('.imgBox', { z: -5000 }, { z: 350, stagger: -0.3, ease: 'none' }, 0.3).
  // //     fromTo('.imgBox img', { scale: 3 }, { scale: 1.15, stagger: -0.3, ease: 'none' }, 0.3).
  // //     to('.imgBox', { duration: 0, pointerEvents: 'auto', stagger: -0.3 }, 0.5).
  // //     from('.imgBox img', { duration: 0.3, opacity: 0, stagger: -0.3, ease: 'power1.inOut' }, 0.3).
  // //     to('.imgBox img', { duration: 0.1, opacity: 0, stagger: -0.3, ease: 'expo.inOut' }, 1.2).
  // //     to('.imgBox', { duration: 0, pointerEvents: 'none', stagger: -0.3 }, 1.27)
  // //     ;
  // //   } 
  // // });

  // function initImg(i, t) {
  //   const box = document.createElement('div'); // make a container div
  //   box.appendChild(t); // move the target image into the container
  //   document.getElementById('imgGroup').appendChild(box); // put the container into the imgGroup div
  //   // // console.log('t.width: ', t.width)
  //   gsap.set(box, {
  //     pointerEvents: 'none',
  //     position: 'absolute',
  //     attr: { id: 'box' + i, class: 'imgBox' },
  //     width: t.width,
  //     height: t.height,
  //     overflow: 'hidden',
  //     top: '50%',
  //     left: '50%',
  //     x: t.dataset.x,
  //     y: t.dataset.y,
  //     xPercent: -50,
  //     yPercent: -50,
  //     // perspective: 500 
  //     perspective: 300 
  //   });


  //   // t.onmouseover = () => gsap.to('#cursorCircle', { duration: 0.2, attr: { r: 30, 'stroke-width': 4 } });

  //   // t.onmousedown = () => {
  //   //   gsap.to(t, { z: -25, ease: 'power2' });
  //   //   gsap.to('#cursorCircle', { attr: { r: 40 }, ease: 'power3' });
  //   // };

  //   // t.onmouseup = () => gsap.to(t, { z: 0, ease: 'power1.inOut' });

  //   // t.onmouseout = () => gsap.to('#cursorCircle', { duration: 0.2, attr: { r: 11, 'stroke-width': 3 } });

  //   t.onclick = () => {
  //     // console.log('CLICKED!!');
  //     showDetail(t)
  //   };
  // }

  var msgData = [
    {
      "name": "Jan Doe",
      "image": "./assets/img/msg-profile.png",
      "desc": "Let’s give a round of applause to PETRONAS for turning the big 5-0! Your energy, passion, and commitment to making a difference shine brighter than ever. Here’s to the next 50 years of friendship, success, and making the world a better place!",
      "hash": "#PETRONAS50"
    },
    {
      "name": "Donec ultricies aliquam sem euismod tempus",
      "image": "./assets/img/msg-profile.png",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum blandit libero, eget semper augue pellentesque id. Nullam eget molestie lorem, vel finibus arcu. Sed et tellus facilisis, pharetra orci ac, maximus eros. Sed convallis sapien nec luctus luctus. Donec vestibulum lacinia urna, vel pellentesque sapien rutrum ut. Curabitur sed mattis mauris. Morbi quis ante ut turpis tristique efficitur vitae tincidunt orci.",
      "hash": "#PETRONAS50, #Support"
    },
    {
      "name": "Donec ultricies aliquam sem euismod tempus",
      "image": "./assets/img/msg-profile.png",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum blandit libero, eget semper augue pellentesque id. Nullam eget molestie lorem, vel finibus arcu. Sed et tellus facilisis, pharetra orci ac, maximus eros.",
      "hash": "#Support"
    },
  ];


  // COMPLETED - Temp REMARK
  // let tl;
  function msgDesktop() {
    // tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".p50cMSGContentOuter",
    //         pin: true,
    //         markers: false,
    //         scrub: 1,
    //         start: "top top",
    //         end: "+=3000 top",
    //         endTrigger: ".p50cMSGContentOuter",
    //         // onEnter: () => makeTitleSticky(true),
    //         // onLeave: () => makeTitleSticky(false),
    //         // onEnterBack: () => makeTitleSticky(true),
    //         // onLeaveBack: () => makeTitleSticky(false)
    //     },
    //     paused: true // Start the timeline paused if you want to control play manually
    // });

    // gsap.set('.p50cMSGContent', {
    //     width: '100%',
    //     height: gsap.getProperty('.p50cMSGContent', 'height'),
    //     onComplete: () => {
    //         // console.log('HEIGHT: ', gsap.getProperty('.p50cMSGContent', 'height'));
    //         gsap.set('#imgGroup', {
    //             opacity: 1,
    //             position: 'absolute',
    //             width: '100%',
    //             height: '100%',
    //             top: 0,
    //             left: 0,
    //             perspective: 300
    //         });

    //         gsap.set('#imgGroup img', {
    //             position: 'absolute',
    //             attr: {
    //                 id: (i, t, a) => {
    //                     initImg(i, t);
    //                     return 'img' + i;
    //                 }
    //             }
    //         });

    //         // Add this animation to the timeline
    //         tl.fromTo(".imgBox", {
    //             z: -1000,
    //             opacity: 0
    //         }, {
    //             opacity: 1,
    //             z: 350,
    //             ease: "expo.inOut",
    //             stagger: {
    //                 amount: -0.6
    //             }
    //         });

            
    //       }
    //   });

      // return tl; // Return the timeline for external control
  }

  const myTimeline = msgDesktop(); // Create the timeline
  // console.log('myTimeline: ', myTimeline);

  // function setupStickyTitle() {
    // gsap.to("#p50cMSGTitle", {
    //   scrollTrigger: {
    //     trigger: ".p50cMSGContentOuter",
    //     start: "top-=210 top", // Start making the title sticky 100px before the trigger reaches the top
    //     end: "+=3000", // Adjust this value based on the content's size and the desired end point
    //     markers: false, // Helpful for debugging, remove in production
    //     toggleClass: {targets: "#stickyTitle", className: "sticky"}, // Optionally toggle a class
    //     // onEnter: () => makeTitleSticky(true),
    //     // onLeave: () => makeTitleSticky(false),
    //     // onEnterBack: () => makeTitleSticky(true),
    //     // onLeaveBack: () => makeTitleSticky(false)
    //     onEnter: () => {
    //       // makeTitleSticky(true);
    //       makeTitleSticky('top');
    //       // console.log('onEnter');
    //     },
    //     onLeave: () => {
    //       // makeTitleSticky(false);
    //       makeTitleSticky('top');
    //       // console.log('onLeave');
    //     },
    //     onEnterBack: () => {
    //       // makeTitleSticky(true);
    //       makeTitleSticky('top');
    //       // console.log('onEnterBack');
    //     },
    //     onLeaveBack: () => {
    //       // makeTitleSticky(false);
    //       makeTitleSticky('top');
    //       // console.log('onLeaveBack');
    //     }
    //   }
    // });
  // }

  // function makeTitleSticky(isSticky) {
  //   const stickyTitle = document.getElementById('p50cMSGTitle');
  //   // console.log('isSticky: ', isSticky);
  //   if (isSticky == true) {
  //     // console.log('FIXED');
  //       gsap.to(stickyTitle, {
  //           position: 'fixed',
  //           top: 0,
  //           left: 0,
  //           right: 0,
  //           zIndex: 2,
  //           duration: 0.3
  //       });
  //   } else if(isSticky == 'top'){
  //     // console.log('ABSOLUTE');
  //     gsap.to(stickyTitle, {
  //           // clearProps: "all" // This reverts the CSS properties added by GSAP
  //           position: 'static', // Change back to absolute or initial as needed
  //           top: '0',
  //           left: 'initial',
  //           right: 'initial',
  //           zIndex: 'initial',
  //           duration: 0.6
  //       });
  //   } else {
  //     // console.log('ABSOLUTE -210');
  //       gsap.to(stickyTitle, {
  //           // clearProps: "all" // This reverts the CSS properties added by GSAP
  //           position: 'absolute', // Change back to absolute or initial as needed
  //           top: '-210',
  //           left: 'initial',
  //           right: 'initial',
  //           zIndex: 'initial',
  //           duration: 0.6
  //       });
  //   }
  // }

  // const myTimeline02 = setupStickyTitle(); // Create the timeline

  // console.log('myTimeline02: ', myTimeline02);

  // function initImg(i, t) {
  //   const box = document.createElement('div'); // make a container div
  //   box.appendChild(t); // move the target image into the container
  //   document.getElementById('imgGroup').appendChild(box); // put the container into the imgGroup div
  //   gsap.set(box, {
  //     pointerEvents: 'none',
  //     position: 'absolute',
  //     attr: { id: 'box' + i, class: 'imgBox' },
  //     width: t.width,
  //     height: t.height,
  //     overflow: 'hidden',
  //     top: '50%',
  //     left: '50%',
  //     x: t.dataset.x,
  //     y: t.dataset.y,
  //     xPercent: -50,
  //     yPercent: -50,
  //     // perspective: 500 
  //     perspective: 300 
  //   });

  //   t.onclick = () => {
  //     // console.log('CLICKED!!');
  //     showDetail(t)
  //   };
  // }

  // Control functions (you can call these based on user interaction or other conditions)
  // function playAnimation() {
  //   if (myTimeline.scrollTrigger) {
  //     myTimeline.scrollTrigger.enable(); // Enable the scroll trigger
  //   }
  //   myTimeline.play();
  // }

  // function pauseAnimation() {
  //   if (myTimeline.scrollTrigger) {
  //     myTimeline.scrollTrigger.disable(); // Disable the scroll trigger
  //   }
  //   myTimeline.pause();
  //   ScrollTrigger.refresh();
  //   // console.log('myTimeline: ', myTimeline);
  // }
  // pauseAnimation()


  // function showDetail(t) {
  //   // console.log('showDetail: ', t);
  //   gsap.timeline().
  //     set('#detailTxt', { textContent: t.alt }, 0).
  //     set('#detailImg', { background: 'url(' + t.src + ') center no-repeat' }, 0).
  //     fromTo('#detail', { top: '100%' }, { top: 0, ease: 'expo.inOut' }, 0).
  //     fromTo('#detailImg', { y: '100%' }, { y: '0%', ease: 'expo', duration: 0.7 }, 0.2).
  //     fromTo('#detailTxt', { opacity: 0 }, { opacity: 1, ease: 'power2.inOut' }, 0.4)
  //     // .to('#cursorCircle', { duration: 0.2, opacity: 0 }, 0.2).
  //     // to('#cursorClose', { duration: 0.2, opacity: 1 }, 0.4)
  //   ;
  // }

  // function closeDetail() {
  //   gsap.timeline().
  //     to('#detailTxt', { duration: 0.3, opacity: 0 }, 0).
  //     to('#detailImg', { duration: 0.3, y: '-100%', ease: 'power1.in' }, 0).
  //     to('#detail', { duration: 0.3, top: '-100%', ease: 'expo.in' }, 0.1)
  //     // .to('#cursorClose', { duration: 0.1, opacity: 0 }, 0).
  //     // to('#cursorCircle', { duration: 0.2, opacity: 1 }, 0.1)
  //   ;
  // }
  //document.getElementById('detail').onclick = closeDetail;

  // if (ScrollTrigger.isTouch == 1) {// on mobile, hide mouse follower + remove the x/y positioning from the images
  //   // gsap.set('#cursor', { opacity: 0 });
  //   gsap.set('.imgBox', { x: 0, y: 0 });
  // } else {

  //   // quickTo can be used to optimize x/y movement on the cursor...but it doesn't work on fancier props like 'xPercent'
  //   // cursorX = gsap.quickTo('#cursor', 'x', { duration: 0.3, ease: 'power2' });
  //   // cursorY = gsap.quickTo('#cursor', 'y', { duration: 0.3, ease: 'power2' });

  //   window.onmousemove = e => {
  //     gsap.to('.imgBox', { // move + rotate imgBoxes relative to mouse position
  //       xPercent: -e.clientX / innerWidth * 100,
  //       yPercent: -25 - e.clientY / innerHeight * 50,
  //       rotateX: 8 - e.clientY / innerHeight * 16,
  //       rotateY: -8 + e.clientX / innerWidth * 16 });


  //     gsap.to('.imgBox img', { // move images inside each imgBox, creates additional parallax effect
  //       xPercent: -e.clientX / innerWidth * 10,
  //       yPercent: -5 - e.clientY / innerHeight * 10 });


  //     // mouse follower
  //     // cursorX(e.clientX);
  //     // cursorY(e.clientY);
  //   };
  // }



  $('.p50liveBannerImg').click(function(e){
    e.preventDefault();
    var ID = $(this).attr('href');
    var IDyt = $(ID)
    // console.log(ID, IDyt);
    $(document).find( $(this).attr('href') ).fadeIn(300);
    $('body').addClass('noScrollbar');
    var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
    // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
    $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
    $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  })

  $('.p50c5BGbtnPlay').click(function(e){
    e.preventDefault();
    var ID = $(this).attr('href');
    var IDyt = $(ID)
    // console.log(ID, IDyt);
    $(document).find( $(this).attr('href') ).fadeIn(300);
    $('body').addClass('noScrollbar');
    var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
    // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
    $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
    $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  })

  $('.JlightboxClose').click(function(){
      $('.JlightboxContainer').fadeOut(300);
      setTimeout(function(){ 
          $('body').removeClass('noScrollbar');
      }, 300);  
      if($(this).hasClass('JlightboxCloseVideo')){
        // console.log('IS yt');
        $(this).siblings('.JlightboxVideo').children('iframe').attr('src', '');
      } else {
        // console.log('NOT yt');
      }
  })
  $('.JlightboxContainer').click(function(){
      $('.JlightboxContainer').fadeOut(300);
      setTimeout(function(){ 
          $('body').removeClass('noScrollbar');
      }, 300);  
  })
  $('.JlightboxContentOuter').click(function(e){
      e.stopPropagation();
  });
   


  var mapIcon = {
    1: './assets/img/map/tooltip-icon01.png',
    2: './assets/img/map/tooltip-icon02.png',
    3: './assets/img/map/tooltip-icon03.png',
    4: './assets/img/map/tooltip-icon04.png',
    5: './assets/img/map/tooltip-icon05.png',
    6: './assets/img/map/tooltip-icon06.png',
    7: './assets/img/map/tooltip-icon07.png',
    8: './assets/img/map/tooltip-icon08.png',
    9: './assets/img/map/tooltip-icon09.png',
    10: './assets/img/map/tooltip-icon10.png',
    11: './assets/img/map/tooltip-icon11.png',
    12: './assets/img/map/tooltip-icon12.png',
    13: './assets/img/map/tooltip-icon13.png',
    14: './assets/img/map/tooltip-icon14.png',
    15: './assets/img/map/tooltip-icon15.png',
    16: './assets/img/map/tooltip-icon16.png',
    17: './assets/img/map/tooltip-icon17.png',
    18: './assets/img/map/tooltip-icon18.png',
    19: './assets/img/map/tooltip-icon19.png',
    20: './assets/img/map/tooltip-icon20.png',
    21: './assets/img/map/tooltip-icon21.png',
    22: './assets/img/map/tooltip-icon22.png',
    23: './assets/img/map/tooltip-icon23.png',
    24: './assets/img/map/tooltip-icon24.png',
  }

  var torchData = [
    {
      "name": "All",
      // "image": "./assets/images/icon01.svg",
      "children": [
        {
            "month": "ELJE EL POWER SERIES 10-800kVA",
            "date": "",
            "event": "UPS yang dilengkapi dengan konversi ganda online, kontrol DSP penuh, dan manajemen baterai yang dioptimalkan untuk efisiensi tinggi. Dengan redundansi paralel N+X, berbagai proteksi, mode generator, isolasi galvanik, serta manajemen jaringan yang mudah digunakan, UPS ini menawarkan keandalan dan fleksibilitas luar biasa.",
            "location": "Online Double Conversion, Full DSP Control, High Power Factor, Optimized Battery Management, N+X Parallel Redundancy, Multi-Protection.",
            "region": "Wide Input Adaptability, Generator Mode, EPO Function/ LCD Display, Galvanic Isolation, User-Friendly Network Management.",
            "istorch": true,
            "istorchcompleted": false,
            "tooltipicon": [10],
            "tooltipsdesc": "UPS yang dilengkapi dengan konversi ganda online, kontrol DSP penuh, dan manajemen baterai yang dioptimalkan untuk efisiensi tinggi. Dengan redundansi paralel N+X, berbagai proteksi, mode generator, isolasi galvanik, serta manajemen jaringan yang mudah digunakan, UPS ini menawarkan keandalan dan fleksibilitas luar biasa.",
            "xPos": 71,
            "yPos": 28,
            "xPosInner": 57,
            "yPosInner": 28,
            "completed": true,
            "path": "",
            "xPath":"0",
            "yPath":"0",
            "xPathInner":"0",
            "yPathInner":"0",
        },
        {
            "month": "ELJE EL POWER SE-T SERIES 10-800kVA",
            "date": "",
            // "date": "TBC",
            "event": "UPS yang menggunakan kontrol ganda DSP untuk meningkatkan stabilitas dan keandalan sistem, dan kecocokan beban yang optimal. Manajemen baterai cerdas dan teknologi pengisian otomatis yang canggih mengurangi kebutuhan pemeliharaan, serta menawarkan konfigurasi voltase baterai yang fleksibel. Desain redundan paralel N+X mendukung hingga 6 unit, memungkinkan fleksibilitas konfigurasi yang tinggi. Fitur tambahan termasuk mode generator, sinkronisasi LBS, fungsi EPO, dan manajemen jaringan yang user-friendly.",
            "location": "Double DSP control makes the whole system more stable and reliable, The output power factor up to 0.9 better matches the load, Intelligent battery management and advanced battery auto float/boost charge technology, reduces the frequency of battery maintenance, Flexible battery voltage configuration.",
            "region": "N+X parallel redundant design, up to 6 units available, makes the configuration more flexible, Generator mode, LBS synschronization, EPO function, User friendly network management.",
            "istorch": false,
            "istorchcompleted": true,
            "tooltipicon": [2],
            "tooltipsdesc": "UPS yang menggunakan kontrol ganda DSP untuk meningkatkan stabilitas dan keandalan sistem, dan kecocokan beban yang optimal. Manajemen baterai cerdas dan teknologi pengisian otomatis yang canggih mengurangi kebutuhan pemeliharaan, serta menawarkan konfigurasi voltase baterai yang fleksibel. Desain redundan paralel N+X mendukung hingga 6 unit, memungkinkan fleksibilitas konfigurasi yang tinggi. Fitur tambahan termasuk mode generator, sinkronisasi LBS, fungsi EPO, dan manajemen jaringan yang user-friendly.",
            // "xPos": 16,
            // "yPos": 75,
            "xPos": 17.5,
            "yPos": 77,
            // "xPosInner": 22,
            // "yPosInner": 71,
            "xPosInner": 26,
            "yPosInner": 75,
            "completed": true,
            "path": "",
            "xPath":"0",
            "yPath":"0",
            "xPathInner":"0",
            "yPathInner":"0",
        },
        {
            "month": "ELX SERIES 1-10kVA",
            "date": "",
            "event": "UPS outdoor untuk jaringan komunikasi marginal, dirancang khusus untuk sistem komunikasi nirkabel pada stasiun basis mikro seluler outdoor. Sistem ini merupakan UPS online terintegrasi berkinerja tinggi yang sangat cocok untuk penggunaan di luar ruangan, menawarkan teknologi mutakhir dan kepraktisan yang sangat tinggi.",
            "location": "Provide continuous pure sine wave AC power supply for outside communications/ network equipment, Double-conversion online design, high temperature resistant, anti-cold, Using microprocessor control, to simplify the UPS control circuit, to improve the stability, Using digital control techniques, to avoid the traditional analog control temperature drift inherent defects such as hardware parameters, to ensure consistency and reliability of UPS.",
            "region": "This UPS is commonly used in the corner of the city, remote roads, mountains, bad environment, such as high temperature (+50 C)/ low temperature (-40 C), severe dust, moisture, rain, erosion, very poor power quality areas, Fine dust-proof, water-proof features",
            "istorch": false,
            "istorchcompleted": true,
            "tooltipicon": [5],
            "tooltipsdesc": "UPS outdoor untuk jaringan komunikasi marginal, dirancang khusus untuk sistem komunikasi nirkabel pada stasiun basis mikro seluler outdoor. Sistem ini merupakan UPS online terintegrasi berkinerja tinggi yang sangat cocok untuk penggunaan di luar ruangan, menawarkan teknologi mutakhir dan kepraktisan yang sangat tinggi.",
            "xPos": 20,
            "yPos": 79,
            "xPosInner": 41,
            "yPosInner": 82,
            "completed": true,
            "path": "assets/img/map/pathroad-1.svg",
            "xPath":-192,
            "yPath":43,
            "xPathInner":-192,
            "yPathInner":43,
        },
        // {
        //     "month": "May",
        //     "date": "5",
        //     "event": "Cub Prix Activation",
        //     "location": "Tangkak Circuit, Johor",
        //     "region": "Southern & East Coast",
        //     "istorch": false,
        //     "istorchcompleted": false,
        //     "tooltipicon": [5],
        //     "tooltipsdesc": "Cub Prix Activation",
        //     "xPos": 20,
        //     "yPos": 75,
        //     "xPosInner": 44,
        //     "yPosInner": 75,
        //     "completed": false,
        // },
        // {
        //     "month": "May",
        //     "date": "5",
        //     "event": "Convoy from PETRONAS station Tanjung Agas to PETRONAS station MuarByPass then to Tangkak Enhanced Cub Prix",
        //     "location": "Tanjung Agas, Johor",
        //     "region": "Southern & East Coast",
        //     "istorch": false,
        //     "istorchcompleted": false,
        //     "tooltipicon": [5],
        //     "tooltipsdesc": "Convoy from PS Tanjung Agas to PS MuarByPass and to Tangkak Enhanced Cub Prix",
        //     "xPos": 22,
        //     "yPos": 83,
        //     "xPosInner": 52,
        //     "yPosInner": 86,
        // },
        {
            "month": "ELJE JE-R 1-3kVA SERIES",
            "date": "",
            "event": "UPS yang memiliki desain konvertibel antara rack dan tower, dengan konversi ganda online dan kontrol digital penuh. Dengan rentang voltase input yang luas, pengisi daya pintar untuk baterai, fungsi EPO, regulasi kecepatan kipas cerdas, mode ECO untuk hemat energi, kompatibilitas generator, cold start, baterai hot-swappable, antarmuka LCD yang serbaguna, serta berbagai fungsi proteksi, UPS ini menawarkan fleksibilitas, efisiensi, dan keamanan yang optimal.",
            "location": "Rack/Tower convertible design, Online double conversion with full digital control, Wide input voltage range 110~300Vac, Smart charger design for optimized battery performance, Emergency power off function (EPO), Inteligent fan speed regulation",
            "region": "ECO mode operation for energy savinf, Generator compatible, Cold start, Hot-Swappable battery design, Versatile LCD human-computer interface, Multiple protection function",
            "istorch": true,
            "istorchcompleted": false,
            "tooltipicon": [1],
            "tooltipsdesc": "UPS yang memiliki desain konvertibel antara rack dan tower, dengan konversi ganda online dan kontrol digital penuh. Dengan rentang voltase input yang luas, pengisi daya pintar untuk baterai, fungsi EPO, regulasi kecepatan kipas cerdas, mode ECO untuk hemat energi, kompatibilitas generator, cold start, baterai hot-swappable, antarmuka LCD yang serbaguna, serta berbagai fungsi proteksi, UPS ini menawarkan fleksibilitas, efisiensi, dan keamanan yang optimal.",
            "xPos": 82,
            "yPos": 1,
            "xPosInner": 74,
            "yPosInner": 1,
            "completed": true,
            "path": "assets/img/map/pathroad-2.svg",
            "xPath":"-510",
            "yPath":"-570",
            "xPathInner":"-540",
            "yPathInner":"-600",
        },
        {
            "month": "ELJE JE-R 6-10kVA SERIES",
            "date": "",
            "event": "UPS yang mendukung desain konvertibel rack/tower dan menggunakan konversi ganda online dengan kontrol DSP. Dengan rentang voltase input yang luas, fungsi EPO, regulasi kecepatan kipas cerdas, dukungan operasi 3/1 dan 1/1, mode ECO untuk penghematan energi, kompatibilitas generator, cold start, berbagai fungsi proteksi, dan pengujian mandiri saat startup, serta opsi konfigurasi baterai yang optimal, UPS ini menawarkan fleksibilitas, efisiensi, dan keamanan yang unggul.",
            "location": "LCD supports Rack/Tower convertible design, Online double conversion with DSP control, Wide input voltage range 208~478Vac, Emergency power off function (EPO), Inteligent fan speed regulation, Support 3/1 and 1/1 operation",
            "region": "ECO mode operation for energy saving, Gerator compatible, Cold start, Multiple protection function, Self testing when UPS Startup, Optimization battery group, the quantity of battery: 16/18/20pcs (32~40pcs supportable)",
            "istorch": true,
            "istorchcompleted": false,
            "tooltipicon": [7, 16],
            "tooltipsdesc": "UPS yang mendukung desain konvertibel rack/tower dan menggunakan konversi ganda online dengan kontrol DSP. Dengan rentang voltase input yang luas, fungsi EPO, regulasi kecepatan kipas cerdas, dukungan operasi 3/1 dan 1/1, mode ECO untuk penghematan energi, kompatibilitas generator, cold start, berbagai fungsi proteksi, dan pengujian mandiri saat startup, serta opsi konfigurasi baterai yang optimal, UPS ini menawarkan fleksibilitas, efisiensi, dan keamanan yang unggul.",
            "xPos": 76,
            "yPos": 21,
            "xPosInner": 64,
            "yPosInner": 21,
            "completed": true,
            "path": "assets/img/map/pathroad-3.png",
            "xPath":"140",
            "yPath":"90",
            "xPathInner":"131",
            "yPathInner":"81",
        },
        {
            "month": "ELJE JE-R SERIES",
            "date": "",
            "event": "UPS yang memiliki densitas daya tinggi dan desain konvertibel rack/tower dengan dukungan LCD. Menggunakan konversi ganda on-line dengan kontrol digital penuh, UPS ini memiliki rentang voltase input yang luas (110~286Vac) dan rentang frekuensi input yang lebar. Fitur tambahan meliputi regulasi kecepatan kipas cerdas, beberapa antarmuka komunikasi, mode ECO untuk penghematan energi, pengujian mandiri saat startup, kompatibilitas generator, cold start, berbagai fungsi proteksi, dan konfigurasi baterai yang dapat dioptimalkan (16/18/20 pcs).",
            "location": "High Power Density, LCD supports Rack/Tower convertible design, Online double conversion with full digital control, Wide input voltage range 110~286Vac, Wide input frequency range, Inteligent fan speed regulation, Multiple Communication Interface.",
            "region": "ECO mode operation for energy saving, Self testing when UPS Startup, Generator compatible, Cold start, Multiple protection function, Optimization battery group, the quantity of battery: 16/18/20pcs (settable).",
            "istorch": true,
            "istorchcompleted": false,
            "tooltipicon": [4, 10],
            "tooltipsdesc": "UPS yang memiliki densitas daya tinggi dan desain konvertibel rack/tower dengan dukungan LCD. Menggunakan konversi ganda on-line dengan kontrol digital penuh, UPS ini memiliki rentang voltase input yang luas (110~286Vac) dan rentang frekuensi input yang lebar. Fitur tambahan meliputi regulasi kecepatan kipas cerdas, beberapa antarmuka komunikasi, mode ECO untuk penghematan energi, pengujian mandiri saat startup, kompatibilitas generator, cold start, berbagai fungsi proteksi, dan konfigurasi baterai yang dapat dioptimalkan (16/18/20 pcs)",
            "xPos": 79,
            "yPos": 11,
            "xPosInner": 69,
            "yPosInner": 11,
            "completed": true,
            "path": "assets/img/map/pathroad-4.svg",
            "xPath":"-2",
            "yPath":"-140",
            "xPathInner":"-30",
            "yPathInner":"-140",
        },
        {
            "month": "ELJE ELS 31 SERIES",
            "date": "",
            "event": "UPS yang menggabungkan desain on-line konversi ganda dengan waktu transfer nol dan kontrol modular dual-CPU, memberikan perlindungan unggul terhadap kelebihan beban dan kerusakan. Dengan fitur pencatatan log, diagnosis mandiri, dan kemampuan untuk koneksi paralel, UPS ini menawarkan keandalan tinggi dan fleksibilitas sistem yang luar biasa.",
            "location": "Double conversion on-line design, Zero transfer time of output, Modular design and dual-CPU control, Provides a strong protection againt overload and fault, Events log can be record in the LCD panel.",
            "region": "Southern & East Coast",
            "istorch": false,
            "istorchcompleted": true,
            "tooltipicon": [8],
            "tooltipsdesc": "UPS yang menggabungkan desain on-line konversi ganda dengan waktu transfer nol dan kontrol modular dual-CPU, memberikan perlindungan unggul terhadap kelebihan beban dan kerusakan. Dengan fitur pencatatan log, diagnosis mandiri, dan kemampuan untuk koneksi paralel, UPS ini menawarkan keandalan tinggi dan fleksibilitas sistem yang luar biasa.",
            "xPos": 28,
            "yPos": 80,
            "xPosInner": 86,
            "yPosInner": 80,
            "completed": true,
            "path": "assets/img/map/pathroad-5.svg",
            "xPath":"-430",
            "yPath":"50",
            "xPathInner":"-480",
            "yPathInner":"60",
        },
        {
            "month": "ELJE ELS SERIES 1kVA-20kVA",
            "date": "",
            "event": "UPS yang menggunakan desain konversi ganda online, penguncian fase, dan regulasi voltase. Dilengkapi dengan fungsi cold start baterai dan rentang input yang luas, UPS ini menghindari perpindahan ke mode baterai secara sering. Teknologi pengisian canggih memperpanjang umur baterai, sementara transformator isolasi bawaan memberikan perlindungan anti-interferensi yang kuat. Fitur tambahan termasuk diagnosis mandiri sebelum start-up, berbagai perlindungan, saklar bypass elektronik, fungsi DC Start, dan manajemen jaringan yang mudah digunakan.",
            "location": "Double conversion on-line design, which makes the output a pure sine wave source with tracking frequency, phase-lock and voltage regulation, and low distortion, Battery cold start function, Wide input range up to: 165~275Vac, avoid frequently switching to battery mode, Advanced floating switching and charging technology, saves the charging time and extends the battery life.",
            "region": "Built-in isolation transformer, strong anti-interference ability, provides more comprehensive protection, Self-diagnosis function before start-up, avoid the risks that the failure may lead to, The multi-protections, such as overload, short-circuit, over-temperature, battery under voltage, battery over-charge and so on, Built-in static electronic bypass switch, when UPS fails, DC Start function, User-friendly network management.",
            "istorch": true,
            "istorchcompleted": false,
            "tooltipicon": [5],
            "tooltipsdesc": "UPS yang menggunakan desain konversi ganda online, penguncian fase, dan regulasi voltase. Dilengkapi dengan fungsi cold start baterai dan rentang input yang luas, UPS ini menghindari perpindahan ke mode baterai secara sering. Teknologi pengisian canggih memperpanjang umur baterai, sementara transformator isolasi bawaan memberikan perlindungan anti-interferensi yang kuat. Fitur tambahan termasuk diagnosis mandiri sebelum start-up, berbagai perlindungan, saklar bypass elektronik, fungsi DC Start, dan manajemen jaringan yang mudah digunakan.",
            "xPos": 85,
            "yPos": 20,
            "xPosInner": 80,
            "yPosInner": 20,
            "completed": true,
            "path": "assets/img/map/pathroad-6.svg",
            "xPath":"-210",
            "yPath":"90",
            "xPathInner":"-240",
            "yPathInner":"90",
        },
        {
            "month": "ELJE MIKRO SERIES",
            "date": "",
            "event": "UPS ini dirancang khusus untuk Personal Computer dengan multi-fungsi. Bobotnya yang ringan dan desainnya yang ringkas sangat cocok untuk pekerjaan terbatas lingkungan.Jalur UPS dilengkapi dengan satu boost dan satu buck AVR untuk menstabilkan rentang tegangan input. Ini juga terintegrasi dengan fungsi start DC. Fungsi ini memungkinkan UPS dihidupkan tanpa pasokan listrik AC.",
            "location": "Line Interactive UPS with simulated sinewave output, Excellent microprocessor control guarantees high reliability (Internal self-diagnostic technology), Boost and buck AVR for voltage stabilization (One boost and one buck control), Auto restart while AC is recovering.",
            "region": "Cold start function, Off-mode charging, Fast intelligent battery recharge function, Offering LED and LCD panels for selections, Optional Generator compatible, Optional USB/RS232 communication port and RJ11/RJ45 protection.",
            "istorch": true,
            "istorchcompleted": false,
            "tooltipicon": [10],
            "tooltipsdesc": "UPS ini dirancang khusus untuk Personal Computer dengan multi-fungsi. Bobotnya yang ringan dan desainnya yang ringkas sangat cocok untuk pekerjaan terbatas lingkungan.Jalur UPS dilengkapi dengan satu boost dan satu buck AVR untuk menstabilkan rentang tegangan input. Ini juga terintegrasi dengan fungsi start DC. Fungsi ini memungkinkan UPS dihidupkan tanpa pasokan listrik AC.",
            "xPos": 82,
            "yPos": 16,
            "xPosInner": 75,
            "yPosInner": 16,
            "completed": true,
            "path": "assets/img/map/pathroad-7.svg",
            "xPath":"170",
            "yPath":"0",
            "xPathInner":"150",
            "yPathInner":"0",
        },
        // {
        //     "month": "June",
        //     "date": "19",
        //     "event": "BAKIP Qurban Perdana",
        //     "location": "Tongod",
        //     "region": "Sabah & Sarawak",
        //     "istorch": false,
        //     "istorchcompleted": false,
        //     "tooltipicon": [19],
        //     "tooltipsdesc": "BAKIP Qurban Perdana",
        //     "xPos": 87,
        //     "yPos": 29,
        //     "xPosInner": 85,
        //     "yPosInner": 29,
        //     "completed": false,
        //     "path": "",
        //     "xPath":"0",
        //     "yPath":"0",
        //     "xPathInner":"0",
        //     "yPathInner":"0",
        // },
        {
            "month": "ELJE ELPRO Series 1kVA-3kVA",
            "date": "",
            "event": "High Power density. Online double conversion with full digital control. Wide input voltage range: 110~300Vac. Input power factor 0.99 with PFC. Smart charger design for optimized battery performance. Maximum charging current can be expanded to 12 A (long run unit). Multiple protection function. Multiple communication interface. Emergency power off function (EPO). ECO mode operation for energy saving. Generator compatible. Cold start. Intelligent fan speed regulation. Versatile LCD human-computer interface.",
            "location": "High Power density, Online double conversion with full digital control, Wide input voltage range: 110~300Vac, Input power factor 0.99 with PFC, Smart charger design for optimized battery performance, Maximum charging current can be expanded to 12 A (long run unit), Multiple protection function, Multiple communication interface.",
            "region": "Emergency power off function (EPO), ECO mode operation for energy saving, Generator compatible, Cold start, Intelligent fan speed regulation, Versatile LCD human-computer interface.",
            "istorch": true,
            "istorchcompleted": false,
            "tooltipicon": [19],
            "tooltipsdesc": "High Power density. Online double conversion with full digital control. Wide input voltage range: 110~300Vac. Input power factor 0.99 with PFC. Smart charger design for optimized battery performance. Maximum charging current can be expanded to 12 A (long run unit). Multiple protection function. Multiple communication interface. Emergency power off function (EPO). ECO mode operation for energy saving. Generator compatible. Cold start. Intelligent fan speed regulation. Versatile LCD human-computer interface.",
            "xPos": 85,
            "yPos": 29,
            "xPosInner": 79,
            "yPosInner": 28,
            "completed": true,
            "path": "assets/img/map/pathroad-8.svg",
            "xPath":"0",
            "yPath":"80",
            "xPathInner":"-40",
            "yPathInner":"80",
        },
        {
            "month": "ELJE ELPRO Series 6kVA-10kVA",
            "date": "",
            "event": "UPS outdoor untuk jaringan komunikasi marginal, dirancang khusus untuk sistem komunikasi nirkabel pada stasiun basis mikro seluler outdoor. Sistem ini merupakan UPS online terintegrasi berkinerja tinggi yang sangat cocok untuk penggunaan di luar ruangan, menawarkan teknologi mutakhir dan kepraktisan yang sangat tinggi.",
            "location": "High Power density, Online double conversion with full digital control, Wide input voltage range: 110~300Vac, Input power factor 0.99 with PFC, Smart charger design for optimized battery performance, Maximum charging current can be expanded to 12 A (long run unit), Multiple protection function, Multiple communication interface.",
            "region": "Emergency power off function (EPO), ECO mode operation for energy saving, Generator compatible, Cold start, Intelligent fan speed regulation, Versatile LCD human-computer interface.",
            "istorch": false,
            "istorchcompleted": true,
            "tooltipicon": [7,17],
            "tooltipsdesc": "UPS outdoor untuk jaringan komunikasi marginal, dirancang khusus untuk sistem komunikasi nirkabel pada stasiun basis mikro seluler outdoor. Sistem ini merupakan UPS online terintegrasi berkinerja tinggi yang sangat cocok untuk penggunaan di luar ruangan, menawarkan teknologi mutakhir dan kepraktisan yang sangat tinggi.",
            "xPos": 23.5,
            "yPos": 88,
            "xPosInner": 65,
            "yPosInner": 92,
            "completed": true,
            "path": "assets/img/map/pathroad-9.svg",
            "xPath":"80",
            "yPath":"90",
            "xPathInner":"80",
            "yPathInner":"150",
        },
        {
            "month": "ELJE SE Series 10-40KVA",
            "date": "",
            "event": "Produk ini adalah UPS dengan densitas daya tinggi yang mendukung redundansi paralel N+X hingga 4 unit, serta menggunakan konversi ganda secara online dengan kontrol DSP. Produk ini memiliki rentang tegangan input yang luas (208-478V AC) dan rentang frekuensi input yang lebar (40-70Hz). Dengan arus pengisian maksimum hingga 20A dan kemampuan untuk menerima dua sumber input (opsional untuk unit standar), produk ini dioptimalkan untuk kelompok baterai yang lebih efisien. Fitur perlindungan yang lengkap, berbagai antarmuka komunikasi, dan kompatibilitas dengan generator meningkatkan keandalannya. Mode ECO untuk penghematan energi, self-testing saat startup, cold start, regulasi kecepatan kipas yang cerdas, dan kemampuan output untuk memenuhi beban tidak seimbang hingga 100% menjadikan produk ini sangat fleksibel dan andal.",
            "location": "High Power density, N+X parallel redundancy, support maximum 4 units in parallel, Online double conversion with DSP control, Wide input voltage range: 208~478Vac, Wide input frequency range: 40~70Hz, Optimization battery group, Maximum charging current up to 20A, Dual input source (optional for standard unit), Multiple protection function, Multiple communication interface.",
            "region": "Generator compatible, ECO mode operation for energy saving, Self-testing when UPS startup,Cold start, Intelligent fan speed regulation, The output can meet 100% unbalanced load.",
            "istorch": true,
            "istorchcompleted": false,
            "tooltipicon": [19],
            "tooltipsdesc": "Produk ini adalah UPS dengan densitas daya tinggi yang mendukung redundansi paralel N+X hingga 4 unit, serta menggunakan konversi ganda secara online dengan kontrol DSP. Produk ini memiliki rentang tegangan input yang luas (208-478V AC) dan rentang frekuensi input yang lebar (40-70Hz). Dengan arus pengisian maksimum hingga 20A dan kemampuan untuk menerima dua sumber input (opsional untuk unit standar), produk ini dioptimalkan untuk kelompok baterai yang lebih efisien. Fitur perlindungan yang lengkap, berbagai antarmuka komunikasi, dan kompatibilitas dengan generator meningkatkan keandalannya. Mode ECO untuk penghematan energi, self-testing saat startup, cold start, regulasi kecepatan kipas yang cerdas, dan kemampuan output untuk memenuhi beban tidak seimbang hingga 100% menjadikan produk ini sangat fleksibel dan andal.",
            "xPos": 80,
            "yPos": 23,
            "xPosInner": 70,
            "yPosInner": 22,
            "completed": true,
            "path": "assets/img/map/pathroad-10.svg",
            "xPath":"180",
            "yPath":"-90",
            "xPathInner":"190",
            "yPathInner":"-90",
        },
        {
            "month": "ELJE SE Series 50-200KVA",
            "date": "",
            "event": "UPS outdoor untuk jaringan komunikasi marginal, dirancang khusus untuk sistem komunikasi nirkabel pada stasiun basis mikro seluler outdoor. Sistem ini merupakan UPS online terintegrasi berkinerja tinggi yang sangat cocok untuk penggunaan di luar ruangan, menawarkan teknologi mutakhir dan kepraktisan yang sangat tinggi.",
            "location": "High reliability design, High input power factor, it can be up to 0.99, Support parallel expanded operation: maximum is 6 units, Support sharing batteries for the UPS in parallel, Large charging current can meet the requirement of long time backup.",
            "region": "High adaptability for load, it can connect full inductive load or capacitive load, Power walk in function, it can reduce the start current impact to system, and it can reduce the capacity of generator, LBS function can realize 2 independent UPS system work in synchronization, and it enhances the reliability of the system.",
            "istorch": false,
            "istorchcompleted": true,
            "tooltipicon": [11],
            "tooltipsdesc": "UPS outdoor untuk jaringan komunikasi marginal, dirancang khusus untuk sistem komunikasi nirkabel pada stasiun basis mikro seluler outdoor. Sistem ini merupakan UPS online terintegrasi berkinerja tinggi yang sangat cocok untuk penggunaan di luar ruangan, menawarkan teknologi mutakhir dan kepraktisan yang sangat tinggi.",
            "xPos": 29,
            "yPos": 87,
            "xPosInner": 91,
            "yPosInner": 88,
            "completed": true,
            "path": "assets/img/map/pathroad-11.svg",
            "xPath":"-270",
            "yPath":"49",
            "xPathInner":"-300",
            "yPathInner":"-3",
        },
    ]
    },
    
  ];
  
  var data = torchData[0].children;
  var regions = {};
  data.forEach(function(item) {
    if (!regions[item.region]) {
      regions[item.region] = [];
    }
    regions[item.region].push(item);
  });
  let location = 'all';

  // function generateMapTable() {
  //   // var data = torchData[0].children;
  //   // var regions = {};

  //   // data.forEach(function(item) {
  //   //   if (!regions[item.region]) {
  //   //     regions[item.region] = [];
  //   //   }
  //   //   regions[item.region].push(item);
  //   // });

  //   // console.log('regions: ', regions);

  //   // ALL
  //   var $table = $('<table>').attr('border', '0');
  //   // var name = torchData[0].name.toLowerCase();
  //   // console.log('data: ', data, name, location);

  //   var $thead = $('<thead>').appendTo($table);
  //   $thead.append('<tr><th>Date</th><th>Event</th><th>Location</th><th>Region</th><th>Icon</th><th>Indicator</th></tr>');

  //   var $tbody = $('<tbody>').appendTo($table);

  //   var monthsToShow = ["Apr", "May", "June"];
  //   var shownMonths = {}; // Track shown months

  //   $.each(data, function(index, item) {
  //     let newMonth = item.month.toLowerCase();
  //     let newRegion = item.region.replace(/\s+/g, '-').toLowerCase();
  //     // let newLocation02 = newLocation.replace(/\./g, '');
  //     var istorch = item.istorch ? 'istorch' : 'notorch';
  //     var istorchcompleted = item.istorchcompleted ? 'istorchcompleted' : 'notorchcompleted';

  //     let date = item.date;

  //     // // console.log('index: ', index);sq
  //     var $row = $('<tr data-link="'+location+newMonth+index+'">').appendTo($tbody);
      
  //     if (monthsToShow.includes(item.month)) 
  //     // if (item.month == "Apr" || item.month == "May" || item.month == "June")
  //     {
  //       if(date == 'TBC') 
  //       {
  //         // $row.append('<td><div class="">'+item.date+'</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
  //         $row.append('<td><div class="">Coming Soon</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
  //       } 
  //       else 
  //       {
  //         $row.append('<td><div class="">'+item.month+' '+item.date+'</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
  //       }
  //       $row.append('<td><div class="">'+item.event+'</div><div class="p50cS1TableMobile"><p>'+item.location+'</p><p>'+item.region+'</p></div></td>');
  //       $row.append('<td><div class="">'+item.location+'</div></td>');
  //       $row.append('<td><div class="">'+item.region+'</div></td>');

  //       const $td = $('<td>');
  //       const $projectinner = $('<div>').addClass('p50cS1ContentTableIcon');
  //       // $row.append('<td><div class=""></div></td>');
  //       item.tooltipicon.forEach(iconNumber => {
  //           const iconPath = mapIcon[iconNumber];
  //           const $img = $('<img>', { src: iconPath, alt:'' });
  //           $projectinner.append($img);
  //       });
  //       $td.append($projectinner);
  //       $row.append($td);

  //       $row.append('<td><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></td>');

  //     }
  //     else
  //     {
  //       if (!shownMonths[item.month]) {
  //         $row.append('<td><div class="">'+item.month+'</div><div class="p50cS1TableMobile"></div></td>');
  //         $row.append('<td colspan="5"><div class="">Coming Soon</div></td>');
  //         shownMonths[item.month] = true; // Mark month as shown
  //       }
  //     }

  //     // console.log(comingSoonShown);
  //   });

  //   $('.p50cS1ContentTable .all').empty().append($table);

  //   var monthsToShow = ["Apr", "May", "June"];
  //   var shownMonths = {}; // Track shown months
  //   // Other Regions
  //   $.each(regions, function(region, items) {
  //     // console.log
  //     var $table02 = $('<table>').attr('border', '0'); // Create table and add border
  //     $table02.append('<thead><tr><th>Date</th><th>Event</th><th>Location</th><th>Region</th><th>Icon</th><th>Indicator</th></tr></thead>');
  //     var $tbody = $('<tbody>').appendTo($table02);

  //     // console.log('region: ', region, items);

  //     // Populate the table with data for this region
  //     items.forEach(function(item, index) {
  //       let newMonth = item.month.toLowerCase();
  //       let newRegion = item.region.replace(/\s+/g, '-').toLowerCase();
  //       var istorch = item.istorch ? 'istorch' : 'notorch';
  //       var istorchcompleted = item.istorchcompleted ? 'istorchcompleted' : 'notorchcompleted';

  //       let date = item.date;
  //       // // console.log('index: ', index);
  //       var $row = $('<tr data-link="'+newRegion+newMonth+index+'">').appendTo($tbody);
  //       // if (item.month == "Apr" || item.month == "May" || item.month == "June")
  //       if (monthsToShow.includes(item.month)) 
  //       {
  //         if(date == 'TBC') {
  //           // $row.append('<td><div class="">'+item.date+'</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
  //           $row.append('<td><div class="">Coming Soon</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
  //         } else {
  //           $row.append('<td><div class="">'+item.month+' '+item.date+'</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
  //         }
          
  //         $row.append('<td><div class="">'+item.event+'</div><div class="p50cS1TableMobile"><p>'+item.location+'</p><p>'+item.region+'</p></div></td>');
  //         $row.append('<td><div class="">'+item.location+'</div></td>');
  //         $row.append('<td><div class="">'+item.region+'</div></td>');
  //         const $td = $('<td>');
  //         const $projectinner = $('<div>').addClass('p50cS1ContentTableIcon');
  //         item.tooltipicon.forEach(iconNumber => {
  //             const iconPath = mapIcon[iconNumber];
  //             const $img = $('<img>', { src: iconPath, alt:'' });
  //             $projectinner.append($img);
  //         });
  //         $td.append($projectinner);
  //         $row.append($td);

  //         $row.append('<td><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></td>');

  //       }
  //       else
  //       {
  //         if (!shownMonths[item.month]) {
  //           $row.append('<td><div class="">'+item.month+'</div><div class="p50cS1TableMobile"></div></td>');
  //           $row.append('<td colspan="5"><div class="">Coming Soon</div></td>');
  //           shownMonths[item.month] = true; // Mark month as shown
  //         }
  //       }
  //     });

  //     if(region == "Sabah & Sarawak"){
  //       $('.p50cS1ContentTable .torch1').empty().append($table02);
  //     } else if(region == "Southern & East Coast"){
  //       $('.p50cS1ContentTable .torch2').empty().append($table02);
  //     } else if(region == "Northern & Central"){
  //       $('.p50cS1ContentTable .torch3').empty().append($table02);
  //     } else {
  //       // console.log('no more')
  //     }
  //   });
    
  // }

  function generateMapTable() {
    var $table = $('<table>').attr('border', '0');
    var $thead = $('<thead>').appendTo($table);
    $thead.append('<tr><th>Product</th><th>Description</th><th>Function</th><th>Technology</th><th></th><th></th></tr>');

    var $tbody = $('<tbody>').appendTo($table);
    var shownMonths = {}; // Reset shownMonths for each region
    
    var monthsToShow = ["ELJE EL POWER SERIES 10-800kVA", "ELJE EL POWER SE-T SERIES 10-800kVA", "ELX SERIES 1-10kVA", "ELJE JE-R 1-3kVA SERIES", "ELJE JE-R 6-10kVA SERIES", "ELJE JE-R SERIES", "ELJE ELS 31 SERIES", "ELJE ELS SERIES 1kVA-20kVA", "ELJE MIKRO SERIES", "ELJE ELPRO Series 1kVA-3kVA", "ELJE ELPRO Series 6kVA-10kVA", "ELJE SE Series 10-40KVA", "ELJE SE Series 50-200KVA"  ];

    $.each(data, function(index, item) {
        let newMonth = item.month.toLowerCase();
        let newRegion = item.region.replace(/\s+/g, '-').toLowerCase();
        var istorch = item.istorch ? 'istorch' : 'notorch';
        var istorchcompleted = item.istorchcompleted ? 'istorchcompleted' : 'notorchcompleted';
        var iscompleted = item.completed ? 'opacity:0.6;' : 'opacity:1;';
        let date = item.date;

        var $row = $('<tr data-link="'+location+newMonth+index+'" style="'+iscompleted+'">').appendTo($tbody);
        
        if (monthsToShow.includes(item.month)) {
          if (item.date != "TBC") {
            // if(date == 'TBC') {
            //     $row.append('<td><div class="">Coming Soon</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
            // } else {
            //     $row.append('<td><div class="">'+item.month+' '+item.date+'</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
            // }
            $row.append('<td><div class="">'+item.month+' '+item.date+'</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
            $row.append('<td><div class="">'+item.event+'</div><div class="p50cS1TableMobile"><p>'+item.location+'</p><p>'+item.region+'</p></div></td>');
            $row.append('<td><div class="">'+item.location+'</div></td>');
            $row.append('<td><div class="">'+item.region+'</div></td>');

            const $td = $('<td>');
            const $projectinner = $('<div>').addClass('p50cS1ContentTableIcon');
            item.tooltipicon.forEach(iconNumber => {
                const iconPath = mapIcon[iconNumber];
                const $img = $('<img>', { src: iconPath, alt:'' });
                $projectinner.append($img);
            });
            $td.append($projectinner);
            $row.append($td);

            $row.append('<td><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></td>');
          }
        }
        else 
        {
          if (!shownMonths[item.month]) 
          {
              $row.append('<td><div class="">'+item.month+'</div><div class="p50cS1TableMobile"></div></td>');
              $row.append('<td colspan="5"><div class="">Coming Soon</div></td>');
              shownMonths[item.month] = true;
          }
        }
    });

    $('.p50cS1ContentTable .all').empty().append($table);

    $.each(regions, function(region, items) {
        var $table02 = $('<table>').attr('border', '0');
        $table02.append('<thead><tr><th>Date</th><th>Event</th><th>Location</th><th>Region</th><th>Icon</th><th>Indicator</th></tr></thead>');
        var $tbody = $('<tbody>').appendTo($table02);

        var shownMonths = {}; // Reset shownMonths for each region

        items.forEach(function(item, index) {
            let newMonth = item.month.toLowerCase();
            let newRegion = item.region.replace(/\s+/g, '-').toLowerCase();
            var istorch = item.istorch ? 'istorch' : 'notorch';
            var istorchcompleted = item.istorchcompleted ? 'istorchcompleted' : 'notorchcompleted';
            var iscompleted = item.completed ? 'opacity:0.6;' : 'opacity:1;';
            let date = item.date;
            var $row = $('<tr data-link="'+newRegion+newMonth+index+'" style="'+iscompleted+'">').appendTo($tbody);

            if (monthsToShow.includes(item.month)) {
              if (item.date != "TBC") {
                // if(date == 'TBC') {
                //     $row.append('<td><div class="">Coming Soon</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
                // } else {
                //     $row.append('<td><div class="">'+item.month+' '+item.date+'</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
                // }
                $row.append('<td><div class="">'+item.month+' '+item.date+'</div><div class="p50cS1TableMobile"><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></div></td>');
                $row.append('<td><div class="">'+item.event+'</div><div class="p50cS1TableMobile"><p>'+item.location+'</p><p>'+item.region+'</p></div></td>');
                $row.append('<td><div class="">'+item.location+'</div></td>');
                $row.append('<td><div class="">'+item.region+'</div></td>');
                const $td = $('<td>');
                const $projectinner = $('<div>').addClass('p50cS1ContentTableIcon');
                item.tooltipicon.forEach(iconNumber => {
                    const iconPath = mapIcon[iconNumber];
                    const $img = $('<img>', { src: iconPath, alt:'' });
                    $projectinner.append($img);
                });
                $td.append($projectinner);
                $row.append($td);

                $row.append('<td><div class=" '+istorch+' '+istorchcompleted+'"><i class="'+newMonth+'"></i></div></td>');
              }

            } else {
                if (!shownMonths[item.month]) {
                    $row.append('<td><div class="">'+item.month+'</div><div class="p50cS1TableMobile"></div></td>');
                    $row.append('<td colspan="5"><div class="">Coming Soon</div></td>');
                    shownMonths[item.month] = true;
                }
            }
        });

        if(region == "Sabah & Sarawak") {
          $('.p50cS1ContentTable .torch1').empty().append($table02);
      } else if(region == "Southern & East Coast") {
          $('.p50cS1ContentTable .torch2').empty().append($table02);
      } else if(region == "Northern & Central") {
          $('.p50cS1ContentTable .torch3').empty().append($table02);;
        }
    });
}

  generateMapTable();

  function generateMarker() {
    // var data = torchData[0].children;
    var container = $('.p50cS1ContentMapInner.all .p50cS1ContentMapContent');
    var containerM = $('.p50cS1ContentMapInner.all .p50cS1ContentMapContentMobile');
    // var name = torchData[0].name.toLowerCase();

    // ALL
    $.each(data, function(index, item) {
      let newMonth = item.month.toLowerCase();
      let newRegion = item.region.replace(/\s+/g, '-').toLowerCase();
      // let newLocation02 = newLocation.replace(/\./g, '');

      let date = item.date;

      var torchClass = item.month + ' ' + (item.istorch ? 'istorch' : 'notorch') + ' ' + (item.istorchcompleted ? 'istorchcompleted' : 'notorchcompleted');
      var istorch = item.istorch ? 'istorch' : 'notorch';
      var istorchcompleted = item.istorchcompleted ? 'istorchcompleted' : 'notorchcompleted';
      var iscompleted = item.completed ? 'opacity:0.6;' : 'opacity:1;';

      var xPos = item.xPos + '%';
      var yPos = item.yPos + '%';
      
      if ((item.month == "Apr" || item.month == "May" || item.month == "June" || item.month == "July" || item.month == "Aug" || item.month == "Sep" || item.month == "Oct") && (item.date != 'TBC')) 
      {
        var $itemDiv = $('<div data-link="'+location+newMonth+index+'" style="left: '+xPos+'; top: '+yPos+'; " class="'+newMonth+' '+istorch+' '+istorchcompleted+'">', {
            'class': torchClass,
            'style': 'position: absolute; left: ' + item.xPos + '%; top: ' + item.yPos + '%;' // Adjusting position based on item properties
        }).appendTo(container);
      }
      
      // else
      // {
      //   var $itemDiv = $('<div data-link="'+location+newMonth+index+'" style="left: '+xPos+'; top: '+yPos+'; display:none;" class="'+newMonth+' '+istorch+' '+istorchcompleted+'">', {
      //       'class': torchClass,
      //       'style': 'position: absolute; left: ' + item.xPos + '%; top: ' + item.yPos + '%;' // Adjusting position based on item properties
      //   }).appendTo(container);
      // }

      var $icon = $('<i>', { 'class': 'torchIcon', 'style': iscompleted }).appendTo($itemDiv);
      
      var $icon = $('<span>', { 'class': 'markerIcon' }).appendTo($itemDiv);

      var $tooltips = $('<div>', { 'class': 'torchTooltips' }).appendTo($itemDiv);
      var $tooltipsinner = $('<div>', { 'class': 'torchTooltipsInner' }).appendTo($tooltips);

      // if(date == 'TBC'){
      //   var $tooltipsDate = $('<div>', { 'class': 'torchTooltipsDate' }).appendTo($tooltipsinner);
      //   $tooltipsDate.append('<p class="tbc">' + item.date + '</p>');
      // } else {
      //   var $tooltipsDate = $('<div>', { 'class': 'torchTooltipsDate' }).appendTo($tooltipsinner);
      //   $tooltipsDate.append('<p>' + item.month + '</p><p>' + item.date + '</p>');
      // }

      if(date !== 'TBC'){
        var $tooltipsDate = $('<div>', { 'class': 'torchTooltipsDate' }).appendTo($tooltipsinner);
        $tooltipsDate.append('<p>' + item.month + '</p><p>' + item.date + '</p>');
      }

      if(date == 'TBC'){
        var $tooltipsIcon = $('<div>', { 'class': 'torchTooltipsIcon' }).appendTo($tooltipsinner);
        item.tooltipicon.forEach(iconNumber => {
          const iconPath = mapIcon[iconNumber];
          const $img = $('<img>', { src: iconPath, alt:'' });
          $tooltipsIcon.append($img);
        });
      }

      if(item.path)
      {
        var xPosPath = item.xPath + '%';
        var yPosPath = item.yPath + '%';

        var $roadpath = $('<div>', { 'class': 'p50cS1ContentMapPath', style: 'left: '+xPosPath+'; bottom: '+yPosPath }).appendTo($itemDiv);
        var $img = $('<img>', { src: item.path, alt:'' });
        $roadpath.append($img);
      }

      var $tooltipsTxt = $('<div>', { 'class': 'torchTooltipsTxt' }).appendTo($tooltipsinner);
      $tooltipsTxt.append('<h5>' + item.location + '</h5><p>' + item.tooltipsdesc + '</p>');
    });

    container.clone().prependTo(containerM);

    // Other Regions
    $.each(regions, function(region, items) {
      if(region == "Sabah & Sarawak"){
        var container02 = $('.p50cS1ContentMapInner.torch1 .p50cS1ContentMapContent');
        var container02M = $('.p50cS1ContentMapInner.torch1 .p50cS1ContentMapContentMobile');
      } else if(region == "Southern & East Coast"){
        var container02 = $('.p50cS1ContentMapInner.torch2 .p50cS1ContentMapContent');
        var container02M = $('.p50cS1ContentMapInner.torch2 .p50cS1ContentMapContentMobile');
      } else if(region == "Northern & Central"){
        var container02 = $('.p50cS1ContentMapInner.torch3 .p50cS1ContentMapContent');
        var container02M = $('.p50cS1ContentMapInner.torch3 .p50cS1ContentMapContentMobile');
      } else {
        // console.log('no more')
      }
      items.forEach(function(item, index) {
        let newMonth = item.month.toLowerCase();
        let newRegion = item.region.replace(/\s+/g, '-').toLowerCase();

        let date = item.date;

        var torchClass = item.month + ' ' + (item.istorch ? 'istorch' : 'notorch') + ' ' + (item.istorchcompleted ? 'istorchcompleted' : 'notorchcompleted');
        var istorch = item.istorch ? 'istorch' : 'notorch';
        var istorchcompleted = item.istorchcompleted ? 'istorchcompleted' : 'notorchcompleted';
        var iscompleted = item.completed ? 'opacity:0.6;' : 'opacity:1;';

        var xPos = item.xPosInner + '%';
        var yPos = item.yPosInner + '%';

        if ((item.month == "Apr" || item.month == "May" || item.month == "June" || item.month == "July" || item.month == "Aug" || item.month == "Sep" || item.month == "Oct") && (item.date != 'TBC')) 
        {
          var $itemDiv = $('<div data-link="'+newRegion+newMonth+index+'" style="left: '+xPos+'; top: '+yPos+'" class="'+newMonth+' '+istorch+' '+istorchcompleted+'">', {
              'class': torchClass,
              'style': 'position: absolute; left: ' + item.xPosInner + '%; top: ' + item.yPosInner + '%;' // Adjusting position based on item properties
          }).appendTo(container02);
        }

        
        var $icon = $('<i>', { 'class': 'torchIcon', 'style': iscompleted }).appendTo($itemDiv);
        
        // var $icon = $('<i>', { 'class': 'torchIcon' }).appendTo($itemDiv);
        var $icon = $('<span>', { 'class': 'markerIcon' }).appendTo($itemDiv);

        var $tooltips = $('<div>', { 'class': 'torchTooltips' }).appendTo($itemDiv);
        var $tooltipsinner = $('<div>', { 'class': 'torchTooltipsInner' }).appendTo($tooltips);

        if(date == 'TBC'){
          var $tooltipsDate = $('<div>', { 'class': 'torchTooltipsDate' }).appendTo($tooltipsinner);
          $tooltipsDate.append('<p class="tbc">' + item.date + '</p>');
        } else {
          var $tooltipsDate = $('<div>', { 'class': 'torchTooltipsDate' }).appendTo($tooltipsinner);
          $tooltipsDate.append('<p>' + item.month + '</p><p>' + item.date + '</p>');
        }

        if(date == 'TBC'){
          var $tooltipsIcon = $('<div>', { 'class': 'torchTooltipsIcon' }).appendTo($tooltipsinner);
          item.tooltipicon.forEach(iconNumber => {
            const iconPath = mapIcon[iconNumber];
            const $img = $('<img>', { src: iconPath, alt:'' });
            $tooltipsIcon.append($img);
          });
        }

        if(item.path)
        {
          var xPosPath = item.xPathInner + '%';
          var yPosPath = item.yPathInner + '%';

          var $roadpath = $('<div>', { 'class': 'p50cS1ContentMapPath', style: 'left: '+xPosPath+'; bottom: '+yPosPath }).appendTo($itemDiv);
          var $img = $('<img>', { src: item.path, alt:'' });
          $roadpath.append($img);
        }

        var $tooltipsTxt = $('<div>', { 'class': 'torchTooltipsTxt' }).appendTo($tooltipsinner);
        $tooltipsTxt.append('<h5>' + item.location + '</h5><p>' + item.tooltipsdesc + '</p>');
      });
      container02.clone().prependTo(container02M);
    });
  }
  generateMarker();

  $(window).click(function() {
    $('.p50cS1ContentMapImg p').fadeIn(300);
    $('.p50cS1ContentMapContent > div').removeClass('active');
    $('.p50cS1ContentTableInner.all table tbody tr').removeClass('active');
    $('.p50cS1ContentMapContentMobile .p50cS1ContentMapContent > div').hide();
    // // console.log('CLICKED OUTSIDE!!!');

    $('.p50cS1ContentMapImg .p50cS1ContentMapContent > div').fadeIn(300);
    // $('.p50cS1ContentMapPath').fadeIn(300);
    // $('.p50cS1ContentMapPath').hide();
  });

  $('.p50cS1ContentTableInner table tbody tr').each(function(e){
    $(this).click(function(e){
      e.preventDefault();
      e.stopPropagation();
      // // console.log($(this).data('link'));

      // $('.p50cS1ContentTableInner.all table tbody tr').removeClass('active');
      // $(this).addClass('active');

      // $('.p50cS1ContentMapContent > div').removeClass('active');
      // $('.p50cS1ContentMapContent > div[data-link="'+$(this).data('link')+'"]').addClass('active');
      $('.p50cS1ContentMapImg .p50cS1ContentMapContent > div[data-link="'+$(this).data('link')+'"]').click();
      $('.p50cS1ContentMapContentMobile .p50cS1ContentMapContent > div').hide();
      $('.p50cS1ContentMapContentMobile .p50cS1ContentMapContent > div[data-link="'+$(this).data('link')+'"]').show();


      $('.p50cS1ContentMapImg > p').fadeOut(300);
      $('html, body').animate({
          scrollTop: $('.p50cS1ContentMap').offset().top - 100
      }, 500);
    })
  })

  $('.p50cS1ContentMapInner .p50cS1ContentMapImg .p50cS1ContentMapContent > div').each(function(e){
    $(this).click(function(e){
      e.preventDefault();
      e.stopPropagation();
      // // console.log($(this).data('link'));

      let mapContainerW = $('.p50cS1ContentMap').width();
      let tooltipWidth = $(this).children('.torchTooltips').outerWidth();
      let markerX = $(this).position().left;
      let markerX2 = mapContainerW - markerX;
      let spacing = 40;
      let tooltipX = markerX + spacing + tooltipWidth;
      let tooltipX2 = markerX2 + spacing + tooltipWidth;

      // console.log(mapContainerW, tooltipWidth, markerX, markerX2, tooltipX, tooltipX2);
      if(tooltipX <= mapContainerW){
        // console.log('within map x mobile');
        $(this).removeClass('outsideX2');
        if($(this).hasClass('outsideX')){
            $(this).removeClass('outsideX');
        }
      } else {
        // console.log('outside map x mobile right');
        $(this).addClass('outsideX');
      }

      if(tooltipX2 <= mapContainerW){
        // console.log('within map x mobile');
        $(this).removeClass('outsideX');
        if($(this).hasClass('outsideX2')){
            $(this).removeClass('outsideX2');
        }
      }
      else {
        // console.log('outside map x mobile left');
        $(this).addClass('outsideX2');
      }


      $('.p50cS1ContentMapInner .p50cS1ContentMapContent > div').removeClass('active');
      $(this).addClass('active');

      $('.p50cS1ContentTableInner table tbody tr').removeClass('active');
      $('.p50cS1ContentTableInner table tbody tr[data-link="'+$(this).data('link')+'"]').addClass('active');

      $('.p50cS1ContentMapImg > p').fadeOut(300);

      $('.p50cS1ContentMapContentMobile .p50cS1ContentMapContent > div').hide();
      $('.p50cS1ContentMapContentMobile .p50cS1ContentMapContent > div[data-link="'+$(this).data('link')+'"]').show();

      $('.p50cS1ContentMapImg .p50cS1ContentMapContent > div').hide();
      // $('.p50cS1ContentMapPath').hide();
      $(this).show();
    })
  })

  $('.p50cS1ContentTabsDesktop a').each(function(){
    $(this).click(function(){
      $('.p50cS1ContentTabsDesktop a').removeClass('active');
      $('.p50cS1ContentTable .p50cS1ContentTableInner').hide();
      $('.p50cS1ContentMap .p50cS1ContentMapInner').hide();
      $(this).addClass('active');
      // $('.p50cS1ContentTable .p50cS1ContentTableInner[data-tabs="'+$(this).data('target')+'"]').fadeIn(300);
      // $('.p50cS1ContentMap .p50cS1ContentMapInner[data-tabs="'+$(this).data('target')+'"]').fadeIn(300);
      $('.p50cS1ContentTable .p50cS1ContentTableInner[data-tabs="'+$(this).data('target')+'"]').show();
      $('.p50cS1ContentMap .p50cS1ContentMapInner[data-tabs="'+$(this).data('target')+'"]').show();
      $('.p50cS1ContentTabsMobile select').val($(this).data('target')).trigger('change');
    })
  })

  $('.p50cS1ContentTabsMobile select').on('change', function() {
    // $('.p50cS1ContentTabsDesktop a[data-target="'+$(this).val()+'"]').click();
    // console.log('Changed');

    $('.p50cS1ContentTabsDesktop a').removeClass('active');
    $('.p50cS1ContentTable .p50cS1ContentTableInner').hide();
    $('.p50cS1ContentMap .p50cS1ContentMapInner').hide();
    $('.p50cS1ContentTabsDesktop a[data-target="'+$(this).val()+'"]').addClass('active');
    
    $('.p50cS1ContentTable .p50cS1ContentTableInner[data-tabs="'+$(this).val()+'"]').show();
    $('.p50cS1ContentMap .p50cS1ContentMapInner[data-tabs="'+$(this).val()+'"]').show();

  });

  $('.p50bannerBtn a').click(function(e){
    e.preventDefault();
    var ID = $(this).attr('href');
    var IDyt = $(ID)
    // console.log(ID, IDyt);
    $(document).find( $(this).attr('href') ).fadeIn(300);
    $('body').addClass('noScrollbar');
    var tempTYurl = 'https://www.youtube.com/embed/' + $(this).data("yt") + '?enablejsapi=1&version=3&playerapiid=ytplayer&mute=0';
    // console.log('clicked!!', $(this).data("yt"), $(this).data("yt-img"), tempTYurl);
    $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe').attr('src',tempTYurl);
    $(ID).children('.JlightboxContainerInner').children().children().children().children('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  })



  $('.p50c8ContentList .p50c8ContentListRight .p50c8ContentListRightBtn a').click(function(e){
    e.preventDefault();
    // console.log($(this).attr('href'));
    $(document).find( $(this).attr('href') ).fadeIn(300);
    $('body').addClass('noScrollbar');
  })

  $('.JlightboxLeaderClose').click(function(e){
    e.preventDefault();
    $(this).parent().fadeOut(300);
    $('body').removeClass('noScrollbar');
  })

  $('.p50cMSGTitleInner a').click(function(e){
    e.preventDefault();
    $(document).find( $(this).attr('href') ).fadeIn(300);
    $('body').addClass('noScrollbar');
  })

  $('.p50cMSGBtnM a').click(function(e){
    e.preventDefault();
    $(document).find( $(this).attr('href') ).fadeIn(300);
    $('body').addClass('noScrollbar');
  })

  $('.JlightboxMSGallClose').click(function(e){
    e.preventDefault();
    $('.p50cMSGallPopup').fadeOut(300);
    $('body').removeClass('noScrollbar');
  })

  // message card
  function setMsgCardPosition() {
    var msgContainer = document.querySelector('.message-container');
    var msgCard1 = document.querySelector('.message-card1');
    var msgCard2 = document.querySelector('.message-card2');
    var msgCard3 = document.querySelector('.message-card3');
    var msgCard4 = document.querySelector('.message-card4');
    var msgCard5 = document.querySelector('.message-card5');

    var heightCard1 = msgCard1.offsetHeight;
    var heightCard3 = msgCard3.offsetHeight;

    var heightCard1_4 = msgCard1.offsetHeight + msgCard4.offsetHeight;
    var heightCard3_5 = msgCard3.offsetHeight + msgCard5.offsetHeight;

    if ($(window).width() > 1024) {

      msgCard4.style.top = `${heightCard1 + 20}px`; 
      msgCard5.style.top = `${heightCard3 + 20}px`; 

      if (heightCard1_4 > heightCard3_5){
        msgContainer.style.height = `${heightCard1_4 + 50}px`;
      }else{
        msgContainer.style.height = `${heightCard3_5 + 50}px`;
      }
  
    }
  }

  window.onload = setMsgCardPosition;
  window.onresize = setMsgCardPosition;
     

  $(".card-hover").hover(function () {
    $(".message-card").toggleClass("hover-active");
  });

});




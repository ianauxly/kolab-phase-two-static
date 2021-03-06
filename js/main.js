  // A $( document ).ready() block.
"use strict";

$( document ).ready(function() {

  $('.slick-carousel').slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='https://raw.githubusercontent.com/ianauxly/klpassets/master/arrow-left-transparent.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='https://raw.githubusercontent.com/ianauxly/klpassets/master/arrow-right-transparent.png'>"
  });

  // $.ajax({
  //     url: 'https://api.openweathermap.org/data/2.5/weather?q=Ottawa&APPID=dc4f7bfefdba56bf33f8c972ec927173',
  //     dataType: 'json',
  //     success: function(json) {
  //         // Rates are in `json.rates`
  //         // Base currency (USD) is `json.base`
  //         // UNIX Timestamp when rates were collected is in `json.timestamp`
  //
  //         rates = json.main;
  //         $temp = Math.floor(rates.temp - 273.15); // converts temp to celcius
  //         $('.temp').html($temp);
  //     }
  // });

var   $menuOverlay,
      $hamburgerNav,
      $search,
      $searchButton,
      $hamburger;

      $menuOverlay = $('#menu-overlay');
      $hamburgerNav = $('#hamburger-nav');
      $search = $('#search');
      $searchButton = $('#search-button');
      $hamburger = $('#hamburger');

      function menuOverlayHide() {
          $menuOverlay.addClass('hidden');
      }

      function menuOverlayShow() {
          $menuOverlay.removeClass('hidden');
      }

      function hamburgerNavHide() {
          $hamburgerNav.addClass('hidden');
      }

      function hamburgerNavShow() {
          $hamburgerNav.removeClass('hidden');
      }

      function searchHide() {
          $search.addClass('hidden');
      }

      function searchShow() {
          $search.removeClass('hidden');
      }

      function hamburgerToggleClosed() {
          $hamburger.toggleClass('closed');
      }

      function hamburgerRemoveClosed() {
          $hamburger.removeClass('closed');
      }

      function hamburgerToggleOpened() {
          $hamburger.toggleClass('opened');
      }

      function hamburgerRemoveOpened() {
          $hamburger.removeClass('opened');
      }

      function searchButtonToggleClosed() {
        $searchButton.toggleClass('closed');
      }

      function searchButtonRemoveClosed() {
        $searchButton.removeClass('closed');
      }

      function searchButtonToggleOpened() {
        $searchButton.toggleClass('opened');
      }

      function searchButtonRemoveOpened() {
        $searchButton.removeClass('opened');
      }

      function bodyLockScroll() {
        $('body').addClass('lock-scroll-mobile');
      }

      function bodyUnlockScroll() {
        $('body').removeClass('lock-scroll-mobile');
      }


      $hamburger.click(function() {
          if( $(this).hasClass('closed') ) {
              hamburgerRemoveClosed();
              hamburgerToggleOpened();
              hamburgerNavShow();
              searchHide();
              bodyLockScroll();

              if( $searchButton.hasClass('opened') ) {
                searchButtonToggleClosed();
                searchButtonRemoveOpened();
                searchHide();
                bodyUnlockScroll();
              }
          } else if ( $(this).hasClass('opened') ){
              hamburgerRemoveOpened();
              hamburgerToggleClosed();
              hamburgerNavHide();
              bodyUnlockScroll();
          } else {
            false
          }
      });

      $searchButton.click(function() {
          if( $(this).hasClass('closed') ) {
              searchButtonRemoveClosed();
              searchButtonToggleOpened();
              hamburgerNavHide();
              searchShow();
              bodyLockScroll();

              if( $hamburger.hasClass('opened') ) {
                hamburgerRemoveOpened();
                hamburgerToggleClosed();
                hamburgerNavHide();
                bodyLockScroll();
              }
          } else if ( $(this).hasClass('opened') ){
              searchButtonToggleClosed();
              searchButtonRemoveOpened();
              searchHide();
          } else {
            false
          }
      });

      // $(document).on("click", function(e){
      //       if(
      //         $(e.target).closest("#menu-overlay").length == 0 &&
      //         $("#menu-overlay").hasClass("flex") &&
      //         $(e.target).closest("#nav-hamburger").length == 0 &&
      //         $(e.target).closest("#merch-shop").length == 0 &&
      //         $(e.target).closest("#search-nav").length == 0
      //       ){
      //         menuHide();
      //         removeNavHamClose();
      //         hamburgerWrapHide();
      //         shopMenuHide();
      //         searchMenuHide();
      //       }
      // });

});

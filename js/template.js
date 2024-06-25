/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){
	$(document).ready(function(){
	
		$(".banner-image").backstretch('images/banner.jpg');
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};
// what i added start
		/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	(function($) {

		"use strict";
	
		/*---------------------------------------------------- */
		/* Preloader
		------------------------------------------------------ */ 
	   $(window).load(function() {
	
		  // will first fade out the loading animation 
			$("#loader").fadeOut("slow", function(){
	
			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(300).fadeOut("slow");
	
		  });       
	
		  })
	
	
		  /*---------------------------------------------------- */
		  /* FitText Settings
		  ------------------------------------------------------ */
		  setTimeout(function() {
	
		   $('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });
	
		  }, 100);
	
	
		/*---------------------------------------------------- */
		/* FitVids
		------------------------------------------------------ */ 
		  $(".fluid-video-wrapper").fitVids();
	
	
		/*---------------------------------------------------- */
		/* Owl Carousel
		------------------------------------------------------ */ 
		$("#owl-slider").owlCarousel({
			navigation: false,
			pagination: true,
			itemsCustom : [
				[0, 1],
				[700, 2],
				[960, 3]
			 ],
			navigationText: false
		});
	
	
		/*----------------------------------------------------- */
		/* Alert Boxes
		  ------------------------------------------------------- */
		$('.alert-box').on('click', '.close', function() {
		  $(this).parent().fadeOut(500);
		});	
	
	
		/*----------------------------------------------------- */
		/* Stat Counter
		  ------------------------------------------------------- */
	   var statSection = $("#stats"),
		   stats = $(".stat-count");
	
	   statSection.waypoint({
	
		   handler: function(direction) {
	
			  if (direction === "down") {       		
	
				   stats.each(function () {
					   var $this = $(this);
	
					   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
						   duration: 4000,
						   easing: 'swing',
						   step: function (curValue) {
							  $this.text(Math.ceil(curValue));
							}
						  });
					});
	
			   } 
	
			   // trigger once only
			   this.destroy();      	
	
			},
				
			offset: "90%"
		
		});	
	
	
		/*---------------------------------------------------- */
		/*	Masonry
		------------------------------------------------------ */
		var containerProjects = $('#folio-wrapper');
	
		containerProjects.imagesLoaded( function() {
	
			containerProjects.masonry( {		  
				  itemSelector: '.folio-item',
				  resize: true 
			});
	
		});
	
	
		/*----------------------------------------------------*/
		/*	Modal Popup
		------------------------------------------------------*/
	   $('.item-wrap a').magnificPopup({
	
		  type:'inline',
		  fixedContentPos: false,
		  removalDelay: 300,
		  showCloseBtn: false,
		  mainClass: 'mfp-fade'
	
	   });
	
	   $(document).on('click', '.popup-modal-dismiss', function (e) {
		   e.preventDefault();
		   $.magnificPopup.close();
	   });
	
		
		/*-----------------------------------------------------*/
		  /* Navigation Menu
	   ------------------------------------------------------ */  
	   var toggleButton = $('.menu-toggle'),
		   nav = $('.main-navigation');
	
	   // toggle button
	   toggleButton.on('click', function(e) {
	
			e.preventDefault();
			toggleButton.toggleClass('is-clicked');
			nav.slideToggle();
	
		});
	
	   // nav items
		  nav.find('li a').on("click", function() {   
	
		   // update the toggle button 		
		   toggleButton.toggleClass('is-clicked'); 
		   // fadeout the navigation panel
		   nav.fadeOut();   		
				
		  });
	
	
	   /*---------------------------------------------------- */
		  /* Highlight the current section in the navigation bar
		  ------------------------------------------------------ */
		var sections = $("section"),
		navigation_links = $("#main-nav-wrap li a");	
	
		sections.waypoint( {
	
		   handler: function(direction) {
	
			   var active_section;
	
				active_section = $('section#' + this.element.id);
	
				if (direction === "up") active_section = active_section.prev();
	
				var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			
	
			 navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");
	
			}, 
	
			offset: '25%'
		});
	
	
		/*---------------------------------------------------- */
		  /* Smooth Scrolling
		  ------------------------------------------------------ */
		  $('.smoothscroll').on('click', function (e) {
			 
			 e.preventDefault();
	
		   var target = this.hash,
			$target = $(target);
	
			$('html, body').stop().animate({
			   'scrollTop': $target.offset().top
		  }, 800, 'swing', function () {
			  window.location.hash = target;
		  });
	
		  });  
	  
	
	   /*---------------------------------------------------- */
		/*  Placeholder Plugin Settings
		------------------------------------------------------ */ 
		$('input, textarea, select').placeholder()  
	
	
		  /*---------------------------------------------------- */
		/*	contact form
		------------------------------------------------------ */
	
		/* local validation */
		$('#contactForm').validate({
	
			/* submit via ajax */
			submitHandler: function(form) {
	
				var sLoader = $('#submit-loader');
	
				$.ajax({      	
	
				  type: "POST",
				  url: "inc/sendEmail.php",
				  data: $(form).serialize(),
				  beforeSend: function() { 
	
					  sLoader.fadeIn(); 
	
				  },
				  success: function(msg) {
	
					// Message was sent
					if (msg == 'OK') {
						sLoader.fadeOut(); 
					   $('#message-warning').hide();
					   $('#contactForm').fadeOut();
					   $('#message-success').fadeIn();   
					}
					// There was an error
					else {
						sLoader.fadeOut(); 
					   $('#message-warning').html(msg);
						$('#message-warning').fadeIn();
					}
	
				  },
				  error: function() {
	
					  sLoader.fadeOut(); 
					  $('#message-warning').html("Something went wrong. Please try again.");
					 $('#message-warning').fadeIn();
	
				  }
	
			  });     		
			  }
	
		});
	
	
		 /*----------------------------------------------------- */
		  /* Back to top
	   ------------------------------------------------------- */ 
		var pxShow = 300; // height on which the button will show
		var fadeInTime = 400; // how slow/fast you want the button to show
		var fadeOutTime = 400; // how slow/fast you want the button to hide
		var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
	
	   // Show or hide the sticky footer button
		jQuery(window).scroll(function() {
	
			if (!( $("#header-search").hasClass('is-visible'))) {
	
				if (jQuery(window).scrollTop() >= pxShow) {
					jQuery("#go-top").fadeIn(fadeInTime);
				} else {
					jQuery("#go-top").fadeOut(fadeOutTime);
				}
	
			}		
	
		});		
	
	})(jQuery);
	// what i added end

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);
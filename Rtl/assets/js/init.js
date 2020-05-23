$(document).ready(function () {
	AOS.init();
	$(".owl-main").owlCarousel({
		rtl:                true,
		nav:                true,
		dots:               true,
		autoplay:           true,
		autoplayTimeout:    5000,
		smartSpeed:         2000,
		autoplayHoverPause: true,
		loop:               true,
		slideTransition:    'cubic-bezier(0.32,-0.3, 0.7, 1.26)',
		responsive:         {
			0:    {
				items:    1,
				dotsEach: 1,
			},
			576:  {
				items:    1,
				dotsEach: 1,
			},
			768:  {
				items:    2,
				dotsEach: 2,
			},
			992:  {
				items:    2,
				dotsEach: 2,
			},
			1200: {
				items:    3,
				dotsEach: 3,
			}
		}
	});
	$(".owl-blog").owlCarousel({
		rtl:                true,
		nav:                true,
		dots:               true,
		autoplay:           true,
		autoplayTimeout:    4000,
		smartSpeed:         2000,
		autoplayHoverPause: true,
		loop:               true,
		slideTransition:    'cubic-bezier(0.32,-0.3, 0.7, 1.26)',
		responsive:         {
			0:    {
				items:    1,
				dotsEach: 1,
			},
			576:  {
				items:    1,
				dotsEach: 1,
			},
			768:  {
				items:    2,
				dotsEach: 2,
			},
			992:  {
				items:    2,
				dotsEach: 2,
			},
			1200: {
				items:    2,
				dotsEach: 2,
			}
		}
	});
	var x = 0;
	$("#menu").click(function () {
		if (x === 0) {
			expand();
			x = 1;
			return;
		}
		if (x === 1) {
			collapse();
			x = 0;
		}
	});
	$("#navlist li").click(function () {
		window.innerWidth <= 768 ? collapse() : null;
		x = 0;
	});
	
	$(window).resize(function () {
		if (window.innerWidth >= 768) {
			$("#navlist").css({bottom: '0'});
			$("#navbar").css({height: '80px'});
		} else {
			$("#navlist").css({bottom: '300%'});
			$("#navbar").css({height: '70px'});
		}
	});
	$('#preloader').hide();
	var left  = document.getElementsByClassName('article-left')[0],
	    right = document.getElementsByClassName('article-right')[0],
	    prev  = document.getElementsByClassName('article-preview');
	left.addEventListener('mouseover', function () {
		prev[0].style.animation = 'anim-left 600ms 300ms ease-in-out forwards';
	});
	left.addEventListener('mouseout', function () {
		prev[0].style.animation = 'anim-left-not 600ms 300ms ease-in-out backwards';
	});
	right.addEventListener('mouseover', function () {
		prev[1].style.animation = 'anim-right 600ms 300ms ease-in-out forwards';
	});
	right.addEventListener('mouseout', function () {
		prev[1].style.animation = 'anim-right-not 600ms 300ms ease-in-out backwards';
	});
});

function expand() {
	$("#navbar").animate({height: '260px'});
	$(".nav-logo-brand").animate({
		marginBottom: '1.2rem'
	});
	$(".nav-logo-line").animate({
		marginBottom: '2rem'
	});
	$(".nav-logo").css({
		alignItems: 'flex-end'
	});
	$("#navlist").animate({
		bottom: '-30px'
	});
	$(".float-nav-line:eq(0)").animate({
		width: '28px'
	}).css({transform: 'rotate(45deg)'});
	$(".float-nav-line:eq(1)").animate({
		marginTop: '-4px'
	}).css({transform: 'rotate(-45deg)'});
}

function collapse() {
	$("#navbar").animate({height: '60px'});
	$(".nav-logo-brand").animate({
		marginBottom: '1rem'
	});
	$(".nav-logo-line").animate({
		marginBottom: '1.5rem'
	});
	$(".float-nav-line:eq(0)").animate({
		width: '18px'
	}).css({transform: 'rotate(0)'});
	$(".float-nav-line:eq(1)").animate({
		marginTop: '12px'
	}).css({transform: 'rotate(0)'});
	$("#navlist").animate({
		bottom: '300%'
	});
}

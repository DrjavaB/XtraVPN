$(document).ready(function () {
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
		if (window.innerWidth >= 768){
			$("#navlist").css({bottom: '0'});
			$("#navbar").css({height: '80px'});
		}
		else {
			$("#navlist").css({bottom: '300%'});
			$("#navbar").css({height: '70px'});
		}
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

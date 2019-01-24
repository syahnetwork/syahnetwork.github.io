// EVENT CLICK
$('.page-scroll').on('click',function(e) {
	// ISI HREF
	var tujuan = $(this).attr('href');
	// CATCH ELEMENT
	var elemenTujuan=$(tujuan);

	// SCROLL -- ADD 'HTML'
	$('html,body').animate({
		scrollTop:elemenTujuan.offset().top-50
	},1250,'swing');

	console.log($('body').scrollTop());

	e.preventDefault();
});
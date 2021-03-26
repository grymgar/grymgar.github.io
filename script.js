$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500){
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});

	//slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0 });
	});
	
	//toggle menu/navbar script
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
		$('')
	});
	$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  	});
});
	
	//typing animation script
	var typed= new Typed(".typing", {
		strings: ["Learning", "Editing", "Creating", "Aspiring", "Freelancing", "Experienced", "Hardworking", "Compassionate", "Podcasting", "Coding", "Informed", "Streaming", "A Leader"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

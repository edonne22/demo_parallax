function windowResize(){

	//resize for landscape
	if( $(window).innerWidth() <= 320 ){
		$( ".content").css( "width", "320px" );
	}
	if( $(window).innerWidth() >= 480){
		$( "body").css( "width", "568px" );
		$( "body").css( "height", "320px" );
		$(".content").css("width","568px");
		$(".content").css("height","320px");
		$( "#header").css( "width","568px" );
		$( "#hamburger").css( "margin-top","20px" );
		$( "#slide1").css( "background-size", "568px 320px" );
		$( "#slide1").css( "height", "320px" );
		$( "#slide1").css( "padding-top", "120px" );
		$( ".text_container").css( "width","450px" );
	}
}
function windowResize(){

	//resize for iPad
	if( $(window).innerWidth() <= 1024 ){
		$( "#slide1").css( "background-size", "1024px 900px" );
		$( "#slide3").css( "background-size", "100% 65%" );
	}

}
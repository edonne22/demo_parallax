// Re-direct the user to the Mobile site if using an iPhone/iPod/Android
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)))
{
	location.replace("mobile/mobile.html");
}
else if((navigator.userAgent.match(/Android/i)))
{
	location.replace("mobile/mobile.html");
}


function windowResize(){

	//resize for iPad
	if( $(window).innerWidth() <= 1024 ){
		$( "#slide1").css( "background-size", "1024px 900px" );
		$( "#slide3").css( "background-size", "100% 65%" );
	}

}
/* Enabling support for new HTML5 tags for IE6, IE7 and IE8 */
if(navigator.appName == 'Microsoft Internet Explorer' ){
	if( ( navigator.userAgent.indexOf('MSIE 6.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 7.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 8.0') >= 0 ) ){
		document.createElement('header')
		document.createElement('nav')
		document.createElement('section')
		document.createElement('aside')
		document.createElement('footer')
		document.createElement('article')
		document.createElement('hgroup')
		document.createElement('figure')
		document.createElement('figcaption')
	}
}


;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
        
                
        
       
        //End accordion function
        
       
        $('.phone-nav').click(function(){
            $('.main-nav').slideToggle()
        })
        
        
        if($('#contact-page').length){
            $('body').addClass('contact-page-body')
        }
        
				
	})// End ready function.
    
    
    $(window).load(function(){

        //Begin Client carousel
        if ( $('#slider-wrap').length == 0 ) return false

        $('#slider-wrap').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: false,
            controlNav:true,
            useCSS: false,
            slideshowSpeed: 10000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            start: function(slider){
                //$('body').removeClass('loading');

            },
            animationLoop: true

        })


    })
    $(window).load(function(){

        //Begin Client carousel
        if ( $('#work-slider').length == 0 ) return false

        $('#work-slider').flexslider({
            animation:"slide",
            slideshow: true,
            directionNav: true,
            controlNav:false,
            useCSS: false,
            slideshowSpeed: 10000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            start: function(slider){
                //$('body').removeClass('loading');

            },
            animationLoop: true

        })


    })
	

})(jQuery)

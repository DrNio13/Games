$(document).ready(function(){
	
	// How many stars
	var stars = 100;
	
	// max width of stars in px
	var maxWidth = 4;
	
	// max height of stars in px
	var maxHeight = 4;

	//screen width
	var screenWidth = 1600;

	//screen height
	var screenHeight = 800;

	var animationPosibilities = ['slow','normal','fast'];

	for(var i=0; i<=stars; i++) {
		var j= 10 + Math.random()*100;
		var output = $('.stars-container').append('<figure class="star position-'+i+'"></figure');
		$('.position-' + i).css({
			width: maxWidth + "px",
			height: maxHeight + "px",
			// position the star 
			left: Math.floor(Math.random()*screenWidth),
			top: Math.floor(Math.random()*screenHeight)
		})
		.addClass('animation-'+animationPosibilities[Math.floor(Math.random()*3)] );
		
	}


	// Side user menu

	$('.side-navigation').on('click', function(){
		$('.user-menu').toggleClass('opened');

			if ( $('.user-menu').hasClass('opened')) {				
				// visible side menu
				$('.user-menu').css({
					right: '0%'
				});

				// move main section
				$('.main-container').css({
					right: '0%'
				});

				// move open-close button
				$('.side-navigation').css({
					right: '11%'
				});

				// open dark overlay
				$('.dark-overlay').css({
					width: '100%',
					background: 'rgba(0,0,0,0.5)'
				});

				$('.main-container').on('click', function() {
					// hide side menu
					$('.user-menu').css({
						right: '0%'
					});

					// move main section
					$('.main-container').css({
						right: '0%'
					});
				}); 
			}
			else {
				// hide side menu
				$('.user-menu').css({
						right: '-13%'
					});

				// move main section
				$('.main-container').css({
					right: '0px'
				});

				// move open-close button
				$('.side-navigation').css({
					right: '1%'
				});

				// open dark overlay
				$('.dark-overlay').css({
					width: '0%',
					background: 'transparent'
				});
			}

			
	});

});
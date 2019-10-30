$(function() {
	setTimeout(function() {
		$('.section1').addClass('comein')
	}, 200)

	$('#fullpage').fullpage({
		navigation: true,
		loopBottom: true,
		afterLoad: function(anchorLink, index) {
			if(index == 1) {
				$('.bg').removeClass('comebg1');
				$('.section1').addClass('comein')

			}
		},
		onLeave: function(index, nextIndex, direction) {

			//			if(index == 1 && nextIndex == 2) {
			//				$('.bg').addClass('comebg1');
			//				$('.section1').removeClass('comein');
			//				$('.section2').addClass('comein2');
			//			}
			//			if(index == 2 && nextIndex == 1) {
			//				$('.bg').removeClass('comebg1');	
			//				$('.section1').addClass('comein');
			//				$('.section2').removeClass('comein2');
			//			}
			//			if(index == 2 && nextIndex == 3){
			//				$('.bg').addClass('comebg2');
			//				$('.bg').removeClass('comebg1');
			//				$('.section2').removeClass('comein2');
			//			}
			//			if(index == 3 && nextIndex == 2) {
			//				$('.bg').removeClass('comebg2');	
			//				$('.bg').addClass('comebg1');
			//				$('.section2').addClass('comein2');
			//			}
			//			if(index == 3 && nextIndex == 4){
			//				$('.bg').addClass('comebg3');
			//				$('.bg').removeClass('comebg2');
			//			}
			//			if(index == 4 && nextIndex == 3) {
			//				$('.bg').addClass('comebg2');
			//				$('.bg').removeClass('comebg3');
			//			}
			if(nextIndex == 1) {
				$('.bg').removeClass('comebg1').removeClass('comebg2').removeClass('comebg3');
				$('.section1').addClass('comein');
				$('.section2').removeClass('comein2');
			}
			if(nextIndex == 2) {
				$('.bg').addClass('comebg1');
				$('.bg').removeClass('comebg2').removeClass('comebg3');
				$('.section2').addClass('comein2');
				$('.section1').removeClass('comein');
			}
			if(index==2&&nextIndex==3){
				
			}
			if(nextIndex == 3) {
				$('.bg').addClass('comebg2');
				$('.bg').removeClass('comebg1').removeClass('comebg3');
				$('.section2').removeClass('comein2');
			}
			if(nextIndex == 4) {
				$('.bg').addClass('comebg3');
				$('.bg').removeClass('comebg1').removeClass('comebg2');
			}
		}
	})

})
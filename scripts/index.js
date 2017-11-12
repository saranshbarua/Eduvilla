$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['Home','firstPage', 'secondPage'],
		menu: '#navu'
});

});
	$('#jumpin').on('click',function(){
		$('.box').css('display','none');
		$('.main').css('display','block');
		$('.footer').css('display','block');
	});

// function testScroll(ev){
//   if(window.pageYOffset<270)
//       {
//         $('#navu').css('display','none');
//       }
//   if(window.pageYOffset>270)
//       {
//         $('#navu').css('display','block');
//         $('#navu').addClass('na');
//       }
// }
// window.onscroll=testScroll;
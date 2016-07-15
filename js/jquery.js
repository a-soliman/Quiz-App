$(document).ready(function() {
	//Change the bootstrap class from 9 to 12
	if($(window).width() < 500) {
		$('#formCol').removeClass('col-xs-9')
		$('#formCol').addClass('col-xs-12')
	}
	else {
		$('#formCol').removeClass('col-xs-12')
		$('#formCol').addClass('col-xs-9')
		
	}
})
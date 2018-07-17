$(document).ready(function() {
	// ANIMACIONES
	new WOW().init();

	
	// MENU DESAPARECER Y APARECER

	$(".menu-margin").on("click", function(){
		
		// SI ESTA EN PEQUEÑO OCULTALO SINO NO HAGAS NADA
 
		 if ( $(window).width() <= 768 ) {
			 console.log("Esta en chiquito");
			 $("#myNavbar").hide(400);
		 }
 
		
 
	});
 
	//Menu
	$("#home-nav").on("click", function(){
		 $("#myNavbar").toggle(400)
	});
 
	
});


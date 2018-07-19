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

	// esta funcion es para desaparecer el menu completo al dar click a algun enlace en version movil
	$(".navbar-nav>li>a").on("click", function(){
		$("#myNavbar").toggle(400)
   	});

	// esta es para desplegar el boton del menu
	$("#home-nav").on("click", function(){
		$("#myNavbar").toggle(300)
   });

 
	
});


var dropdownOpen = false;



$(document).ready(function() {
    console.log("documento pronto");

    // azione al click della voce che apre i menù dropdown
    $(".navbar__dropdown-opener").click(function () {
    	var tuttiIMenu = $(".navbar__dropdown-menu");
    	var menuCliccato = $(this).find(".navbar__dropdown-menu");


    	// se c'è un menù aperto e clicco per aprirne un'altro diverso
    	if (tuttiIMenu.hasClass("navbar__dropdown-menu__show") && menuCliccato.hasClass("navbar__dropdown-menu__show") == false) {
    		// chiudo quello che era aperto e apro quello nuovo
    		tuttiIMenu.removeClass("navbar__dropdown-menu__show");
    		menuCliccato.addClass("navbar__dropdown-menu__show");
    	} 
    	// se riclicco su un menù per chiuderlo lo chiudo
    	else if (tuttiIMenu.hasClass("navbar__dropdown-menu__show")) {
    		tuttiIMenu.removeClass("navbar__dropdown-menu__show");
    	}
    	// sennò apro il menù richiesto dall'utente (che quindi era chiuso)
    	else {
    		menuCliccato.addClass("navbar__dropdown-menu__show");
    	}

    });
});


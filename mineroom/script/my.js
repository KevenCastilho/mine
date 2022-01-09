/*** BG Change ***/
	$(document).ready(function() {
        $("#location_outside").click(function() {
			document.body.style.backgroundImage = 'url(img/location_outside.jpg)';
		    });
    });

	$(document).ready(function() {
        $("#location_room").click(function() {
			document.body.style.backgroundImage = 'url(img/location_room.png)';
		    });
    });	

	$(document).ready(function() {
        $("#location_path").click(function() {
			document.body.style.backgroundImage = 'url(img/location_path.png)';
		    });
    });	

$(document).ready(function() {
        $("#embarkButton").click(function() {
			document.body.style.backgroundImage = 'url(img/embarkButton.jpg)';
		    });
    });	
	
/*** Button Sound ***/

	/*** Class Button ***/
    $(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/click.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $(".button").click(function() {
            obj.play();
        });

    });
	
	/*** Header Button Class ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/drr.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $(".headerButton").click(function() {
            obj.play();
        });

    });
	
	/*** Atiçar fogo ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/Furnace_fire_crackle1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#stokeButton").click(function() {
            obj.play();
        });

    });
	
/*** Construir ***/
	/*** Armadilha ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_trap").click(function() {
            obj.play();
        });

    });

	/*** Carrinho ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_cart").click(function() {
            obj.play();
        });

    });
	
	/*** cabana ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_hut").click(function() {
            obj.play();
        });

    });
	
	/*** alojamento ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_lodge").click(function() {
            obj.play();
        });

    });
	
	/*** posto de troca ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_trading post").click(function() {
            obj.play();
        });

    });
	
	/*** curtume ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_tannery").click(function() {
            obj.play();
        });

    });
	
	/*** defumadouro ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_smokehouse").click(function() {
            obj.play();
        });

    });
	
	/*** oficina ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_workshop").click(function() {
            obj.play();
        });

    });
	
	/*** siderurgica ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_steelworks").click(function() {
            obj.play();
        });

    });
	
/*** Oficina ***/
	/*** Tocha ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/craftsand1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_torch").click(function() {
            obj.play();
        });

    });

	/*** Bolsa D'agua ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/craftsand2.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_waterskin").click(function() {
            obj.play();
        });

    });
	
	/*** Barril ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer2.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_cask").click(function() {
            obj.play();
        });

    });
	
	/*** Tanque D'agua ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer2.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_water tank").click(function() {
            obj.play();
        });

    });
	
	/*** Lança de Ossos ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/craftsaw1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_bone spear").click(function() {
            obj.play();
        });

    });
	
	/*** Mochila ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/craftsaw2.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_rucksack").click(function() {
            obj.play();
        });

    });
	
	/*** Vagão ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil2.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_wagon").click(function() {
            obj.play();
        });

    });
	
	/*** Comboio ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crafthammer1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_convoy").click(function() {
            obj.play();
        });

    });
	
	/*** L Armadura ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_l armour").click(function() {
            obj.play();
        });

    });
	
	/*** i Armadura ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_i armour").click(function() {
            obj.play();
        });

    });
	
	/*** S Armadura ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_s armour").click(function() {
            obj.play();
        });

    });
	
	/*** Espada de Ferro ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil2.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_iron sword").click(function() {
            obj.play();
        });

    });
	
	/*** Espada de Aço ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/anvil2.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_steel sword").click(function() {
            obj.play();
        });

    });
	
/*** Comprar ***/
	/*** Escamas ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_scales").click(function() {
            obj.play();
        });

    });

	/*** Dentes ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_teeth").click(function() {
            obj.play();
        });

    });
	
	/*** Ferro ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_iron").click(function() {
            obj.play();
        });

    });
	
	/*** Carvão ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_coal").click(function() {
            obj.play();
        });

    });
	
	/*** Aço ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_steel").click(function() {
            obj.play();
        });

    });
	
	/*** Medicina ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_medicine").click(function() {
            obj.play();
        });

    });
	
	/*** Balas ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_bullets").click(function() {
            obj.play();
        });

    });
	
	/*** Boleadeira ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_bolas").click(function() {
            obj.play();
        });

    });
	
	/*** Bússula ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/swoosh1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#build_compass").click(function() {
            obj.play();
        });

    });
	
/*** Arredores
	/*** Recolher Madeira ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/crack1.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#gatherButton").click(function() {
            obj.play();
        });

    });
	
	/*** Verificar Armadilhas ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/floorsqueak3.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#trapsButton").click(function() {
            obj.play();
        });

    });

/*** Mapa
	/*** Entrar ***/
	$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="sounds/craft/click.ogg";
        obj.volume=1;
        obj.autoPlay=false;
        obj.preLoad=true;       

        $("#gatherButton").click(function() {
            obj.play();
        });

    });
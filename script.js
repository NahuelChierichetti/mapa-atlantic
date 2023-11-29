document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const logo = document.getElementById("logo");
    const nombre = document.getElementById("nombreTenant");
    const descripcion = document.getElementById("descripcionTenant");
    const telefono = document.getElementById("telefonoTenant");
    const website = document.getElementById("websiteTenant");
    const closeButton = document.getElementById("close-button");
    const popupOverlay = document.getElementById("popup-overlay");
    const btnFirstFloor = document.getElementById("btn-first-floor");
    const btnSecondFloor = document.getElementById("btn-second-floor");
    const firstFloorWeb = document.getElementById("first-floor-web");
    const secondFloorWeb = document.getElementById("second-floor-web");
    const firstFloorMobile = document.getElementById("first-floor-mobile");
    const secondFloorMobile = document.getElementById("second-floor-mobile");

    const modalContainer = document.getElementById("modal-container");
    const modalContent = document.getElementById("modal-content");

    console.log(modalContainer)
 

    btnFirstFloor.addEventListener("click", function () {
        console.log(window.innerWidth)
        if (window.innerWidth < 768) {
            // Pantalla menor a 768px (mobile)
            firstFloorMobile.style.display = "block";
            secondFloorMobile.style.display = "none";
        } else {
            // Pantalla mayor o igual a 768px (web)
            firstFloorWeb.style.display = "block";
            secondFloorWeb.style.display = "none";
        }
    
        btnFirstFloor.classList.add("active");
        btnSecondFloor.classList.remove("active");
    });
    
    btnSecondFloor.addEventListener("click", function () {
        if (window.innerWidth < 768) {
            // Pantalla menor a 768px (mobile)
            firstFloorMobile.style.display = "none";
            secondFloorMobile.style.display = "block";
        } else {
            // Pantalla mayor o igual a 768px (web)
            firstFloorWeb.style.display = "none";
            secondFloorWeb.style.display = "block";
        }
    
        btnFirstFloor.classList.remove("active");
        btnSecondFloor.classList.add("active");
    });

    // Cargar datos del JSON (esto es un ejemplo, debes adaptarlo a tus necesidades)
    const empresas = {
        /* TENANTS WEB FIRST FLOOR */   
        LaEstanciaArgentina: { 
            logoURL: "./img/logos/laestancia-argentina.png", nombreTenant: "La Estancia Argentina", descripcionTenant: "Argentinian Food", telefonoTenant: "954 454 9900", websiteTenant: "https://www.instagram.com/laestanciahallandale/" },
        ElPrimo: { 
            logoURL: "./img/logos/el-primo.png", nombreTenant: "El Primo Red Tacos", descripcionTenant: "Tacos", telefonoTenant: "", websiteTenant: "https://www.elprimoredtacos.com/" },
        Temakase: { 
            logoURL: "./img/logos/temakase.png", nombreTenant: "Temakase", descripcionTenant: "Handroll - Asian Food", telefonoTenant: "", websiteTenant: "http://temakasemia.com/"},
        Holyshakes: { 
            logoURL: "./img/logos/holl.png", nombreTenant: "HOLYSHAKES", descripcionTenant: "Milkshakes", telefonoTenant: "", websiteTenant: "https://holy-shakes.com/"},
        TeaLeaf: { 
            logoURL: "./img/logos/tea-and-leaf.png", nombreTenant: "Tea & Leaf Creamery", descripcionTenant: "Bubble teas, smoothies, desserts and more", telefonoTenant: "", websiteTenant: "https://www.tealeafandcreamery.com/" },
        Mitchs: { 
            logoURL: "./img/logos/mitcs.png", nombreTenant: "Mitch Downtown Bagles", descripcionTenant: "Traditional NY Food", telefonoTenant: "", websiteTenant: "https://mitchsdowntown.com/" },
        TheWagyu: { 
            logoURL: "./img/logos/wagyu.png", nombreTenant: "The Wagyu Bar", descripcionTenant: "Casual Steakhouse", telefonoTenant: "", websiteTenant: "https://thewagyubar.com/" },
        MiamiSwimmingAcademy: { 
            logoURL: "./img/logos/miamiswimming.png", nombreTenant: "Miami Swimming Academy", descripcionTenant: "Swimming Academy", telefonoTenant: "786 558 1237", websiteTenant: "https://miamiswimmingacademy.com/" },
        Crema: { 
            logoURL: "./img/logos/crema.png", nombreTenant: "Crema Gourmet", descripcionTenant: "Expresso Bar and more", telefonoTenant: "954 239 8763", websiteTenant: "https://www.cremagourmet.com/" },
        DrunkenDragon: {
            logoURL: "./img/logos/drunken-dragon.png", nombreTenant: "Drunken Dragons", descripcionTenant: "Korean BBQ & Asian Tapas", telefonoTenant: "", websiteTenant: "https://www.drunkendragon.com/" },
        Murano: {
            logoURL: "./img/logos/murano.png", nombreTenant: "Murano by Ferraro", descripcionTenant: "Murano By Ferraro", telefonoTenant: "", websiteTenant: "https://www.ferraroskitchen.com/hallandale" },
        Jaffa: {
            logoURL: "./img/logos/jeffa.png", nombreTenant: "Jaffa", descripcionTenant: "Israeli Kitchen & Wine Bar", telefonoTenant: "954 391 9430", websiteTenant: "https://www.jaffamiami.com/" },
        Holi: {
            logoURL: "./img/logos/holi.png", nombreTenant: "HOLI Vegan", descripcionTenant: "Vegetarian/Vegan Restaurant", telefonoTenant: "954 251 3028", websiteTenant: "https://www.holivegankitchen.com/" },
        GelatoGo: {
            logoURL: "./img/logos/gelato.png", nombreTenant: "Gelato Go", descripcionTenant: "Italian gelato", telefonoTenant: "954 271 3716", websiteTenant: "https://www.gelatogo.net/" },
        Anderson: {
            logoURL: "./img/logos/anderson.png", nombreTenant: "Anderson & Cole", descripcionTenant: "Anderson & Cole Nail Spa", telefonoTenant: "954 399 8457", websiteTenant: "https://andersoncolenailspafl.com/" },
        LaPiazzeta: {
            logoURL: "./img/logos/la-piazzeta.png", nombreTenant: "La Piazzetta", descripcionTenant: "Authentic Italian Cuisine", telefonoTenant: "754 888 9116", websiteTenant: "https://linktr.ee/lapiazzettamiami" },
        Doggis: {
            logoURL: "./img/logos/doggisdogis.png", nombreTenant: "Doggi´s", descripcionTenant: "Traditional Venezuelan Food", telefonoTenant: "754 400 8115", websiteTenant: "https://www.eatdoggis.com/" },
        TheBluesBurgers: {
            logoURL: "./img/logos/the-blues-burgers.png", nombreTenant: "The Blues Burgers", descripcionTenant: "Burgers & Live Music", telefonoTenant: "754 263 3294", websiteTenant: "https://thebluesburgers.com/" },
        JuiceMafia: {
            logoURL: "./img/logos/juice-mafia.png", nombreTenant: "Juice Mafia", descripcionTenant: "Plant-Based, Parve, + Orb Kosher", telefonoTenant: "954 674 2356", websiteTenant: "https://www.thejuicemafia.com/" },
        DrLimon: {
            logoURL: "./img/logos/drlimon.png", nombreTenant: "Dr Limón Ceviche Bar", descripcionTenant: "Ceviche Bar - Peruvian Food", telefonoTenant: "954 982 7664", websiteTenant: "https://www.doctorlimon.com/" },
        RepublicaCigarLounge: {
            logoURL: "./img/logos/cigar-lounge.png", nombreTenant: "República Cigar Lounge", descripcionTenant: "Cigar Shop and Lounge", telefonoTenant: "954 367 7428", websiteTenant: "https://www.republicaofcigars.com/" },
        Sokai: {
            logoURL: "./img/logos/sokai.png", nombreTenant: "Sokai Sushi Bar", descripcionTenant: "Sushi Bar", telefonoTenant: "", websiteTenant: "https://sokaisushi.com/" },
        
        /* TENANTS MOBILE FIRST FLOOR */    

        LaEstanciaArgentinaMobile: { 
            logoURL: "./img/logos/laestancia-argentina.png", nombreTenant: "La Estancia Argentina", descripcionTenant: "Argentinian Food", telefonoTenant: "954 454 9900", websiteTenant: "https://www.instagram.com/laestanciahallandale/" },
        ElPrimoMobile: { 
            logoURL: "./img/logos/el-primo.png", nombreTenant: "El Primo Red Tacos", descripcionTenant: "Tacos", telefonoTenant: "", websiteTenant: "https://www.elprimoredtacos.com/" },
        TemakaseMobile: { 
            logoURL: "./img/logos/temakase.png", nombreTenant: "Temakase", descripcionTenant: "Handroll - Asian Food", telefonoTenant: "", websiteTenant: "http://temakasemia.com/"},
        HolyshakesMobile: { 
            logoURL: "./img/logos/holl.png", nombreTenant: "HOLYSHAKES", descripcionTenant: "Milkshakes", telefonoTenant: "", websiteTenant: "https://holy-shakes.com/"},
        TeaLeafMobile: { 
            logoURL: "./img/logos/tea-and-leaf.png", nombreTenant: "Tea & Leaf Creamery", descripcionTenant: "Bubble teas, smoothies, desserts and more", telefonoTenant: "", websiteTenant: "https://www.tealeafandcreamery.com/" },
        MitchsMobile: { 
            logoURL: "./img/logos/mitcs.png", nombreTenant: "Mitch Downtown Bagles", descripcionTenant: "Traditional NY Food", telefonoTenant: "", websiteTenant: "https://mitchsdowntown.com/" },
        TheWagyuMobile: { 
            logoURL: "./img/logos/wagyu.png", nombreTenant: "The Wagyu Bar", descripcionTenant: "Casual Steakhouse", telefonoTenant: "", websiteTenant: "https://thewagyubar.com/" },
        MiamiSwimmingAcademyMobile: { 
            logoURL: "./img/logos/miamiswimming.png", nombreTenant: "Miami Swimming Academy", descripcionTenant: "Swimming Academy", telefonoTenant: "786 558 1237", websiteTenant: "https://miamiswimmingacademy.com/" },
        CremaMobile: { 
            logoURL: "./img/logos/crema.png", nombreTenant: "Crema Gourmet", descripcionTenant: "Expresso Bar and more", telefonoTenant: "954 239 8763", websiteTenant: "https://www.cremagourmet.com/" },
        DrunkenDragonMobile: {
            logoURL: "./img/logos/drunken-dragon.png", nombreTenant: "Drunken Dragons", descripcionTenant: "Korean BBQ & Asian Tapas", telefonoTenant: "", websiteTenant: "https://www.drunkendragon.com/" },
        MuranoMobile: {
            logoURL: "./img/logos/murano.png", nombreTenant: "Murano by Ferraro", descripcionTenant: "Murano By Ferraro", telefonoTenant: "", websiteTenant: "https://www.ferraroskitchen.com/hallandale" },
        JaffaMobile: {
            logoURL: "./img/logos/jeffa.png", nombreTenant: "Jaffa", descripcionTenant: "Israeli Kitchen & Wine Bar", telefonoTenant: "954 391 9430", websiteTenant: "https://www.jaffamiami.com/" },
        HoliMobile: {
            logoURL: "./img/logos/holi.png", nombreTenant: "HOLI Vegan", descripcionTenant: "Vegetarian/Vegan Restaurant", telefonoTenant: "954 251 3028", websiteTenant: "https://www.holivegankitchen.com/" },
        GelatoGoMobile: {
            logoURL: "./img/logos/gelato.png", nombreTenant: "Gelato Go", descripcionTenant: "Italian gelato", telefonoTenant: "954 271 3716", websiteTenant: "https://www.gelatogo.net/" },
        AndersonMobile: {
            logoURL: "./img/logos/anderson.png", nombreTenant: "Anderson & Cole", descripcionTenant: "Anderson & Cole Nail Spa", telefonoTenant: "954 399 8457", websiteTenant: "https://andersoncolenailspafl.com/" },
        LaPiazzetaMobile: {
            logoURL: "./img/logos/la-piazzeta.png", nombreTenant: "La Piazzetta", descripcionTenant: "Authentic Italian Cuisine", telefonoTenant: "754 888 9116", websiteTenant: "https://linktr.ee/lapiazzettamiami" },
        DoggisMobile: {
            logoURL: "./img/logos/doggisdogis.png", nombreTenant: "Doggi´s", descripcionTenant: "Traditional Venezuelan Food", telefonoTenant: "754 400 8115", websiteTenant: "https://www.eatdoggis.com/" },
        TheBluesBurgersMobile: {
            logoURL: "./img/logos/the-blues-burgers.png", nombreTenant: "The Blues Burgers", descripcionTenant: "Burgers & Live Music", telefonoTenant: "754 263 3294", websiteTenant: "https://thebluesburgers.com/" },
        JuiceMafiaMobile: {
            logoURL: "./img/logos/juice-mafia.png", nombreTenant: "Juice Mafia", descripcionTenant: "Plant-Based, Parve, + Orb Kosher", telefonoTenant: "954 674 2356", websiteTenant: "https://www.thejuicemafia.com/" },
        DrLimonMobile: {
            logoURL: "./img/logos/drlimon.png", nombreTenant: "Dr Limón Ceviche Bar", descripcionTenant: "Ceviche Bar - Peruvian Food", telefonoTenant: "954 982 7664", websiteTenant: "https://www.doctorlimon.com/" },
        RepublicaCigarLoungeMobile: {
            logoURL: "./img/logos/cigar-lounge.png", nombreTenant: "República Cigar Lounge", descripcionTenant: "Cigar Shop and Lounge", telefonoTenant: "954 367 7428", websiteTenant: "https://www.republicaofcigars.com/" },
        SokaiMobile: {
            logoURL: "./img/logos/sokai.png", nombreTenant: "Sokai Sushi Bar", descripcionTenant: "Sushi Bar", telefonoTenant: "", websiteTenant: "https://sokaisushi.com/" },

        /* TENANTS WEB SECOND FLOOR */       
        
        LaMisonH: {
            logoURL: "./img/logos/la-mansion.png", nombreTenant: "La Maison H Concept", descripcionTenant: "Furniture and decor", telefonoTenant: "", websiteTenant: "https://www.lamaisonhconcepts.com/" },
        Zenzone: {
            logoURL: "./img/logos/zenzone.png", nombreTenant: "Zen Zone", descripcionTenant: "Zen Zone Wellness Center", telefonoTenant: "", websiteTenant: "" },
        Genias: {
            logoURL: "./img/logos/genias.png", nombreTenant: "Genias", descripcionTenant: "Keratin Spa", telefonoTenant: "", websiteTenant: "" },
        _54D: {
            logoURL: "./img/logos/54D.png", nombreTenant: "54D Aventura", descripcionTenant: "Transform your body & mind in 54 days", telefonoTenant: "", websiteTenant: "https://54d.com/" },
        ClubPilates: {
            logoURL: "./img/logos/club-pilates.png", nombreTenant: "Club Pilates", descripcionTenant: "", telefonoTenant: "", websiteTenant: "https://www.clubpilates.com/" },
        OHLA: {
            logoURL: "./img/logos/ohla.png", nombreTenant: "OHLA Language Academy", descripcionTenant: "Language Academy", telefonoTenant: "786 438 4873", websiteTenant: "https://www.ohla.com/" },
        Live: {
            logoURL: "./img/logos/live.png", nombreTenant: "Live! School of Music", descripcionTenant: "School of Music", telefonoTenant: "305 893 0191", websiteTenant: "https://www.liveschoolofmusic.com/" },
        DentalSpecialities: {
            logoURL: "./img/logos/dentis.png", nombreTenant: "South Dade Dental Specialties", descripcionTenant: "Dental services", telefonoTenant: "", websiteTenant: "https://thedentistservices.com/" },
        Mare: {
            logoURL: "./img/logos/MAre.png", nombreTenant: "Maré", descripcionTenant: "Lash & Spa", telefonoTenant: "305 399 3391", websiteTenant: "https://www.instagram.com/mare.lash/" },
        BoldNation: {
            logoURL: "./img/logos/bold.png", nombreTenant: "BOLD NATION Fitness", descripcionTenant: "Leading sports management company", telefonoTenant: "", websiteTenant: "https://www.instagram.com/boldnationfitness/" },
        Flippos: {
            logoURL: "./img/logos/flippos.png", nombreTenant: "Flippos Kids Playground", descripcionTenant: "Indoor Playground & Family Centre", telefonoTenant: "844 354 7767", websiteTenant: "https://www.flippos.net/" },
        Eco: {
            logoURL: "./img/logos/eco.png", nombreTenant: "Grupo ECO", descripcionTenant: "Real estate company", telefonoTenant: "", websiteTenant: "https://grupo-eco.com/" },
        Furshman: {
            logoURL: "./img/logos/furshman.png", nombreTenant: "Furshman & Davis", descripcionTenant: "Family Chiropractic Centers", telefonoTenant: "954 241 0145", websiteTenant: "http://www.furshmanandavis.com/" },
        Semper: {
            logoURL: "./img/logos/semper.png", nombreTenant: "Semper Laser", descripcionTenant: "Laser Hair Removal Services", telefonoTenant: "954 520 7627", websiteTenant: "https://www.semperlaser.com/" },
        Yanamode: {
            logoURL: "./img/logos/yanamode.png", nombreTenant: "Y Yanamode ART", descripcionTenant: "", telefonoTenant: "(917) 767 6856", websiteTenant: "https://yyanamode.art/" },
        WolffLaw: {
            logoURL: "./img/logos/wolf-law.png", nombreTenant: "Wolff Law", descripcionTenant: "", telefonoTenant: "941 284 5686", websiteTenant: "https://davidewolfflaw.com/" },
        BWH: {
            logoURL: "./img/logos/browaholic.png", nombreTenant: "Browaholic Studio", descripcionTenant: "Miami Brow and Lash Studio", telefonoTenant: "754 816 0940", websiteTenant: "https://www.browaholicstudio.com/" },
        OnFleekHair: {
            logoURL: "./img/logos/onfleek.png", nombreTenant: "On Fleek Hair", descripcionTenant: "On Fleek Hair Salon", telefonoTenant: "929 255 8407", websiteTenant: "https://onfleekhair.com/en" },
        TheSpot: {
            logoURL: "./img/logos/the-spot.png", nombreTenant: "The Spot Barbershop", descripcionTenant: "Barbershop", telefonoTenant: "", websiteTenant: "https://www.thespotbarbershop.com/locations/hallandale/" },
        MilanoBeautyStudios: {
            logoURL: "./img/logos/milano-studio.png", nombreTenant: "Milano Beauty Salon", descripcionTenant: "Beauty Salon", telefonoTenant: "", websiteTenant: "" },

        /* TENANTS MOBILE SECOND FLOOR */       
        
        LaMaisonHMobile: {
            logoURL: "./img/logos/la-mansion.png", nombreTenant: "La Maison H Concept", descripcionTenant: "Furniture and decor", telefonoTenant: "", websiteTenant: "https://www.lamaisonhconcepts.com/" },
        ZenzoneMobile: {
            logoURL: "./img/logos/zenzone.png", nombreTenant: "Zen Zone", descripcionTenant: "Zen Zone Wellness Center", telefonoTenant: "", websiteTenant: "" },
        GeniasMobile: {
            logoURL: "./img/logos/genias.png", nombreTenant: "Genias", descripcionTenant: "Keratin Spa", telefonoTenant: "", websiteTenant: "" },
        _54DMobile: {
            logoURL: "./img/logos/54D.png", nombreTenant: "54D Aventura", descripcionTenant: "Transform your body & mind in 54 days", telefonoTenant: "", websiteTenant: "https://54d.com/" },
        ClubPilatesMobile: {
            logoURL: "./img/logos/club-pilates.png", nombreTenant: "Club Pilates", descripcionTenant: "", telefonoTenant: "", websiteTenant: "https://www.clubpilates.com/" },
        OHLAMobile: {
            logoURL: "./img/logos/ohla.png", nombreTenant: "OHLA Language Academy", descripcionTenant: "Language Academy", telefonoTenant: "786 438 4873", websiteTenant: "https://www.ohla.com/" },
        LiveMobile: {
            logoURL: "./img/logos/live.png", nombreTenant: "Live! School of Music", descripcionTenant: "School of Music", telefonoTenant: "305 893 0191", websiteTenant: "https://www.liveschoolofmusic.com/" },
        DentalSpecialitiesMobile: {
            logoURL: "./img/logos/dentis.png", nombreTenant: "South Dade Dental Specialties", descripcionTenant: "Dental services", telefonoTenant: "", websiteTenant: "https://thedentistservices.com/" },
        MareMobile: {
            logoURL: "./img/logos/MAre.png", nombreTenant: "Maré", descripcionTenant: "Lash & Spa", telefonoTenant: "305 399 3391", websiteTenant: "https://www.instagram.com/mare.lash/" },
        BoldNationMobile: {
            logoURL: "./img/logos/bold.png", nombreTenant: "BOLD NATION Fitness", descripcionTenant: "Leading sports management company", telefonoTenant: "", websiteTenant: "https://www.instagram.com/boldnationfitness/" },
        FlipposMobile: {
            logoURL: "./img/logos/flippos.png", nombreTenant: "Flippos Kids Playground", descripcionTenant: "Indoor Playground & Family Centre", telefonoTenant: "844 354 7767", websiteTenant: "https://www.flippos.net/" },
        EcoMobile: {
            logoURL: "./img/logos/eco.png", nombreTenant: "Grupo ECO", descripcionTenant: "Real estate company", telefonoTenant: "", websiteTenant: "https://grupo-eco.com/" },
        FurshmanMobile: {
            logoURL: "./img/logos/furshman.png", nombreTenant: "Furshman & Davis", descripcionTenant: "Family Chiropractic Centers", telefonoTenant: "954 241 0145", websiteTenant: "http://www.furshmanandavis.com/" },
        SemperMobile: {
            logoURL: "./img/logos/semper.png", nombreTenant: "Semper Laser", descripcionTenant: "Laser Hair Removal Services", telefonoTenant: "954 520 7627", websiteTenant: "https://www.semperlaser.com/" },
        YanamodeMobile: {
            logoURL: "./img/logos/yanamode.png", nombreTenant: "Y Yanamode ART", descripcionTenant: "", telefonoTenant: "(917) 767 6856", websiteTenant: "https://yyanamode.art/" },
        WolffLawMobile: {
            logoURL: "./img/logos/wolf-law.png", nombreTenant: "Wolff Law", descripcionTenant: "", telefonoTenant: "941 284 5686", websiteTenant: "https://davidewolfflaw.com/" },
        BWHMobile: {
            logoURL: "./img/logos/browaholic.png", nombreTenant: "Browaholic Studio", descripcionTenant: "Miami Brow and Lash Studio", telefonoTenant: "754 816 0940", websiteTenant: "https://www.browaholicstudio.com/" },
        OnFleekHairMobile: {
            logoURL: "./img/logos/onfleek.png", nombreTenant: "On Fleek Hair", descripcionTenant: "On Fleek Hair Salon", telefonoTenant: "929 255 8407", websiteTenant: "https://onfleekhair.com/en" },
        TheSpotMobile: {
            logoURL: "./img/logos/the-spot.png", nombreTenant: "The Spot Barbershop", descripcionTenant: "Barbershop", telefonoTenant: "", websiteTenant: "https://www.thespotbarbershop.com/locations/hallandale/" },
        MilanoBeautyStudioMobile: {
            logoURL: "./img/logos/milano-studio.png", nombreTenant: "Milano Beauty Salon", descripcionTenant: "Beauty Salon", telefonoTenant: "", websiteTenant: "" },
        JuventusAcademyMiamiMobile: {
            logoURL: "./img/logos/juventus-academy-miami.png", nombreTenant: "Juventus Academy", descripcionTenant: "Official youht development program of Juventus F.C in Miami", telefonoTenant: "", websiteTenant: "https://jacademymiami.com/" }
        };

    const isMobile = window.innerWidth < 768;

    // Agregar un evento de clic a todos los elementos con la clase "popup-trigger"
    const triggers = document.querySelectorAll(".popup-trigger")
    triggers.forEach(trigger => {
        if (isMobile) {
            // Si es móvil, usar 'click' en lugar de 'mouseover'
            trigger.addEventListener("click", function () {
                const id = this.id;
                const empresa = empresas[id];
                if (empresa) {
                    logo.src = empresa.logoURL;
                    nombre.innerText = empresa.nombreTenant;
                    descripcion.innerText = empresa.descripcionTenant;
                    telefono.innerText = empresa.telefonoTenant;
                    modalContainer.style.display = "block";
                }
            });
        } else {
            // Si no es móvil, usar 'mouseover' y 'mouseout'
            trigger.addEventListener("mouseover", function () {
                const id = this.id;
                const empresa = empresas[id];
                if (empresa) {
                    logo.src = empresa.logoURL;
                    nombre.innerText = empresa.nombreTenant;
                    descripcion.innerText = empresa.descripcionTenant;
                    telefono.innerText = empresa.telefonoTenant;
                    modalContainer.style.display = "block";
                }
            });

            trigger.addEventListener("mouseout", function () {
                modalContainer.style.display = "none";
            });
        }
    });

    modalContainer.addEventListener("click", function (event) {
        if (event.target === modalContainer) {
            // Solo cierra el popup si se hace clic directamente en el fondo
            modalContainer.style.display = "none";
        }
    });

    // Agregar un evento de clic para cerrar el pop-up
    closeButton.addEventListener("click", function () {
        console.log("Hice click");
        // Limpia el valor del atributo src de la imagen
        logo.src = "";
        nombre.innerText = "";
        descripcion.innerText = "";
        telefono.innerText = "";
        modalContainer.style.display = "none";
    });
});
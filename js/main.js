const HeaderTitre = document.querySelector("header article");
const HeaderParticle = document.querySelector("#particles-js");
const HeaderIcons = document.querySelector("header article div");
const Overlay = document.querySelector(".overlay");
const NavButton = document.querySelector("#navButton");

$(document).ready(function() {
    HeaderTitre.style.opacity = 1;
    NavButton.style.opacity = 0.4;
    setTimeout(function(){
        HeaderParticle.style.opacity = 1;
        HeaderIcons.style.opacity = 1; 
    }, 500);   
});

function openNav(){
    document.getElementById("mySidenav").style.width = "300px";
    Overlay.style.display = "block";
    setTimeout(function(){
        Overlay.style.opacity = 0.5;
    }, 3);
}
  
function closeNav(){
    NavButton.style.opacity = 0.4;
    document.getElementById("mySidenav").style.width = "0";  
    Overlay.style.opacity = 0;
    setTimeout(function(){
        Overlay.style.display = "none";
    }, 300);
}

Overlay.addEventListener("click", closeNav);

NavButton.addEventListener("click", function(){
    openNav();
    setTimeout(() => {
        NavButton.style.opacity = 0;
    }, 120);
});

NavButton.addEventListener("mouseover", function(){
    NavButton.style.opacity = 0.8;
});

NavButton.addEventListener("mouseout", function(){
    NavButton.style.opacity = 0.4;
});

//Compétences

const data = [
        { dateLabel: 'Février 2019', title: 'TEMA' },
        { dateLabel: 'Mars 2019', title: 'Les Dessins de Lasr' },
        { dateLabel: 'Juin 2019', title: 'AuphysWorks' },
        { dateLabel: 'Septembre 2019', title: 'BeeLeave' },
        { dateLabel: 'Décembre 2019', title: 'MusicHours' },
        { dateLabel: 'Janvier 2020', title: 'Ce site !' },
        { dateLabel: 'Mars 2020', title: 'Lazublog' }
    ];

    const data2 = [
        { dateLabel: 'Février 2019', title: 'TEMA' },
        { dateLabel: 'Mars 2019', title: 'Les Dessins de Lasr' },
        { dateLabel: 'Juin 2019', title: 'AuphysWorks' },
        { dateLabel: 'Septembre 2019', title: 'BeaLeave' },
        { dateLabel: 'Mars 2020', title: 'Lazublog' }
    ];

    const data3 = [
        { dateLabel: 'Mars 2019', title: 'Convertisseur B/H/D' },
        { dateLabel: 'Décembre 2019', title: 'MusicHours' },
        { dateLabel: 'Mars 2020', title: 'Lazublog' }
    ];

    const data4 = [
        { dateLabel: 'Février 2019', title: 'TEMA' },
        { dateLabel: 'Septembre 2019', title: 'BeeLeave' },
        { dateLabel: 'Mars 2020', title: 'Lazublog' }
    ];

    const data5 = [
        { dateLabel: 'Avril 2019', title: 'Hero And Monsters' },
        { dateLabel: 'e', title: '' },
        { dateLabel: 'e', title: '' }
    ];

    const data6 = [
        { dateLabel: 'Mars 2019', title: 'Safe Or Well' },
        { dateLabel: 'Fevrier 2020', title: 'Apocalypse Not Now' },
        { dateLabel: 'Fevrier 2020', title: 'Breaking Bot' }
    ];
    
    new Vue({
    el: '#app', 
    data: {
        steps: data,
        steps2: data2,
        steps3: data3,
        steps4: data4,
        steps5: data5,
        steps6: data6,
    },
    mounted() {
        var swiper = new Swiper('.swiper-container', {
            //pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            grabCursor: true,
            paginationClickable: true,
            nextButton: '.next-slide',
            prevButton: '.prev-slide',
        });    

        var swiper2 = new Swiper('.swiper-container2', {
            //pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            grabCursor: true,
            paginationClickable: true,
            nextButton: '.next-slide2',
            prevButton: '.prev-slide2',
        });    

        var swiper3 = new Swiper('.swiper-container3', {
            //pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            grabCursor: true,
            paginationClickable: true,
            nextButton: '.next-slide3',
            prevButton: '.prev-slide3',
        });    

        var swiper4 = new Swiper('.swiper-container4', {
            //pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            grabCursor: true,
            paginationClickable: true,
            nextButton: '.next-slide4',
            prevButton: '.prev-slide4',
        });   

        var swiper5 = new Swiper('.swiper-container5', {
            //pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            grabCursor: true,
            paginationClickable: true,
            nextButton: '.next-slide5',
            prevButton: '.prev-slide5',
        });   

        var swiper5 = new Swiper('.swiper-container6', {
            //pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            grabCursor: true,
            paginationClickable: true,
            nextButton: '.next-slide6',
            prevButton: '.prev-slide6',
        });   
    }
})

//Pour faire des "points vides en selectionnant ceux voulu (ils sont marqués de la lettre e)"
const SelectDate = document.querySelectorAll('.date');
for(let i = 0; i < SelectDate.length; i++){
    if(SelectDate[i].innerText == "e"){
        SelectDate[i].style.visibility = "hidden";
    }
}

//Pour cacher les flèches quand la timeline à 3 points ou moins
const SelectRow = document.querySelectorAll('.row');
for(let i = 0; i < SelectRow.length; i++){
    let SelectTempSpan = SelectRow[i].querySelectorAll('.swiper-slide');
    if(SelectTempSpan.length <= 3){
        let SelectTempButton = SelectRow[i].querySelectorAll('.btn');
        SelectTempButton[0].style.visibility = "hidden";
        SelectTempButton[1].style.visibility = "hidden";
    }
}

//Projets
const Projets = document.querySelector('.projets');
const ProjetsOverlay = document.querySelector('.projetOverlay');
const ProjetsListe = document.querySelectorAll('.projetsListe article');
const Panel = document.querySelectorAll('.panel');
const PanelFlex = document.querySelectorAll('.panelFlex');
const PanelClose = document.querySelectorAll('.panelclose');


let panelOn = false;

for(let i = 0; i < ProjetsListe.length; i++){
    PanelClose[i].addEventListener("click", closePanel);
    ProjetsListe[i].addEventListener("click", function(){
        PanelFlex[i].style.transition = "0.3s";
        for(let y = 0; y < ProjetsListe.length; y++){
            ProjetsListe[y].style.opacity = 0;
            setTimeout(() => {
                ProjetsListe[y].style.zIndex = -1;
            }, 300);
        }
        ProjetsOverlay.style.zIndex = 10;
        Panel[i].className = "panelok";
        setTimeout(() => {
            PanelFlex[i].style.opacity = 1;
        }, 300);
        setTimeout(() => {
            panelOn = true;
        }, 0);
    });
};

function closePanel(){
    panelOn = false;
    ProjetsOverlay.style.zIndex = -1;
    for(let i = 0; i < ProjetsListe.length; i++){
        ProjetsListe[i].style.zIndex = 10;
        ProjetsListe[i].style.opacity = 1;
        PanelFlex[i].style.transition = "none";
        PanelFlex[i].style.opacity = 0;
        Panel[i].className = "panel";
    }
}

ProjetsOverlay.addEventListener("click", function(){
    if(panelOn == true){
        closePanel();
    }        
});

//Clin D'oeil MusicHours
const date = new Date();
const MusicHoursSelector = document.querySelector('.musicHours');
const MusicHoursSelectorInside = document.querySelectorAll('.musicHours')[1];

if(date.getHours() >= 20){
    MusicHoursSelector.style.backgroundImage = 'url("medias/images/MusicHoursNuit.jpg")';
    MusicHoursSelectorInside.style.backgroundImage = 'url("medias/images/MusicHoursNuit.jpg")';
    MusicHoursSelectorInside.classList.remove('brightless');
}
else if(date.getHours() == 18 || date.getHours() == 19 || date.getHours() == 6 || date.getHours() == 7){
    MusicHoursSelector.style.backgroundImage = 'url("medias/images/MusicHoursCrep.jpg")';
    MusicHoursSelectorInside.style.backgroundImage = 'url("medias/images/MusicHoursCrep.jpg")';
    MusicHoursSelectorInside.classList.add('brightless');
}
else{
    MusicHoursSelector.style.backgroundImage = 'url("medias/images/MusicHours.png")';
    MusicHoursSelectorInside.style.backgroundImage = 'url("medias/images/MusicHours.png")';
    MusicHoursSelectorInside.classList.add('brightless');
}

//Le convertisseur
function convDecimal()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
    
    hexadecimal.value = (decimal.value-0).toString(16);
    binaire.value = (decimal.value-0).toString(2);
}

function convHexadecimal()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
    
    decimal.value = parseInt(hexadecimal.value,16);
    binaire.value = (parseInt(hexadecimal.value,16)).toString(2);
}

function convBinaire()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
    
    decimal.value = parseInt(binaire.value,2);
    hexadecimal.value = (parseInt(binaire.value,2)).toString(16);
}

//Contact :

const ContactSeletor = document.querySelectorAll('.contact article');

ContactSeletor[0].addEventListener("click", function(){
    window.open('https://www.linkedin.com/in/theo-migeat/', '_blank');
})

ContactSeletor[1].addEventListener("click", function(){
    window.open('https://github.com/STM3900', '_blank');
})

ContactSeletor[2].addEventListener("click", function(){
    window.open('mailto:theo.migeat@epsi.fr');
})

//Tentative de scroll :

$('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 1000; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
});

const SectionSelector = document.querySelectorAll('.partieSelector');
const NavIconSelector = document.querySelectorAll('.sidenav aside article i');

function checkVisibleGlobal(){
    for(let i = 0; i < SectionSelector.length; i++){
        if(checkVisible(SectionSelector[i]) == true){
            if(i > 0){
                NavIconSelector[i-1].classList.remove("navIconActive");
            }
            NavIconSelector[i].classList.add("navIconActive");
        }
        else{
            NavIconSelector[i].classList.remove("navIconActive");
        }
    }
}

checkVisibleGlobal();

window.onscroll = () => {
    checkVisibleGlobal();
};

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


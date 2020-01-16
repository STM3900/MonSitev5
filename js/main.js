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
    document.getElementById("mySidenav").style.width = "350px";
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
    }, 100);
});

NavButton.addEventListener("mouseover", function(){
    NavButton.style.opacity = 0.8;
});

NavButton.addEventListener("mouseout", function(){
    NavButton.style.opacity = 0.4;
});

const Projets = document.querySelectorAll('.projets');
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

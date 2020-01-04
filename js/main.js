const HeaderTitre = document.querySelector("header article");
const HeaderParticle = document.querySelector("#particles-js");
const Overlay = document.querySelector(".overlay");
const NavButton = document.querySelector("#navButton");

$(document).ready(function() {
    HeaderTitre.style.opacity = 1;
    NavButton.style.opacity = 0.4;
    setTimeout(function(){
        HeaderParticle.style.opacity = 1;
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
    setTimeout(function(){
        NavButton.style.opacity = 0;
    }, 100);
});

NavButton.addEventListener("mouseover", function(){
    NavButton.style.opacity = 0.8;
});

NavButton.addEventListener("mouseout", function(){
    NavButton.style.opacity = 0.4;
});


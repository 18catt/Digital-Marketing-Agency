const slideshow = document.querySelector('.innerDiv');

function startSlideshow(){
    slideshow.style.animation = "slide 30s linear infinite";
}

function restartSlideshow(){
    slideshow.style.animation = 'none';
    setTimeout(()=>{
        startSlideshow();
    }, 0);
}

//to detect when animation ends and to restart it
slideshow.addEventListener('animationiteration', ()=>{
    restartSlideshow();
});

startSlideshow();

let nav = document.querySelector('.navMenu');
nav.style.display="none";
function menu(){
    if(nav.style.display == "block"){
        nav.style.display="none";
    }
    else{
        nav.style.display="block";
    }
}


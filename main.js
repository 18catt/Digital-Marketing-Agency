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
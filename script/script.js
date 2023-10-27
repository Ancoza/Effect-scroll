let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountainFront = document.getElementById('mountain-front');
let mountainsBehind = document.getElementById('mountains_behind');
var text = document.getElementById("text");
let btn = document.getElementById('btn');
let header = document.querySelector('header');

const speedElements = {
        SpStars : 0.25,
        SpMoon: 1.05,
        SpMountains: 1.2,
        SpTextRight : 4,
        SpTextTop : 1.2,
        SpButtonTop:1.5,
        SpHeader: 0.8
    };

window.addEventListener('scroll', function(){
    let direction = window.scrollY;
    
    stars.style.left = movement(direction, speedElements.SpStars);
    moon.style.top = movement(direction, speedElements.SpMoon);
    mountainsBehind.style.top = movement(direction, speedElements.SpMountains);

    text.style.marginRight = movement(direction, speedElements.SpTextRight);
    text.style.marginTop = movement(direction, speedElements.SpTextTop);
    
    btn.style.marginTop = movement(direction, speedElements.SpButtonTop);

    header.style.top = movement(direction, speedElements.SpHeader);
})

function movement(dir, sp){
    return dir * sp + 'px'
}

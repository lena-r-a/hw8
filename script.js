let large_log=document.getElementById('logo');
let small_log=document.getElementById('logo__inner')

// large_log.style.backgroundColor='rgb(24,1,10)';

function changeBgColor (color) {
    large_log.style.backgroundColor=color;
    }


function randomColor () {
    r=Math.floor(Math.random()*148)+28;
    g=Math.floor(Math.random()*148)+28;
    b=Math.floor(Math.random()*148)+28;
    return 'rgb('+r+','+g+','+b+')';
}
 setInterval(function(){changeBgColor(randomColor());},1000);

small_log.addEventListener('mouseover',function(){changeBgColor(randomColor())})






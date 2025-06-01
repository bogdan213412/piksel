let grid = document.querySelector('#grid')
for (let i = 0; i < 500; i+=1) { 
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    grid.appendChild(pixel);
}



var IS_CLIKED = false

document.addEventListener('mouseup', function() {
    IS_CLIKED = false;
})
document.addEventListener('mousedown', function() {
    IS_CLIKED = true;
})

let CURRENT_COLOR ='rgb(255,0,0)'.backgroundColor

let pixels = document.querySelectorAll('.pixel')
pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function() {
        if(IS_CLIKED) {
            anime({
                targets: pixel,
                background: CURRENT_COLOR,
                duration: 200,
                easing:'linear'
            })
        }
    })
    pixel.addEventListener('click', function() {
        
        anime({
            targets: pixel,
            background: CURRENT_COLOR,
            duration: 200,
            easing:'linear'
         })
    })
})

let color_pixel = document.querySelectorAll('.color-pixel'); 
color_pixel.forEach(pixel => {
    pixel.addEventListener('click', function() {
        fill_MODE = false;
        CURRENT_COLOR = getComputedStyle(pixel).backgroundColor; 
        console.log('Current color changed to:', CURRENT_COLOR); 
    });
});

"use strict"

// const on = document.querySelector('#on')
const off = document.querySelector('#off')
const img = document.querySelector('img')
// const offimg = document.querySelector('.off')

// off.onClick = function(){
//     document.querySelector('on').style.display = 'block'
//     document.querySelector('body').style.backgroundColor = 'orange'
// }

// on.onClick = function(){
//     document.querySelector('on').style.display = 'none'
//     document.querySelector('body').style.backgroundColor = 'darkgray'
// }

off.onclick = function () {
    if (img.src.match('off')) {
        img.src = 'images/on.png'
        document.querySelector('body').style.backgroundColor = 'orange'
    } else {
        img.src = 'images/off.png'
        document.querySelector('body').style.backgroundColor = 'darkgray'
    }
}
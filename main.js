
// main.html
var Itemlist = document.querySelectorAll('.contact1-slider-item')
var controls = document.querySelectorAll('.contact1-slider-control span')
controls.forEach(function(item, index){
    if(true) {
        item.onclick = function(e) {
            const map =document.querySelector('.contact1-slider-item.active')
            map.classList.remove('active')             
            Itemlist[index].classList.add('active')
            document.querySelector('.contact1-slider-control .color').classList.remove('color')
            controls[index].className = 'color'
        }
        
    }
})

// search icon
var open = document.querySelectorAll('.header-icon')
open[1].onclick = function() {
    modal.style.display = 'block'
}


var close = document.querySelector('.modal-body-head i')
close.onclick = function () {
    modal.style.display = 'none'
}


var modal = document.querySelector('#modal')
modal.onclick = function() {
    modal.style.display = 'none'
}

var modalBody = document.querySelector('.modal-body')
//                                                                                                   Ngăn chặn hành vi nổi bọt


modalBody.onclick = function (event) {
    event.stopPropagation()
}







// cart icon
open[2].onclick = function() {

    classmodal.style.display = 'block'
}


var close = document.querySelector('#Cart .modal-body-head i')
close.onclick = function () {
    classmodal.style.display = 'none'
}


var classmodal = document.querySelector('#Cart .modal')
classmodal.onclick = function() {
    classmodal.style.display = 'none'
}

var modalBody = document.querySelector('#Cart .modal-body')
//                                                                                                   Ngăn chặn hành vi nổi bọt

modalBody.onclick = function (event) {
    event.stopPropagation()
}

//mobile navbar 

var menu = document.querySelector('.bars')
var show = document.querySelector('.header-foot')
menu.onclick = () => {
    if(show.style.display = 'none') {
        show.style.display = 'block'
        document.querySelector('.contact1-slider-control').style.display='none'
    } 

}





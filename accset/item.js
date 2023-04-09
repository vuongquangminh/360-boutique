// item.html


// Thay doi anh
var items = document.querySelectorAll('.contact-body-left .help img')
console.log(items)
items.forEach(function(item, index) {
    item.onclick = function(e) {

        // Lấy ra src của ảnh
        var src= e.target.getAttribute('src')
        document.querySelector('.contact-body-left .show').innerHTML = `<img src="${src}" alt="">`
    }

})

// icon tren duoi anh
var icons = document.querySelectorAll('.contact-body-left .help i')
console.log(icons)
icons.forEach(function(icon, index) {
    icon.onclick = function() {
        if(index===0) {

        }
        if(index===1) {
            
        }
    }
})

// size
var sizes = document.querySelectorAll('.contact-body-right-size .item')
sizes.forEach(function(item, index) {
    item.onclick =function(e) {
        document.querySelector('.item.color').classList.remove('color')
        e.target.classList.add('color')
    }
})


// them hang

var quality = document.querySelector('.contact-body-right-quality p')
var qualityNum = parseInt(quality.textContent)
var listbtn = document.querySelectorAll('.contact-body-right-quality i')
listbtn.forEach(function(btn, index) {
    btn.onclick = function() {
        if( index===0 ) {
            if(qualityNum==0) {
                quality.innerHTML = `${qualityNum}`
            }
            else{
                qualityNum--
                console.log(qualityNum)
                quality.innerHTML = `${qualityNum}`
            }

        }

        if ( index===1 ) {
            qualityNum++
            quality.innerHTML = `${qualityNum}`
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





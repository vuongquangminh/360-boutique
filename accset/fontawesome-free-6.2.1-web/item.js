// item.html


// Thay doi anh
const names = JSON.parse(localStorage.getItem('name'))


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
console.log(qualityNum)
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




//Them gio hang hien san pham trong Cart

var addItem = document.querySelector('.contact-body-right-footer')
const name = document.querySelector('.name').textContent
const price = document.querySelector('.price').textContent
var sumPrice = []
setTimeout(() => {
    addItem.onclick = () => {
        
        classmodal.style.display = 'block'
        const soLuong = document.querySelector('.contact-body-right-quality p').textContent
        console.log(soLuong)
        const size = document.querySelector('.item.color').textContent //size
        var list_item = document.querySelector('.have-item')
        list_item.innerHTML = list_item.innerHTML + `
        <div class= "wrapper-item">   
            <div class="box-item">
                <div class="have-item-head">
                    ${name}
                </div>
                <div class="have-item-body">
                    <div class="have-item-body-size">
                        Size: ${size}
                    </div>
                    <div class="have-item-body-price">
                        ${price}
                    </div>
                </div>
                <div class="have-item-body-soluong">
                    SL: 
                    <i class="fa-solid fa-minus iconAdd"></i>
                    <div>
                        ${soLuong}
                    </div>
                    <i class="fa-solid fa-plus iconAdd"></i>
                </div>
            </div>

            <i class="fa-solid fa-xmark closeX"></i>
        </div> `
          
        
        // const i = document.querySelector('.have-item-body-price').innerText
        
        // var iNum = Number(i)
        // console.log(iNum)
        // sumPrice.push(iNum)
        // sumPrice.reduce((total, currentValue, currentIndex, arr) => {
        //     console.log(total + currentValue)
        // }, initialValue)
        
        
        const closeXs = document.querySelectorAll(".closeX")
        const deleteItem = document.querySelectorAll(".wrapper-item")

        closeXs.forEach((closeX, index) => {
            closeX.onclick = () => {
                deleteItem[index].remove()
            }
        })

        deleteItem.forEach(iteem => {
            console.log(iteem)
        })


        var addSL = document.querySelector('.have-item-body-soluong div')
        var addSLNum = parseInt(addSL.textContent)
        const iconAdd = document.querySelectorAll('.iconAdd')
        iconAdd.forEach((btn2, index) => {
            btn2.onclick = function() {
                if( index===0 ) {
                    if(addSLNum==0) {
                        addSL.innerHTML = `${addSLNum}`
        
                        
                    }
                    else{
                        addSLNum--
                        console.log(addSLNum)
                        addSL.innerHTML = `${addSLNum}`

                    }
        
                }
        
                if ( index===1 ) {
                    addSLNum++
                    addSL.innerHTML = `${addSLNum}`
        
                }
        
                
            }
            
        })
        

       

    }

}, 0)

const imgs= document.querySelectorAll('.imgs img')

imgs.forEach( (img, index) => {
    img.onclick = () => {
        console.log(img)
    }
})


const closeX = document.querySelectorAll(".closeX")
const deleteItem = document.querySelectorAll(".wrapper-item")

const openss = document.querySelector('#liveToastBtn')
openss.onclick=() => {
    document.querySelector('#liveToast').style.display='block'
}
console.log(openss)








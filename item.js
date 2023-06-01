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
var sumPrice = []


function Tinh_Tien() {
    var arr_Tiens =[]
    var List_Tiens = document.querySelectorAll('.have-item-body-price')
    List_Tiens.forEach(Tien => {
        arr_Tiens.push(parseInt(Tien.textContent))
    })
    console.log(arr_Tiens)
    var SumMoney = arr_Tiens.reduce((total, value) => total += value)
    document.querySelector('.modal-body-foot .Tong_Tien').innerHTML = `${SumMoney}`
    
}

addItem.onclick = () => {
        
        const name = document.querySelector('.name').textContent
        const soLuong = document.querySelector('.contact-body-right-quality p').textContent
        var price = (parseInt(document.querySelector('.price').textContent) * soLuong)

        const size = document.querySelector('.item.color').textContent //size


        classmodal.style.display = 'block'

        
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
                    <i class="fa-solid fa-minus iconAdd giam"></i>
                    <div>
                        ${soLuong}
                    </div>
                    <i class="fa-solid fa-plus iconAdd tang"></i>
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
        
        
// CLOSE X

        const closeXs = document.querySelectorAll(".closeX")
        const deleteItem = document.querySelectorAll(".wrapper-item")
        console.log(deleteItem)
        deleteItem.forEach((stt, index) => {
            console.log(stt)
        })

// Xoa san pham
        closeXs.forEach((closeX, index) => {
                    closeX.onclick = () => {
                        deleteItem[index].remove()
                    }
        })
// Tang giam san pham

        deleteItem.forEach(iteem => {
            var addSL = iteem.querySelector('.have-item-body-soluong div')              // Lấy giá trị số lượng sản phẩm của mỗi sản phẩm
            var addSLNum = parseInt(addSL.textContent)                                  // Biến nó thành dạng số
            var Price = iteem.querySelector('.have-item-body-price ') // Laấy ra giá của sản phẩm
            // var Money = Price * addSLNum                                                    // Tính tích giá và số lượng ban đầu ( giá * số lượng )
            // console.log(Price)
            iteem.onclick=function(e) {                                                 // Khi click vào vị trí nào của tùng sp thì nó sẽ hiện lấy element của nó
                // iteem.querySelectorAll('.iconAdd')
                // console.log(e.target)
                // console.log(e.target.classList)
                if(e.target.classList.contains('tang')) {                               // Kiểm tra nếu là tăng
                    if (addSLNum >= 0) {
                        addSLNum = addSLNum + 1
                        iteem.querySelector('.have-item-body-soluong div').innerHTML=`${addSLNum}`
                        // Tinh_Tien()  
                        
                    }else {
                        addSLNum = 0
                        iteem.querySelector('.have-item-body-soluong div').innerHTML=`${addSLNum}`
                        // Tinh_Tien()  

                    } 
                        
                }                                                                       

                if (e.target.classList.contains('giam')) {                              // Kiểm tra nếu là giảm
                    if(addSLNum == 1){
                        // addSLNum = 0
                        // iteem.querySelector('.have-item-body-soluong div').innerHTML=`${addSLNum}`
                        // Tinh_Tien()  
                        iteem.remove()

                    } else {
                        addSLNum = addSLNum - 1
                        iteem.querySelector('.have-item-body-soluong div').innerHTML=`${addSLNum}`
                        // Tinh_Tien()  

                    }

                }
                Price.innerHTML = `${((price/soLuong) * addSLNum)}`
                                                               // Khi onclick thì sẽ SET lại tích của giá và sản phẩm 
                Tinh_Tien()  

            }



            // tính tiền : tạo 1 mảng trống bên ngoài, bên trong sẽ tính toán sp rồi push ra mảng ngoài rồi dùng reduce
        })





        // deleteItem.forEach(iteem => {
        //     console.log(iteem)
            
        // let ProductNum = document.querySelectorAll('.have-item-body-soluong')
        // console.log(ProductNum)
        // ProductNum.forEach((stt, index) => {
        //         var addSL = stt.querySelectorAll('.have-item-body-soluong div')
        //         console.log(addSL)
        //         addSL.forEach((sl) => {
        //             var addSLNum = parseInt(sl.textContent)
        //         })
        //         console.log(stt)
        //         var IconOf = stt.querySelectorAll('.iconAdd')
        //         var gan
        //         if(IconOf) {
        //             IconOf.forEach((btns, index) => {
        //                 btns.onclick = function() {
        //                     if( index === 0 ) {
        //                         if(addSLNum==0) {
        //                             // addSL.innerHTML = `${addSLNum}`
        //                             gan = addSLNum
                    
                                    
        //                         }
        //                         else{
        //                             addSLNum--
        //                             console.log(addSLNum)
        //                             // addSL.innerHTML = `${addSLNum}`
        //                             gan = addSLNum
            
        //                         }
                    
        //                     }
                    
        //                     if ( index === 1 ) {
        //                         addSLNum++
        //                         // addSL.innerHTML = `${addSLNum}`
        //                         gan = addSLNum
                    
        //                     }
                    
                            
        //                 }
        //             })
        //         }
        //         return (addSL[index].innerHTML = `${gan}`)
            
        //     })
        //     // var sumbtn = iteem.querySelectorAll('.iconAdd')
        //     // if(sumbtn) {
        //     //     sumbtn.forEach((sumbtn2, index) => {
        //     //         sumbtn2.onclick = function() {
        //     //             if( index % 2 === 0 ) {
        //     //                 if(addSLNum==0) {
        //     //                     addSL.innerHTML = `${addSLNum}`
                
                                
        //     //                 }
        //     //                 else{
        //     //                     addSLNum--
        //     //                     console.log(addSLNum)
        //     //                     addSL.innerHTML = `${addSLNum}`
        
        //     //                 }
                
        //     //             }
                
        //     //             if ( index % 2 === 1 ) {
        //     //                 addSLNum++
        //     //                 addSL.innerHTML = `${addSLNum}`
                
        //     //             }
                
                        
        //     //         }
                    
        //     //     })
                
        //     // }
                
        // })


        // // var addSL = document.querySelector('.have-item-body-soluong div')
        // // console.log(addSL)
        // // var addSLNum = parseInt(addSL.textContent)

        // // let iconAdd = document.querySelectorAll('.iconAdd')

        // // iconAdd.forEach((btn2, index) => {
        // //     btn2.onclick = function() {
        // //         if( index % 2 === 0 ) {
        // //             if(addSLNum==0) {
        // //                 addSL.innerHTML = `${addSLNum}`
        
                        
        // //             }
        // //             else{
        // //                 addSLNum--
        // //                 console.log(addSLNum)
        // //                 addSL.innerHTML = `${addSLNum}`

        // //             }
        
        // //         }
        
        // //         if ( index % 2 === 1 ) {
        // //             addSLNum++
        // //             addSL.innerHTML = `${addSLNum}`
        
        // //         }
        
                
        // //     }
            
        // // })
        

        Tinh_Tien()    

}



    // let ProductNum = document.querySelectorAll('.have-item-body-soluong')
    // console.log (ProductNum)
// const imgs= document.querySelectorAll('.imgs img')

// imgs.forEach( (img, index) => {
//     img.onclick = () => {
//         console.log(img)
//     }
// })

// const openss = document.querySelector('#liveToastBtn')
// openss.onclick=() => {
//     document.querySelector('#liveToast').style.display='block'
// }
// console.log(openss)







var Sanphams = document.querySelectorAll('.contact2-columns-item')
console.log(Sanphams)

Sanphams.forEach(Sanpham => {
    Sanpham.onclick = () => {
        var gia = parseInt(Sanpham.querySelector('.contact2-columns-item p').textContent)
        localStorage.setItem("PriceCurrent", gia);
        var NameCurrent = Sanpham.querySelector('.item-sub h6').textContent
        localStorage.setItem("NameCurrent", NameCurrent);
    }
})
// Lấy giá của LocalStorage xong rồi thêm chèn vào PlacePrice
var PlacePrice = document.querySelector('.contact-body-right .price')
var updatePrice = localStorage.getItem("PriceCurrent")
console.log(updatePrice)
PlacePrice.innerHTML=`${updatePrice}.000`

// Lấy tên trong LocalStorage rồi chèn teen sp mới khi đc click
var PlaceName = document.querySelector('.contact-body-right .name')
var updateName = localStorage.getItem("NameCurrent")
PlaceName.innerHTML = `${updateName}`
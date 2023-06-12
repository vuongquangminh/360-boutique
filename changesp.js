// Chuức năng khi click vào sản phẩm nào thì nó sẽ mang giá của sp đấy sang bên item


var Sanphams = document.querySelectorAll('.contact2-columns-item')
console.log(Sanphams)
// document.querySelectorAll(".contact2-columns-item a").forEach(bb => {
//     bb.addEventListener("click", function(event) {
//         event.preventDefault();
//         // Các đoạn mã khác bạn muốn thực hiện thay thế hành động mặc định
//       });
// }
// ) 

Sanphams.forEach(Sanpham => {
    Sanpham.onclick = (e) => {
        var gia = parseInt(Sanpham.querySelector('.contact2-columns-item p').textContent)
        localStorage.setItem("PriceCurrent", gia);
        var NameCurrent = Sanpham.querySelector('.item-sub h6').textContent
        localStorage.setItem("NameCurrent", NameCurrent);
        var New_Img_src = e.target.src
        Avata_Src = '.' + New_Img_src.slice(21)
        // console.log(Avata_Src)
        localStorage.setItem("Avata_Src", Avata_Src);

        
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
// var myDefault = document.querySelectorAll('.contact2-columns-item a')
// myDefault.forEach(sd => {
//     sd.addEventListener("click", function(event) {
//         event.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click
//         // Các đoạn mã xử lý khác sau khi ngăn chặn hành động mặc định
//     });
// })

// Lấy ảnh trong LocalStorage rồi chèn vào thẻ img sp
var Show_Avt = document.querySelector('.contact-body-left .show img')
console.log(Show_Avt)
var New_Avata_Src = localStorage.getItem("Avata_Src")
Show_Avt.src = New_Avata_Src
// console.log(New_Avata_Src)
// Show_Avt.src = New_Avata_Src


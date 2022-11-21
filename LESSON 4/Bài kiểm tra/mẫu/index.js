// Danh sách sản phầm
var products = [
  {
    image:
      "https://salt.tikicdn.com/cache/200x200/ts/product/60/e0/6b/77d2e4fa05937479ffa3cf7fdc588885.jpg.webp",
    name: "Chuột không dây DAREU",
    rating: "4.5 | 400+",
    price: "1.500.000đ",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/200x200/ts/product/60/e0/6b/77d2e4fa05937479ffa3cf7fdc588885.jpg.webp",
    name: "Chuột 1 dây DAREU",
    rating: "4.5 | 400+",
    price: "1.500.000đ",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/200x200/ts/product/60/e0/6b/77d2e4fa05937479ffa3cf7fdc588885.jpg.webp",
    name: "Chuột 2 dây DAREU",
    rating: "4.5 | 400+",
    price: "1.500.000đ",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/200x200/ts/product/60/e0/6b/77d2e4fa05937479ffa3cf7fdc588885.jpg.webp",
    name: "Chuột 3 dây DAREU",
    rating: "4.5 | 400+",
    price: "1.500.000đ",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/200x200/ts/product/60/e0/6b/77d2e4fa05937479ffa3cf7fdc588885.jpg.webp",
    name: "Chuột 4 dây DAREU",
    rating: "4.5 | 400+",
    price: "1.500.000đ",
  },
];
localStorage.setItem("products", JSON.stringify(products));

// lấy ra danh sách sản phầm
var products = JSON.parse(localStorage.getItem("products"));
var dsSanPham = document.getElementById("danh-sach-san-pham");
products.forEach(function (product) {
  // Tạo ra code html bằng cách nối các chuỗi lại với nhau
  var html =
    "<div class='san-pham'><img src='" +
    product.image +
    "' alt=''><span class='ten-san-pham'>" +
    product.name +
    "</span><span class='danh-gia'>" +
    product.rating +
    "</span><div class='mua'><span>" +
    product.price +
    "</span><button>Mua</button></div>";

  // Thêm vào html
  dsSanPham.insertAdjacentHTML("beforeend", html);
});

var muaBtns = document.querySelectorAll(".san-pham .mua button");
// var giohang = document.getElementById("gio-hang");
var giohang = document.querySelector("#gio-hang");
/**
 * Duyệt qua từng phần tử ở trong muaBtns, mỗi lần duyệt thì đem
 * button tương ứng đặt vào biến btn (do chúng ta đặt tên)
 */
muaBtns.forEach(function (btn) {
  btn.onclick = function (e) {
    var tenSP =
      btn.parentElement.previousElementSibling.previousElementSibling
        .textContent;

    const spMoi = document.createElement("li");
    spMoi.textContent = tenSP;

    giohang.appendChild(spMoi);
  };
});

// getElementById, getElementsByClassName, getElementsByTagName
// querySelector: chọn ra 1 element theo cú pháp CSS selector
// querySelectorAll: chọn ra tất cả các element theo cú pháp CSS selector
// https://www.w3schools.com/cssref/css_selectors.asp
// ten-element => chọn ra các element có tên thẻ là ten-element
// .ten-class => chọn ra các element có class là ten-class
// #ten-id => chọn ra các element có id là ten-id
// ten-element.ten-class => chọn ra các element có tên thẻ là ten-element và có class là ten-class

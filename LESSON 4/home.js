const products = [
  { name: "Shoes", price: 100, type: "sport" },
  { name: "T-Shirt", price: 10, type: "casual" },
  { name: "Jeans", price: 50, type: "casual" },
  { name: "Hat", price: 20, type: "casual" },
  { name: "Socks", price: 5, type: "sport" },
];

const productsListElement = document.getElementById("products-list");

/**
 * Hàm chuyên dùng để render danh sách sản phẩm ra HTML
 *
 * @param {array} productsList Mảng chứa danh sách sản phẩm
 */
function render(productsList) {
  // Xóa hết các thẻ li cũ
  productsListElement.innerHTML = "";

  // forEach giống map() nhưng khác là chỉ duyệt chứ ko trả về
  productsList.forEach(function (element) {
    productsListElement.insertAdjacentHTML(
      // Vị trí chèn
      "beforeend",
      // Nội dung chèn
      `
        <li>
            <h2>${element.name}</h2>
            <span>${element.price}</span>
        </li>
    `
    );
  });
}
render(products);

const ascBtn = document.getElementById("asc");
const descBtn = document.getElementById("desc");

// onclick là thuộc tính của thẻ button, chứ ko phải hàm
// Onclick được gán bằng 1 function, fucntion này sẽ chỉ có 1 tham số duy nahát đại diện cho sự kiện xảy ra
ascBtn.onclick = function () {
  // Sắp xếp thứ tự giá tăng dần
  const sortedProducts = products.sort(function (a, b) {
    // Nếu giá tiền bằng nhau thì không cần đổi chỗ a và b => return 0
    if (a.price == b.price) {
      return 0;
    } else if (a.price > b.price) {
      // Nếu giá tiền của a lớn hơn b, thì đổi chỗ a và b (trả về một số lớn hơn 0) => return 1
      return 1;
    } else {
      // Nếu giá tiền của a nhỏ hơn b, thì đổi chỗ a và b => return -1 (sắp xếp a đứng trước b)
      return -1;
    }
  });

  //   Sau khi sắp xếp xong, render lại danh sách sản phẩm
  render(sortedProducts);
};

descBtn.onclick = function () {
  // Sắp xếp thứ tự giá tăng dần
  const sortedProducts = products.sort(function (a, b) {
    // Nếu giá tiền bằng nhau thì không cần đổi chỗ a và b => return 0
    if (a.price == b.price) {
      return 0;
    } else if (a.price > b.price) {
      // Nếu giá tiền của a lớn hơn b, thì đổi chỗ a và b (trả về một số nhỏ hơn 0) => return -1
      return -1;
    } else {
      // Nếu giá tiền của a nhỏ hơn b, thì đổi chỗ a và b => return 1 (sắp xếp a đứng sau b)
      return 1;
    }
  });

  //   Sau khi sắp xếp xong, render lại danh sách sản phẩm
  render(sortedProducts);
};

// Lọc sản phẩm theo thể loại
const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
  const typeSelected = filterSelect.value;
  let filteredProducts = [];
  switch (typeSelected) {
    case "sport":
      filteredProducts = products.filter(function (element) {
        if (element.type == "sport") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "casual":
      filteredProducts = products.filter(function (element) {
        if (element.type == "casual") {
          return true;
        } else {
          return false;
        }
      });
      break;

    default:
      filteredProducts = products;
      break;
  }
  render(filteredProducts);
};

document.addEventListener('DOMContentLoaded', function () {
    var calculateButton = document.getElementById('calculateButton');
    var kyHanThueSelect = document.getElementById('kyHanThue');

        // Đăng ký sự kiện cho nút tính toán
    if (calculateButton) {
        calculateButton.addEventListener('click', function(event) {
            tinhToanGiaThue(event);
            capNhatLabel(); // Cập nhật thông tin label khi nút tính toán được nhấn
        });
    } else {
        console.error('Calculate button not found');
    }

    // Đăng ký sự kiện cho dropdown kỳ hạn thuê, chỉ cập nhật label khi có thay đổi
    if (kyHanThueSelect) {
        kyHanThueSelect.addEventListener('change', capNhatLabel);
    } else {
        console.error('kyHanThue select not found');
    }
	// Thêm event listener cho trường input giá mua vào
   document.getElementById('giaMuaDuKien').addEventListener('input', onInputChanged);
	// Thêm event listener cho trường input giá mua vào
    document.getElementById('soLuongDuKien').addEventListener('input', onInputChanged);
	
});


function tinhToanGiaThue(event) {
  
  console.log('Tính toán được gọi');
  if (event) {
  event.preventDefault();
  }
  
  var giaMua = parseFloat(document.getElementById('giaMuaDuKien').value);
  var soLuong = parseFloat(document.getElementById('soLuongDuKien').value);
  var kyHanThueSelect = document.getElementById('kyHanThue');

  if (!kyHanThueSelect.selectedIndex) {
    alert('Vui lòng chọn kỳ hạn thuê.');
    return;
  }
  var selectedOption = kyHanThueSelect.options[kyHanThueSelect.selectedIndex].text;
  var kyHanThueValue = parseInt(selectedOption.match(/\d+/)[0], 10);
  

  var donGiaThueo1 = giaMua * soLuong*1.05/kyHanThueValue;
  var tongGiamualai = giaMua * soLuong*0.13;
  var tongGiaThueMualai = donGiaThueo1 * kyHanThueValue + tongGiamualai;
  
  var donGiaThueo2 = giaMua * soLuong*0.81/kyHanThueValue;
  var tongGiaThueo2 = donGiaThueo2 * kyHanThueValue;
  
  document.getElementById('donGiaThueo1').value = formatNumber(donGiaThueo1.toFixed(2));
  document.getElementById('tongGiamualai').value = formatNumber(tongGiamualai.toFixed(2));
  document.getElementById('tongGiaThueMualai').value = formatNumber(tongGiaThueMualai.toFixed(2));
  
  document.getElementById('donGiaThueo2').value = formatNumber(donGiaThueo2.toFixed(2));
  document.getElementById('tongGiaThueo2').value = formatNumber(tongGiaThueo2.toFixed(2));
 
}

function capNhatLabel() {
  console.log('Cập nhật label được gọi');
  console.log('Trước khi cập nhật labelo1:', document.getElementById('tuyChonLabel1'));
  console.log('Trước khi cập nhật labelo2:', document.getElementById('tuyChonLabel2'));
  // Your label update logic...
    var kyHanThueSelect = document.getElementById('kyHanThue');
    if (kyHanThueSelect) {
        var kyHanThue = kyHanThueSelect.options[kyHanThueSelect.selectedIndex].text;
        var labelo1 = document.getElementById('tuyChonLabel1');
        var labelo2 = document.getElementById('tuyChonLabel2');

        if (labelo1 && labelo2) {
            labelo1.innerHTML = '<strong>TÙY CHỌN 1: THUÊ VÀ BẠN MUA LẠI SAU KHI THUÊ</strong> ' + kyHanThue;
            labelo2.innerHTML = '<strong>TÙY CHỌN 2: HOÀN LẠI MÁY CHO NAGANEXT</strong> ' + kyHanThue;
        } else {
            console.error('One or more labels not found');
        }
    } else {
        console.error('kyHanThue select not found in capNhatLabel');
    }
	console.log('Sau khi cập nhật labelo1:', document.getElementById('tuyChonLabel1'));
	console.log('Sau khi cập nhật labelo2:', document.getElementById('tuyChonLabel2'));
	
	// bat dau cho ham chon tu dropdownlist 
	// Lấy giá trị từ các trường input và dropdownlist
  var product = document.getElementById('productInput').value;
  var quantity = document.getElementById('soLuongDuKien').value;
  var price = document.getElementById('giaMuaDuKien').value;
  var term = document.getElementById('kyHanThue').value;

  // Giả sử bạn đã có productSelect là phần tử <select> của bạn
  var productSelect = document.getElementById('productInput');
  var selectedText = productSelect.options[productSelect.selectedIndex].text;
  document.getElementById('selectedProduct').innerHTML = '<strong>Sản phẩm bạn đã chọn:</strong> ' + selectedText;

  document.getElementById('selectedQuantity').innerHTML = '<strong>Số lượng bạn đã chọn:</strong> ' + quantity;
 
  document.getElementById('selectedPrice').innerHTML = '<strong>Đơn giá mua vào dự kiến:</strong> ' + price;
  
  document.getElementById('selectedTerm').innerHTML = '<strong>Kỳ hạn thuê bạn đã chọn:</strong> ' + term;


  // Hiển thị info-box nếu tất cả các trường đều có giá trị
  if(product && quantity && price && term) {
    document.getElementById('infoBox').style.display = 'block';
  } else {
    document.getElementById('infoBox').style.display = 'none';
	alert('Vui lòng nhập đầy đủ thông tin trước khi nhấn nút "Tính toán gói thuê", đặc biệt chú ý nhập 3 tham số gồm CHỌN KỲ HẠN THUÊ, số lượng, giá mua vào nhé bạn !');
	//HoangNA: can co alert de nguoi dung can phai nhap so lieu vào moi cho tinh toán 
  }  
}

function formatNumber(num) {
   return num.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });
}

// Hàm này sẽ được gọi mỗi khi có sự thay đổi trên trường nhập liệu
function onInputChanged(event) {
   // Lấy giá trị hiện tại của trường input, loại bỏ mọi ký tự không phải là số hoặc dấu chấm
  let inputNumber = event.target.value.replace(/[^0-9.]/g, '');

  // Nếu sau khi loại bỏ các ký tự không hợp lệ mà không còn ký tự nào, trả về chuỗi rỗng
  if(inputNumber === '' || isNaN(inputNumber)) {
    event.target.value = '';
    return;
  }

  // Chuyển đổi chuỗi nhập vào thành số
  inputNumber = parseFloat(inputNumber);

  // Định dạng số và cập nhật lại trường input
  event.target.value = inputNumber.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  });
}

function formatInputData(value) {
    // Chuyển giá trị hiện tại thành số thực, loại bỏ các ký tự không phải chữ số.
    let num = parseFloat(value.replace(/[^\d\.]/g, ''));
    
    // Kiểm tra xem số có hợp lệ hay không, nếu không trả về chuỗi rỗng.
    if (isNaN(num)) {
        return '';
    }

    // Chuyển số thành chuỗi có dấu phẩy cho hàng nghìn.
    return num.toLocaleString('en-US', {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
}
//==========================================================================
// Ham cho phep section product selected showing tại section id="product-display"

// Giả sử bạn có một mảng chứa đường dẫn tới các ảnh của sản phẩm
var images = [
  'assets/img/products/standing.AC.type.standard.1.png',
  'assets/img/products/standing.AC.type.circle.2.png',
  'assets/img/products/non.Inverter.wall.AC.9k.type.standard.3.png',
  'assets/img/products/Inverter.wall.AC.9k.type.standard.4.png',
  'assets/img/products/Cassette.ceiling.AC.type.standard.5.png',
  // thêm các đường dẫn ảnh khác tương tự
];

// Biến để theo dõi ảnh hiện tại đang được hiển thị
var currentIndex = 0;

function nextImage() {
  // Tăng currentIndex, nếu đến cuối mảng thì quay lại 0
  currentIndex = (currentIndex + 1) % images.length;
  // Cập nhật src của thẻ img
  document.getElementById('productImg').src = images[currentIndex];
}

function previousImage() {
  // Giảm currentIndex, nếu về âm thì chuyển tới ảnh cuối cùng của mảng
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  // Cập nhật src của thẻ img
  document.getElementById('productImg').src = images[currentIndex];
}


// hien thi cac thong so ky thuat của san pham*/

// Một đối tượng lưu trữ thông tin của các sản phẩm
var products = [
	{
    name: 'Điều hòa tủ đứng tiêu chuẩn Nagakawa',
    image: 'assets/img/products/standing.AC.type.standard.1.png',
    specs: { Power': '2000W',
			'Weight': '2kg',
			// Các thông số khác
			}
	},

	{
	name: 'Điều hòa tủ tròn 2 chiều Nagakawa',
    image: 'assets/img/products/standing.AC.type.circle.2.png',
    specs: { Power': '3000W',
			'Weight': '4kg',
			// Các thông số khác
			}
	},

	{
	name: 'Điều hòa treo tường 1 chiều Nagakawa',
    image: 'assets/img/products/non.Inverter.wall.AC.9k.type.standard.3.png',
    specs: { Power': '2400W',
			'Weight': '12kg',
			// Các thông số khác
			}
	},

	{
	name: 'Điều hòa treo tường Inverter 1 chiều Nagakawa',
    image: 'assets/img/products/Inverter.wall.AC.9k.type.standard.4.png',
    specs: { Power': '2040W',
			'Weight': '26kg',
			// Các thông số khác
			}
	},

	{
	name: 'Điều hòa âm trần Casette Nagakawa',
    image: 'assets/img/products/Cassette.ceiling.AC.type.standard.5.png',
    specs: { Power': '600W',
			'Weight': '14kg',
			// Các thông số khác
			}
	},
];

function changeProduct(productId) {
    // Tìm sản phẩm dựa trên productId
  var product = products.find(p => p.id === productId);
  if (product) {
    // Cập nhật hình ảnh sản phẩm
    document.getElementById('productImg').src = product.image;

    // Cập nhật bảng thông số kỹ thuật
    var specsTable = document.getElementById('productSpecs');
    specsTable.innerHTML = ''; // Xóa thông số cũ trước khi thêm mới

    for (var specName in product.specs) {
      var row = specsTable.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.textContent = specName;
      cell2.textContent = product.specs[specName];
    }
  } else {
    console.error('Sản phẩm không tồn tại với ID:', productId);
  }
}	

function updateSpecs(specs) {
  // Xóa các thông số kỹ thuật hiện tại
  var specsTable = document.getElementById('productSpecs');
  specsTable.innerHTML = '';

  // Thêm các hàng mới vào bảng thông số kỹ thuật
  for (var key in specs) {
    var row = specsTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = key;
    cell2.textContent = specs[key];
  }
}
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
});



function tinhToanGiaThue(event) {
  
  console.log('Tính toán được gọi');
  event.preventDefault();
  
  var giaMua = parseFloat(document.getElementById('giaMuaDuKien').value) || 0;
  var soLuong = parseFloat(document.getElementById('soLuongDuKien').value) || 0;
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
  
  document.getElementById('donGiaThueo1').value = donGiaThueo1.toFixed(0);
  document.getElementById('tongGiamualai').value = tongGiamualai.toFixed(0);
  document.getElementById('tongGiaThueMualai').value = tongGiaThueMualai.toFixed(0);
  
  document.getElementById('donGiaThueo2').value = donGiaThueo2.toFixed(0);
  document.getElementById('tongGiaThueo2').value = tongGiaThueo2.toFixed(0);
  
  //capNhatLabel();
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
  }
  
}


document.addEventListener('DOMContentLoaded', function () {
    var calculateButton = document.getElementById('calculateButton');
    var kyHanThueSelect = document.getElementById('kyHanThue');

    if (calculateButton) {
        calculateButton.addEventListener('click', tinhToanGiaThue);
    } else {
        console.error('Calculate button not found');
    }

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
  
  //var kyHanThueSelect = document.getElementById('kyHanThue');
  //var selectedOption = kyHanThueSelect.options[kyHanThueSelect.selectedIndex].text;
  //var kyHanThueValue = parseInt(selectedOption.match(/\d+/)[0], 10);
  
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
  
  document.getElementById('donGiaThueo1').value = donGiaThueo1.toFixed(2);
  document.getElementById('tongGiamualai').value = tongGiamualai.toFixed(2);
  document.getElementById('tongGiaThueMualai').value = tongGiaThueMualai.toFixed(2);
  
  document.getElementById('donGiaThueo2').value = donGiaThueo2.toFixed(2);
  document.getElementById('tongGiaThueo2').value = tongGiaThueo2.toFixed(2);
  
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
            labelo1.textContent = "TÙY CHỌN 1: THUÊ VÀ BẠN MUA LẠI SAU KHI THUÊ " + kyHanThue;
            labelo2.textContent = "TÙY CHỌN 2: HOÀN LẠI MÁY CHO NAGANEXT " + kyHanThue;
        } else {
            console.error('One or more labels not found');
        }
    } else {
        console.error('kyHanThue select not found in capNhatLabel');
    }
	console.log('Sau khi cập nhật labelo1:', document.getElementById('tuyChonLabel1'));
	console.log('Sau khi cập nhật labelo2:', document.getElementById('tuyChonLabel2'));
}


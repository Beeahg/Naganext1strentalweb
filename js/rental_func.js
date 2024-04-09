document.addEventListener('DOMContentLoaded', function () {
  var calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', function(event) {
    tinhToanGiaThue(event);
  });
});

function tinhToanGiaThue(event) {
  event.preventDefault();

  var giaMua = parseFloat(document.getElementById('giaMuaDuKien').value) || 0;
  var soLuong = parseFloat(document.getElementById('soLuongDuKien').value) || 0;
  var kyHan = document.getElementById('kyHanThue').value;

  var donGiaThueo1 = giaMua * soLuong + 1000;
  var tongGiamualai = giaMua * soLuong + 2000;
  var tongGiaThueMualai = giaMua * soLuong + 3000;
  
  var donGiaThueo2 = giaMua * soLuong + 4000;
  var tongGiaThueo2 = giaMua * soLuong + 5000;
  

  document.getElementById('donGiaThueo1').value = donGiaThueo1.toFixed(2);
  document.getElementById('tongGiamualai').value = tongGiamualai.toFixed(2);
  document.getElementById('tongGiaThueMualai').value = tongGiaThueMualai.toFixed(2);
  
  document.getElementById('donGiaThueo2').value = donGiaThueo2.toFixed(2);
  document.getElementById('tongGiaThueo2').value = tongGiaThueo2.toFixed(2);
  
  //capNhatLabel();
}

function capNhatLabel() {
	var kyHanThueSelect = document.getElementById('kyHanThue');
    var kyHanThue = kyHanThueSelect.options[kyHanThueSelect.selectedIndex].text;



  var labelo1 = document.getElementById('tuyChonLabel1');
  var labelo2 = document.getElementById('tuyChonLabel2');

  labelo1.textContent = "TÙY CHỌN 1: THUÊ VÀ BẠN MUA LẠI SAU KHI THUÊ " + kyHanThue;
  labelo2.textContent = "TÙY CHỌN 2: HOÀN LẠI MÁY CHO NAGANEXT " + kyHanThue;
}

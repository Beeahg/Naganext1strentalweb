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

  var donGiaThue = giaMua * soLuong + 1000;
  var tongGiamualai = giaMua * soLuong + 2000;
  var tongGiaThueMualai = giaMua * soLuong + 3000;
  
  var donGiaThueo2 = giaMua * soLuong + 1000;
  var tongGiaThueo2 = giaMua * soLuong + 2000;
  

  document.getElementById('donGiaThue').value = donGiaThue.toFixed(2);
  document.getElementById('tongGiamualai').value = tongGiamualai.toFixed(2);
  document.getElementById('tongGiaThueMualai').value = tongGiaThueMualai.toFixed(2);
  
  document.getElementById('donGiaThueo2').value = donGiaThueo2.toFixed(2);
  document.getElementById('tongGiaThueo2').value = tongGiaThueo2.toFixed(2);
  
  var kyHan = document.getElementById('kyHanThue').value);
  var kyHanLabel = document.getElementById('kyHanThue'); 
  capNhatLabel();
}

function capNhatLabel() {
   var kyHanThue = kyHanThueSelect.options[kyHanThueSelect.selectedIndex].text;
   var kyHanThueSelect = document.getElementById('kyHanThue');


  var labelo1 = document.getElementById('tuyChonLabel1');
  var labelo2 = document.getElementById('tuyChonLabel2');

  labelo1.textContent = "TÙY CHỌN 1: THUÊ VÀ BẠN MUA LẠI SAU KHI THUÊ " + kyHanThue;
  labelo2.textContent = "TÙY CHỌN 2: HOÀN LẠI MÁY CHO NAGANEXT " + kyHanThue;
}

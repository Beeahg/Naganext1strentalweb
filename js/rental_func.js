document.addEventListener('DOMContentLoaded', function () {
  var calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', function(event) {
    tinhToanGiaThue(event);
    capNhatLabel();
  });
});

function tinhToanGiaThue(event) {
  event.preventDefault();

  var giaMua = parseFloat(document.getElementById('giaMuaDuKien').value) || 0;
  var soLuong = parseFloat(document.getElementById('soLuongDuKien').value) || 0;

  var donGiaThue = giaMua * soLuong + 1000;
  var tongGiamualai = giaMua * soLuong + 2000;
  var tongGiaThueMualai = giaMua * soLuong + 3000;

  document.getElementById('donGiaThue').value = donGiaThue.toFixed(2);
  document.getElementById('tongGiamualai').value = tongGiamualai.toFixed(2);
  document.getElementById('tongGiaThueMualai').value = tongGiaThueMualai.toFixed(2);
  
  var kyHanThue = document.getElementById('kyHanThue');
  capNhatLabel(kyHanThue);
}

function capNhatLabel(kyHanThue) {
  // Bạn cần truyền biến kyHanThue vào hàm này
  var kyHanThueText = kyHanThue.options[kyHanThue.selectedIndex].text;

  var labelo1 = document.getElementById('tuyChonLabel1');
  var labelo2 = document.getElementById('tuyChonLabel2');

  labelo1.textContent = "TÙY CHỌN 1: THUÊ VÀ BẠN MUA LẠI SAU KHI THUÊ " + kyHanThueText;
  labelo2.textContent = "TÙY CHỌN 2: HOÀN LẠI MÁY CHO NAGANEXT " + kyHanThueText;
}

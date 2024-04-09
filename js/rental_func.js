document.addEventListener('DOMContentLoaded', function () {
  var calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', tinhToanGiaThue);
});

function tinhToanGiaThue(event) {
   event.preventDefault(); // Ngăn chặn hành động mặc định của form mỗi khi thực hiện hàm qua nhấn nút tính toán

    var giaMua = parseFloat(document.getElementById('giaMuaDuKien').value) || 0;
    var soLuong = parseFloat(document.getElementById('soLuongDuKien').value) || 0;

    var donGiaThue = giaMua + 1000;
    var tongGiamualai = giaMua + 2000;
    var tongGiaThueMualai = giaMua + 3000;

    var donGiaThueo2 = giaMua + 4000;
    var tongGiaThueo2 = giaMua + 5000;

    document.getElementById('donGiaThue').value = donGiaThue.toFixed(2);
    document.getElementById('tongGiamualai').value = tongGiamualai.toFixed(2);
    document.getElementById('tongGiaThueMualai').value = tongGiaThueMualai.toFixed(2);

    document.getElementById('donGiaThueo2').value = donGiaThueo2.toFixed(2);
    document.getElementById('tongGiaThueo2').value = tongGiaThueo2.toFixed(2);

    capNhatLabel();
}

function capNhatLabel() {
    var kyHanThueSelect = document.getElementById('kyHanThue'); // Lấy phần tử select
    var kyHanThue = kyHanThueSelect.options[kyHanThueSelect.selectedIndex].text; // Lấy text của tùy chọn được chọn

    var labelo1 = document.getElementById('tuyChonLabel1');
    var labelo2 = document.getElementById('tuyChonLabel2');

    labelo1.textContent = "TÙY CHỌN 1: THUÊ VÀ BẠN MUA LẠI SAU KHI THUÊ " + kyHanThue; // Cập nhật nội dung label option 1
    labelo2.textContent = "TÙY CHỌN 2: HOÀN LẠI MÁY CHO NAGANEXT " + kyHanThue; // Cập nhật nội dung label option 2
}

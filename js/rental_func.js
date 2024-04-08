
function tinhToanGiaThue(event) {
   event.preventDefault(); // Ngăn chặn hành động mặc định của form mỗi khi thực hiện hàm qua nhấn nút tính toán
    
    // Giả sử giaMua là số, bạn phải chuyển giá trị từ chuỗi sang số
    var giaMua = parseFloat(document.getElementById('giaMuaDuKien').value);
	// gia su so luong là so 
	var soLuong = parseFloat(document.getElementById('soLuongDuKien').value);
	//Gia su so thang thue la so 
	
    
    // Giả sử bạn có các phép tính như sau:
    var donGiaThue = giaMua + 1000; // Thêm 1000 vào giá mua
    var tongGiamualai = giaMua + 2000; // Thêm 2000 vào giá mua
    var tongGiaThueMualai = giaMua + 3000; // Thêm 3000 vào giá mua
	
	var donGiaThueo2 = giaMua + 4000; // Thêm 4000 vào giá mua
    var tongGiaThueo2 = giaMua + 5000; // Thêm 5000 vào giá mua

    // Gán giá trị đã tính vào các input tương ứng
    document.getElementById('donGiaThue').value = donGiaThue;
    document.getElementById('tongGiamualai').value = tongGiamualai;
    document.getElementById('tongGiaThueMualai').value = tongGiaThueMualai;
	
	 // Gán giá trị đã tính vào các input tương ứng
    document.getElementById('donGiaThueo2').value = donGiaThueo2;
    document.getElementById('tongGiaThueo2').value = tongGiaThueo2;
	
 }

function capNhatLabel() {
  var kyHanThue = document.getElementById('kyHanThue').value; // Lấy giá trị được chọn
  var labelo1 = document.getElementById('tuyChonLabel');
  labelo1.textContent = "TÙY CHỌN 1: THUÊ VÀ BẠN MUA LẠI SAU KHI THUÊ " + kyHanThue; // Cập nhật nội dung label option 1
  var labelo2 = document.getElementById('tuyChonLabel');
  labelo1.textContent = "TÙY CHỌN 2: TÙY CHỌN 2: HOÀN LẠI MÁY CHO NAGANEXT " + kyHanThue; // Cập nhật nội dung label option 1
  
}
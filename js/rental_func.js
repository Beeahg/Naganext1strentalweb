
function tinhToanGiaThue(event) {
	event.preventDefault(); // Thêm dòng này để ngăn việc gửi form
    var giaMua = document.getElementById('giaMuaDuKien').value;
    document.getElementById('giaMua').value = giaMua;
	
	var donGiaThue = document.getElementById('giaMuaDuKien').value + 1;
    document.getElementById('donGiaThue').value = giaMua;
	
	 var tongGiamualai = document.getElementById('giaMuaDuKien').value+2;
    document.getElementById('tongGiamualai').value = giaMua;
	
	var tongGiaThueMualai = document.getElementById('giaMuaDuKien').value+3;
    document.getElementById('tongGiaThueMualai').value = giaMua;
	
 }


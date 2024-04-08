
function tinhToanGiaThue(event) {
	event.preventDefault(); // Thêm dòng này để ngăn việc gửi form
    var giaMua = document.getElementById('giaMuaDuKien').value;
    document.getElementById('giaMua').value = giaMua;
	
	var donGiaThue = document.getElementById('giaMuaDuKien').value;
    document.getElementById('donGiaThue').value = giaMua+1;
	
	 var tongGiamualai = document.getElementById('giaMuaDuKien').value;
    document.getElementById('tongGiamualai').value = giaMua+2;
	
	var tongGiaThueMualai = document.getElementById('giaMuaDuKien').value;
    document.getElementById('tongGiaThueMualai').value = giaMua+3;
	
 }


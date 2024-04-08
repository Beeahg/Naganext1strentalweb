
function tinhToanGiaThue() {
	event.preventDefault(); // Thêm dòng này để ngăn việc gửi form
    var giaMua = document.getElementById('giaMuaDuKien').value;
    document.getElementById('giaMua').value = giaMua;
 }


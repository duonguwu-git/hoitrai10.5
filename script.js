const fortunes = [
    {t: "VẬN MAY KIẾN TẠO", d: "Thời tới cản không kịp! Vận may của bạn đang 'on top' giống như đội tuyển Bóng Chuyền Nam 10/5 vừa hốt chức Vô Địch vậy đó!", gift: true, type: 'good'},
    {t: "CẨN TRỌNG KHẨU THIỆT", d: "Quẻ này hơi 'xu'. Hãy bớt sân si và bình tĩnh lại như cách đội bóng đá 10/5 giữ hạng Nhì đầy kiêu hãnh nhé!", gift: false, type: 'bad'},
    {t: "GIÀU NGANG NGƯỢC", d: "Tiền vào như nước. Năm tới bạn sẽ giàu tới mức đủ sức tài trợ nước uống cho dàn siêu sao bóng chuyền lớp mình luôn!", gift: false, type: 'good'},
    {t: "TU TÂM DƯỠNG TÍNH", d: "Bớt soi mói lại ní ơi. Hãy tập trung tu dưỡng để đẹp trai xinh gái như dàn vận động viên của 10/5 đi nào!", gift: false, type: 'bad'},
    {t: "BẬC THẦY FLEXING", d: "Bạn sắp có một thành tích chấn động, y hệt cái cúp Vô Địch Bóng Chuyền đang nằm trong tay lớp 10/5 nè!", gift: false, type: 'good'},
    {t: "KIẾP NẠN CỘT SỐNG", d: "Thức khuya ít thôi kẻo cột sống kêu cứu. Phải khỏe mạnh thì mới đi cổ vũ bóng chuyền, bóng đá cho lớp được chứ!", gift: false, type: 'bad'}
];

// Hàm lấy kết quả dựa trên ngày sinh (cố định)
function getFortune(dob) {
    let sum = 0;
    for (let char of dob.replace(/-/g, "")) sum += parseInt(char);
    return fortunes[sum % fortunes.length];
}

// Hàm hiển thị (Bạn cần đảm bảo file HTML cũ có các ID: resTitle, resDesc)
function showResult(res) {
    document.getElementById('resTitle').innerText = res.t;
    document.getElementById('resDesc').innerText = res.d;
    
    if(res.type === 'good') {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
        document.body.classList.add('rain-active');
        alert("Quẻ này hơi buồn, hãy sống tích cực hơn nhé!");
    }
}

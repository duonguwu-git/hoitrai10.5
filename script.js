// 1. Khai báo âm thanh (Dùng link trực tiếp)
const audioShake = new Audio('https://www.soundjay.com/misc/sounds/shaking-ice-in-cup-1.mp3');
const audioWin = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
const audioSad = new Audio('https://www.myinstants.com/media/sounds/thud.mp3');

const fortunes = [
    {t: "VẬN MAY KIẾN TẠO", d: "Thời tới cản không kịp! Vận may của bạn đang 'on top' giống như đội tuyển Bóng Chuyền Nam 10/5 vừa VÔ ĐỊCH vậy đó!", gift: true, type: 'good'},
    {t: "CẨN TRỌNG KHẨU THIỆT", d: "Quẻ này hơi 'xu'. Hãy bớt sân si và bình tĩnh lại như cách đội bóng đá 10/5 giữ hạng Nhì đầy kiêu hãnh nhé!", gift: false, type: 'bad'},
    {t: "GIÀU NGANG NGƯỢC", d: "Tiền vào như nước. Năm tới bạn giàu tới mức đủ sức bao trọn nước uống cho dàn siêu sao 10/5 luôn!", gift: false, type: 'good'},
    {t: "BẬC THẦY FLEXING", d: "Bạn sắp có thành tích chấn động, y hệt cái cúp Vô Địch Bóng Chuyền đang nằm trong tay lớp mình nè!", gift: false, type: 'good'},
    {t: "KIẾP NẠN CỘT SỐNG", d: "Thức khuya ít thôi kẻo cột sống kêu cứu. Phải khỏe mạnh thì mới đi cổ vũ bóng chuyền, bóng đá cho lớp được!", gift: false, type: 'bad'}
];

function startAction() {
    const dob = document.getElementById('dob').value;
    if(!dob) return alert("Nhập ngày sinh mới linh ní ơi!");

    // PHÁT ÂM THANH LẮC NGAY KHI BẤM
    audioShake.play().catch(() => console.log("Trình duyệt chặn nhạc, cần chạm màn hình trước"));

    document.getElementById('ui-input').style.display = 'none';
    const ong = document.getElementById('ong-que');
    ong.style.display = 'block';
    ong.classList.add('shaking');

    setTimeout(() => {
        ong.style.display = 'none';
        showFan(); // Hàm này phải có trong file index hoặc js
    }, 2000);
}

function renderResult(res) {
    if(res.type === 'good') {
        audioWin.play(); // Âm thanh thắng
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
        audioSad.play(); // Âm thanh buồn
        document.body.style.backgroundColor = "#1a1a2e"; // Đổi nền tối cho quẻ xấu
    }
    document.getElementById('res-title').innerText = res.t;
    document.getElementById('res-desc').innerText = res.d;
    document.getElementById('ui-modal').style.display = 'flex';
}

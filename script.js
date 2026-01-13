// Link âm thanh online
const sndShake = new Audio('https://www.soundjay.com/misc/sounds/shaking-ice-in-cup-1.mp3');
const sndWin = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3'); // Tiếng chuông thắng
const sndSad = new Audio('https://www.myinstants.com/media/sounds/thud.mp3'); // Tiếng "bùm" buồn

function startAction() {
    const dob = document.getElementById('dob').value;
    if(!dob) return alert("Nhập ngày sinh đã ní ơi!");

    // PHÁT ÂM THANH LẮC (Phải đặt ở đây để trình duyệt cho phép)
    sndShake.play().catch(e => console.log("Chưa phát được nhạc: ", e));

    document.getElementById('ui-input').style.display = 'none';
    const ong = document.getElementById('ong-que');
    ong.style.display = 'block';
    ong.classList.add('shaking');

    setTimeout(() => {
        ong.style.display = 'none';
        showFan();
    }, 2000);
}

function renderResult(res) {
    const modal = document.getElementById('ui-modal');
    
    if(res.type === 'good') {
        // Phát âm thanh chiến thắng
        sndWin.play();
        // Hiệu ứng pháo hoa
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
        // Phát âm thanh buồn
        sndSad.play();
        document.body.classList.add('rain-active');
    }

    document.getElementById('res-title').innerText = res.t;
    document.getElementById('res-desc').innerText = res.d;
    modal.style.display = 'flex';
}


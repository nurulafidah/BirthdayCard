const birthdayMessage = document.getElementById('birthdayMessage');

birthdayMessage.addEventListener('click', function() {
    alert('Terima kasih udah baca!');
});

const greetingText = "Selamat Ulang Tahun!";
const greetingElement = document.querySelector('.greeting');
let birthday = 0;

function type() {
    if (birthday < greetingText.length) {
        greetingElement.textContent += greetingText[birthday];
        birthday++;
        setTimeout(type, 100);
    } else {
        // Tambahkan kelas 'idle' setelah teks selesai ditampilkan
        greetingElement.classList.add('idle');
    }
}

type();

// Animasi Loading
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loading-screen").classList.add("hidden");
        document.querySelector(".container").classList.remove("hidden");
    }, 3000);
});

// Step by Step Form
let currentStep = 0;
const formSteps = document.querySelectorAll(".form-step");

function nextStep() {
    formSteps[currentStep].classList.remove("active");
    currentStep++;
    if (currentStep < formSteps.length) {
        formSteps[currentStep].classList.add("active");
    }
}

// Tampilkan Halaman Rating Setelah Form Selesai
function showRatingPage() {
    document.querySelector(".form-container").classList.add("hidden");
    document.querySelector(".rating-container").classList.remove("hidden");
}

// Pilih Rating Bintang
document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function() {
        let value = this.getAttribute("data-value");
        document.getElementById("ratingValue").innerText = `Anda memberi ${value} bintang!`;
        document.querySelectorAll(".star").forEach(s => s.classList.remove("active"));
        this.classList.add("active");
    });
});

// Kirim Data ke WhatsApp
function sendToWhatsApp() {
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let alamat = document.getElementById("alamat").value;
    let email = document.getElementById("email").value;
    let keluhan = document.getElementById("keluhan").value || "Tidak ada";
    let rating = document.getElementById("ratingValue").innerText.replace("Anda memberi ", "").replace(" bintang!", "");

    let message = `Halo! Berikut data saya:\nNama: ${nama}\nUmur: ${umur}\nAlamat: ${alamat}\nEmail: ${email}\nKeluhan: ${keluhan}\nRating: ${rating} bintang`;
    let whatsappURL = `https://api.whatsapp.com/send?phone=6289519705542&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

//lafu
// YouTube API
var tag = document.createElement('script');
tag.src = "https://youtu.be/0YC5lO3IM6Q?si=Q1DHz8kjyScDlUmR";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'Q1DHz8kjyScDlUmR', // Ganti dengan ID video YouTube
        events: {
            'onReady': function(event) {
                event.target.playVideo();
            }
        }
    });
}

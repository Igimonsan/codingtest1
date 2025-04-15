function orderViaWhatsApp() {
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp kamu
    const message = encodeURIComponent("Halo, saya ingin memesan Kentang Goreng Crispy.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
  
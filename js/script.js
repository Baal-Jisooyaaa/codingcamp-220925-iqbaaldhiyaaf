// Script untuk mengisi ucapan sambutan (Hi Name)
document.addEventListener('DOMContentLoaded', function() {
  let name = prompt("Masukkan nama Anda:");
  if (name) {
    document.getElementById("welcomeText").textContent = "Hi " + name + ", Welcome to Website";
  }
});

// Validasi form & tampilkan hasil input
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault(); // agar tidak reload

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  // Validasi sederhana
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Semua field harus diisi!");
    return;
  }

  // Tampilkan hasil input
  document.getElementById("formResult").innerHTML = `
    <h3>Hasil Input:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});

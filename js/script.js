// Greetings Script
const greetingText = document.getElementById("greeting-text");
const greetings = ["Hello", "Bonjour", "Ciao", "Ni Hao", "Hola", "Ohayo", "Halo", "Hej", "Shalom", "Privet","Salaam", "Hai"]; // Tambahkan pesan sapaan dalam berbagai bahasa

let index = 0;

function displayGreeting() {
    greetingText.textContent = greetings[index];
    index = (index + 1) % greetings.length;
}

// Atur interval untuk menampilkan pesan sapaan dengan waktu delay (misalnya, 2 detik)
setInterval(displayGreeting, 2000);
// End Greetings Script

// Bagian slide toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

// end slide toggle


// Mengirimkan email

function sendMail() {
var params = {
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value,
};

const serviceID = "service_f0jgace";
const templateID = "template_ad78yfk";


emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Pesan Sudah terkirim");

    })
    .catch((err) => console.log(err));
}

// end bagian mengirimkan email
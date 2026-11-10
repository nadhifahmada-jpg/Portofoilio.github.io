
// PESAN SELAMAT DATANG
window.addEventListener("load", function() {
    alert("Selamat Datang di Portofolio Saya!");
});

// EFEK TULISAN BERJALAN
const tulisan = [
    "Mahasiswa Baru",
    "Semangat Belajar",
    "Terus Berkembang"
];

let indexTulisan = 0;
let indexHuruf = 0;
let menghapus = false;

function efekMengetik() {

    const tempat = document.getElementById("teks-berjalan");

    if (!tempat) return;

    let teks = tulisan[indexTulisan];

    if (menghapus) {
        indexHuruf--;
    } else {
        indexHuruf++;
    }

    tempat.textContent = teks.substring(0, indexHuruf);

    let kecepatan = menghapus ? 60 : 100;

    if (!menghapus && indexHuruf === teks.length) {
        menghapus = true;
        kecepatan = 1200;
    }

    else if (menghapus && indexHuruf === 0) {
        menghapus = false;
        indexTulisan = (indexTulisan + 1) % tulisan.length;
        kecepatan = 400;
    }

    setTimeout(efekMengetik, kecepatan);
}

efekMengetik();

// TOMBOL KEMBALI KE ATAS
const tombolAtas = document.createElement("button");

tombolAtas.innerHTML = "↑";
tombolAtas.id = "tombol-atas";

document.body.appendChild(tombolAtas);

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        tombolAtas.style.display = "block";
    } else {
        tombolAtas.style.display = "none";
    }

});

tombolAtas.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ANIMASI SAAT HALAMAN DIGULIR
const bagian = document.querySelectorAll("section");

const pengamat = new IntersectionObserver(function(hasil) {

    hasil.forEach(function(item) {

        if (item.isIntersecting) {
            item.target.classList.add("muncul");
        }

    });

}, {
    threshold: 0.15
});

bagian.forEach(function(item) {
    pengamat.observe(item);
});

// TAHUN OTOMATIS DI FOOTER
const tahun = new Date().getFullYear();

document.querySelector("footer p").textContent =
    "© " + tahun + " Portofolio Diri | Dibuat oleh Nama Kamu";

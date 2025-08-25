document.addEventListener("DOMContentLoaded", function() {
    const photoContainer = document.getElementById("photo-container");
    const photos = [
        "images/gallery/foto1.jpeg",
        "images/gallery/foto2.jpeg",
        "images/gallery/foto3.jpeg",
        "images/gallery/foto4.jpeg",
        "images/gallery/foto5.jpeg",
        "images/gallery/foto6.jpeg",
        "images/gallery/foto7.jpeg",
        "images/gallery/foto8.jpeg",
        "images/gallery/foto9.jpeg",
        "images/gallery/foto10.jpeg",
        "images/gallery/foto11.jpeg",
        "images/gallery/foto12.jpeg",
        "images/gallery/foto13.jpeg",
        "images/gallery/foto14.jpeg",
        "images/gallery/foto15.jpeg",
        "images/gallery/foto16.jpeg",
        "images/gallery/foto17.jpeg",
        "images/gallery/foto18.jpeg",
        "images/gallery/foto19.jpeg",
        "images/gallery/foto20.jpeg",
        "images/gallery/foto21.jpeg"
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(photos);
    const selectedPhotos = photos.slice(0, 12);

    selectedPhotos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo;
        img.alt = "Gallery Photo";
        photoContainer.appendChild(img);
    });
});



// Menunggu semua konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Ambil semua elemen kartu tim
    const teamMembers = document.querySelectorAll('.team-member');

    // 2. Lakukan perulangan untuk setiap kartu tim
    teamMembers.forEach(member => {
        
        // 3. Tambahkan event listener 'click' pada setiap kartu
        member.addEventListener('click', function() {
            
            // 4. Cari elemen motivasi di dalam kartu yang di-klik
            const quote = member.querySelector('.motivation-quote');
            
            // 5. Tambahkan atau hapus class 'show' untuk memunculkan/menyembunyikan
            if (quote) {
                quote.classList.toggle('show');
            }
            
        });
    });

});
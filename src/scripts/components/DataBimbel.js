const restaurantsData = {
    restaurants: [
      {
        "id": "6c7bqjgi84kcowlqdz",
        "name": "Bimbel SD SMP SMA UTBK",
        "description": "Visi : Mencerdaskan Masyarakat. Misi : Menyelenggarakan Bimbel dan Kursus yang Amanah dan manfaat serta Profesional.",
        "pictureId":  "../images/heros/logo ke 2 Bimbel SD SMP SMA UTBK.jpg",
        "city": "Bekasi",
        "rating": 4.6
      },
      {
        "id": "ljx8i0qu2uckcowlqdz",
        "name": "General English",
        "description": "Speaking Writing Listening Grammar. Selama program berlangsung siswa akan di berikan tes tertulis untuk mengetahui hasil belajar dan di pantau oleh guru yang bermutu.",
        "pictureId":  "../images/heros/logo ke 3 general english.jpg",
        "city": "Bekasi",
        "rating": 4.6
      },
      {
        "id": "fe8bbxoazddkcowlqdz",
        "name": "MS OFFICE",
        "description": "Paket ini di rancang untuk peserta yang ingin mempunyai kemampuan untuk dapat bekerja sebagai tenaga administrasi perkantoran yang memiliki kemampuan untuk mengoperasikan komputer dengan perangkat lunak Microsoft Windows, Word, Excel dan Power Point."
,
        "pictureId":  "../images/heros/logo ke 7 ms office.jpg",
        "city": "Bekasi",
        "rating": 4.8
      },
      {
        "id": "ik1zljmlf68kcowlqdz",
        "name": "JAVASCRIPT",
        "description": "JavaScript adalah bahasa pemrograman yang wajib dikuasai oleh seorang web developer. Bahasa ini awalnya digunakan untuk membuat sebuah website menjadi lebih interaktif. Dalam perkembangannya, JavaScript tidak lagi hanya digunakan pada browser, melainkan juga bisa berjalan pada server. Ini berarti JavaScript digunakan di seluruh bagian website, mulai dari front-end hingga back-end. Bahkan, kini JavaScript mulai merambah ke platform lain seperti mobile, desktop, dan game.",
        "pictureId": "../images/heros/logo ke 5.png", 
        "city": "Bekasi",
        "rating": 4.7
      },
      {
        "id": "9jpuzkm6n6jkcowlqdz",
        "name": "ACCOUNTING",
        "description": "Akuntansi merupakan kebutuhan mendasar untuk menjalankan bisnis. Program ini bertujuan agar peserta dapat memahami dengan Accounting Cycle (alur pencatatan) akuntansi untuk perusahaan jasa, dagang dan industry. Peserta akan dapat memahami membuat laporan keuangan yang diperlukan perusahaan seperti Laporan Laba Rugi,  Perubahan Modal dan Neraca. Sangat cocok di ikuti oleh mereka yang berminat menjadi staf accounting atau staf keuangan perusahaan.",

        "pictureId":  "../images/heros/logo ke 6 accounting.jpg",
        "city": "Bekasi",
        "rating": 3.8
      },
      {
        "id": "cpl5jpsnuqkkcowlqdz",
        "name": "WEBSITE DASAR DENGAN HTML & CSS",
        "description": "Website di era sekarang sudah menjadi kebutuhan utama yang tidak bisa diabaikan. Seluruh sektor bisnis atau edukasi dapat memanfaatkan website sebagai alat untuk promosi, tukar informasi, dan lainnya. Berdasarkan data dari World Wide Web Technology Surveys, dari seluruh website yang aktif, 88.2% menggunakan HTML dan 95.6% menggunakan CSS. Kelas ini membahas tuntas mengenai HTML dan CSS sebagai fondasi dalam pembuatan website.",
        "pictureId":  "../images/heros/logo ke 5.png",
        "city": "Bekasi",
        "rating": 4.6
      },
      {
        "id": "iqtf9hmdzvbkcowlqdz",
        "name": "FRONT END JAVASCRIPT",
        "description": "Untuk membuat website yang memiliki fungsionalitas lebih dan interaktif, web developer perlu belajar teknik manipulasi DOM. Kelas ini membahas secara tuntas dan lengkap mengenai DOM Manipulation dan Web Storage dalam membuat website yang memiliki fungsionalitas lebih dan interaktif.",
        "pictureId":  "../images/heros/logo ke 5.png",
        "city": "Bekasi",
        "rating": 3.6
      },
      {
        "id": "8i06gqcc2dpkcowlqdz",
        "name": "BACK END JAVASCRIPT",
        "description": "Back-End Developer merupakan developer yang memiliki peran sangat penting, karena Back-End Developer menjadi faktor vital dalam membangun sebuah sistem aplikasi meskipun perannya tidak terlihat secara langsung oleh pengguna. Seorang Back-End Developer harus mampu membangun layanan yang mampu mendukung aplikasi Front-End dapat berfungsi dengan baik. Kelas ini membahas tuntas kemampuan dasar untuk menjadi seorang Back-End Developer dengan membangun RESTful API menggunakan teknologi JavaScript (Node.js) yang populer.",
        "pictureId":  "../images/heros/logo ke 5.png",
        "city": "Bekasi",
        "rating": 4
      },
      {
        "id": "wf5o19xhxxkcowlqdz",
        "name": "OFFICE",
        "description": "Bimbingan Belajar Scientists berkedudukan di Ruko Perum Mutiara Bekasi Jaya Blok B2 No. 50 desa SindangMulya Kecamatan Cibarusah  Kabupaten Bekasi Provinsi Jawa Barat Indonesia, Kode Pos 17340 WA 0858 8652 8913.",
        "pictureId": "../images/heros/logo ke 1 bimbel office.jpg",
        "city": "Bekasi",
        "rating": 3.9
      }
    ]
  };
  
  export function displayRestaurants(restaurants) {
    const container = document.getElementById('restaurant-list');
    if (!container) {
      console.error('Restaurant list container not found!');
      return;
    }
    container.innerHTML = ''; 
  
    restaurants.forEach(restaurant => {
      const restaurantElement = document.createElement('div');
      restaurantElement.classList.add('restaurant-item');
  
      restaurantElement.innerHTML = `
        <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image">
        <div class="restaurant-content">
          <h3 class="restaurant-name">${restaurant.name}</h3>
          <p class="restaurant-description">${restaurant.description}</p>
          <p class="restaurant-city">City: ${restaurant.city}</p>
          <p class="restaurant-rating">Rating: ${restaurant.rating}</p>
        </div>
      `;
  
      container.appendChild(restaurantElement);
    });
  }
  
  // Menampilkan data restoran saat dokumen HTML selesai dimuat
  document.addEventListener('DOMContentLoaded', () => {
    if (restaurantsData && restaurantsData.restaurants) {
      displayRestaurants(restaurantsData.restaurants);
    } else {
      console.error('Restaurant data not available or incorrectly structured.');
    }
  });
  
  
  
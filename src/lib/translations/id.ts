const id = {
  nav: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    experience: "Pengalaman",
    projects: "Project",
    education: "Pendidikan",
    certificates: "Sertifikat",
    contact: "Kontak",
  },

  hero: {
    welcome: "Selamat Datang di Portfolio Saya",
    greeting: "Halo, Saya",
    name: "Jamaludin",
    role: "Full Stack Web Developer",

    description:
      "Saya adalah Full Stack Web Developer yang berfokus pada pengembangan website modern menggunakan Next.js, React, Laravel, TypeScript, Python, dan MySQL. Saya senang membangun aplikasi yang cepat, responsif, aman, dan mudah digunakan.",

    available: "Siap Bekerja",

    scroll: "Scroll",

    stats: {
      experience: "Tahun Pengalaman",
      projects: "Project Selesai",
      satisfaction: "Kepuasan Klien",
    },
  },

  about: {
    badge: "Tentang Saya",
    heading: "Mengenal Saya",
    subheading: "Full Stack Web Developer",

    paragraphs: [
      "Saya adalah seorang Full Stack Web Developer yang memiliki minat tinggi dalam membangun aplikasi web modern, responsif, dan scalable menggunakan teknologi terbaru.",
      "Fokus utama saya adalah pengembangan Frontend menggunakan React dan Next.js serta Backend menggunakan Laravel, Node.js, Python, dan MySQL.",
      "Selain pengembangan web, saya juga memiliki pengalaman dalam Machine Learning, REST API, Database Design, Version Control menggunakan Git, dan Deployment.",
    ],

    focusAreas: [
      "React & Next.js",
      "Laravel & Node.js",
      "Machine Learning",
      "REST API Design",
      "Database Design",
      "Git & Deployment",
    ],

    info: {
      name: { label: "Nama", value: "Jamaludin" },
      location: { label: "Lokasi", value: "Bekasi, Indonesia" },
      email: { label: "Email", value: "jamaludin032000@gmail.com" },
      education: {
        label: "Pendidikan",
        value: "S1 Teknik Informatika",
      },
      experience: { label: "Pengalaman", value: "Web Development" },
      status: { label: "Status", value: "Siap Bekerja" },
    },
  },

  skills: {
    badge: "Keahlian",
    heading: "Keahlian Teknis",
    countSuffix: "keahlian",

    categories: {
      frontend: {
        title: "Frontend",
        description: "Membangun antarmuka yang cepat dan responsif",
      },
      backend: {
        title: "Backend",
        description: "Merancang sistem dan API yang aman & scalable",
      },
      tools: {
        title: "Tools",
        description: "Alat kerja sehari-hari untuk build & deploy",
      },
    },
  },

  experience: {
    badge: "Pengalaman",
    heading: "Pengalaman Kerja",
    showLess: "Tampilkan lebih sedikit",
    showMore: (remaining: number) => `Tampilkan ${remaining} lainnya`,

    items: [
      {
        company: "Livara Interior",
        position: "Staf Operasional",
        period: "Februari 2026 - Juni 2026",
        description: [
          "Mengawasi dan mengoordinasikan operasional harian perusahaan agar berjalan efektif dan efisien.",
          "Mengatur jadwal kerja tim serta memastikan target proyek interior selesai tepat waktu.",
          "Berkoordinasi dengan klien, vendor, dan tim produksi selama proses pengerjaan proyek.",
          "Melakukan pengawasan kualitas hasil pekerjaan sesuai standar perusahaan.",
          "Mengelola kebutuhan material dan memastikan ketersediaan stok untuk mendukung kelancaran proyek.",
          "Menyusun laporan operasional serta melakukan evaluasi kinerja tim.",
          "Menangani permasalahan operasional untuk meningkatkan produktivitas dan kepuasan klien.",
        ],
      },
      {
        company: "PT Tangkas Cipta Optimal (TACO)",
        position: "Operator Produksi / Assembly / Warehouse",
        period: "Mei 2021 - September 2024",
        description: [
          "Mengoperasikan mesin produksi serta melakukan setup mesin sebelum proses produksi.",
          "Melakukan proses assembly (sticking chip) sesuai standar kualitas perusahaan.",
          "Melakukan Quality Control pada barang masuk dan barang keluar.",
          "Melakukan proses packing, pelabelan, dan penyusunan barang sesuai jadwal pengiriman.",
          "Mengelola stok barang, melakukan stock opname, dan menerapkan sistem FIFO/LIFO.",
          "Melakukan input data stok serta membuat laporan harian dan bulanan.",
          "Berkoordinasi dengan tim QC dan logistik untuk memastikan distribusi berjalan tepat waktu.",
        ],
      },
      {
        company: "PT KIYOKUNI Indonesia",
        position: "Operator Produksi",
        period: "Juli 2019 - Januari 2021",
        description: [
          "Mengoperasikan mesin stamping untuk memproduksi komponen sesuai standar spesifikasi.",
          "Melakukan setup dan kalibrasi mesin sebelum proses produksi dimulai.",
          "Memantau proses produksi untuk memastikan kualitas dan efisiensi kerja.",
          "Melakukan pemeriksaan serta perawatan harian mesin dan melaporkan kerusakan kepada teknisi.",
          "Mengelola penggunaan bahan baku sesuai target produksi harian.",
          "Menerapkan prosedur Keselamatan dan Kesehatan Kerja (K3) selama proses produksi.",
          "Berkontribusi dalam pencapaian target produksi melalui efisiensi waktu dan material.",
        ],
      },
    ],
  },

  projects: {
    badge: "Proyek",
    heading: "Proyek Unggulan",
    demoLabel: "Lihat Demo",
    githubLabel: "GitHub",
    privateLabel: "Repository Privat",

    items: {
      portfolio: {
        description:
          "Website portofolio modern yang dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS dengan desain responsif serta SEO yang optimal.",
      },
      maintenance: {
        description:
          "Sistem prediksi kerusakan mesin menggunakan algoritma Random Forest dan XGBoost dengan Laravel sebagai backend, Next.js sebagai frontend, dan Python untuk layanan AI.",
      },
      ppe: {
        description:
          "Aplikasi pendeteksi penggunaan Alat Pelindung Diri (PPE) menggunakan Computer Vision untuk membantu meningkatkan keselamatan kerja.",
      },
    },
  },

  education: {
    badge: "Pendidikan",
    title: "Latar Belakang Pendidikan",
    subtitle:
      "Riwayat pendidikan yang menjadi dasar pengembangan kemampuan akademik, teknis, dan profesional dalam bidang teknologi informasi.",
    items: [
      {
        institution: "Universitas Bani Saleh",
        degree: "S1 Teknik Informatika",
        period: "2023 - Sekarang",
        description:
          "Mempelajari pengembangan perangkat lunak, basis data, jaringan komputer, kecerdasan buatan, machine learning, web development, serta analisis dan perancangan sistem informasi.",
      },
      {
        institution: "SMK TINTA EMAS INDONESIA",
        degree: "Teknik Kendaraan Ringan",
        period: "2015 - 2018",
        description:
          "Mempelajari dasar-dasar teknik otomotif, perawatan mesin, sistem kelistrikan kendaraan, serta praktik perbaikan dan pemeliharaan kendaraan ringan (mobil).",
      },
    ],
  },

  certificates: {
    badge: "Sertifikat",
    title: "Sertifikasi & Pelatihan",
    subtitle:
        "Sertifikasi dan pelatihan yang mendukung kemampuan saya dalam bidang Web Development, Programming, dan Machine Learning.",

    verified: "Terverifikasi",

    items: [
        {
        title: "Fundamental Web Development",
        issuer: "Dicoding Indonesia",
        year: "2024",
        description:
            "Mempelajari HTML5, CSS3, JavaScript modern, Responsive Web Design, dan praktik terbaik pengembangan website.",
        verified: true,
        },
        {
        title: "JavaScript Programming",
        issuer: "Dicoding Indonesia",
        year: "2024",
        description:
            "Menguasai JavaScript ES6+, DOM Manipulation, Asynchronous Programming, Fetch API, dan modular JavaScript.",
        verified: true,
        },
        {
        title: "React & Next.js Development",
        issuer: "Self Learning",
        year: "2025",
        description:
            "Mempelajari React.js, Next.js App Router, TypeScript, Tailwind CSS, dan pengembangan aplikasi web modern.",
        verified: false,
        },
        {
        title: "Machine Learning Fundamental",
        issuer: "Self Learning",
        year: "2025",
        description:
            "Mempelajari dasar Machine Learning menggunakan Python, Pandas, Scikit-Learn, Random Forest, dan XGBoost.",
        verified: false,
        },
    ],
   },

   contact: {
  badge: "Kontak",
  heading: "Mari Bekerja Sama",
  description:
    "Saya terbuka untuk peluang kerja sebagai Web Developer, Frontend Developer, Backend Developer maupun Full Stack Developer. Jika Anda memiliki proyek atau peluang kerja, silakan hubungi saya.",

  info: {
    email: "Email",
    phone: "Telepon",
    location: "Lokasi",
  },

  socials: "Temukan Saya",

  form: {
    name: "Nama Lengkap",
    email: "Email",
    subject: "Subjek",
    message: "Pesan",

    placeholders: {
      name: "Masukkan nama Anda",
      email: "email@anda.com",
      subject: "Apa keperluannya?",
      message: "Tulis pesan Anda...",
    },

    copy: "Salin",
    copied: "Tersalin",

    send: "Kirim Pesan",
    sending: "Mengirim...",
    success: "Pesan Berhasil Dikirim ✓",
  },
},

footer:{
description:
"Full Stack Web Developer yang berfokus pada pengembangan website modern menggunakan Next.js, Laravel, TypeScript, Python, dan MySQL.",

navigation:"Navigasi",

contact:"Kontak",

available:"Tersedia untuk freelance",

rights:" Semua hak dilindungi.",

backTop:"Kembali ke atas"
},

  button: {
    projects: "Lihat Project",
    contact: "Hubungi Saya",
    cv: "Download CV",
  },
};

export default id;
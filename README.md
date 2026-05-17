<img width="1920" height="1080" alt="Screenshot 2026-05-18 012442" src="https://github.com/user-attachments/assets/b3fc11a1-c81a-46b0-a978-cba2967af506" />
<img width="1920" height="1080" alt="Screenshot 2026-05-18 012500" src="https://github.com/user-attachments/assets/43c5ae9d-19b2-4ff0-912f-e9f690ac5cc6" />
<img width="1920" height="1080" alt="Screenshot 2026-05-18 012507" src="https://github.com/user-attachments/assets/81b259a0-bd54-430f-9d89-7092b9aa0af7" />
<img width="1920" height="1080" alt="Screenshot 2026-05-18 012512" src="https://github.com/user-attachments/assets/6d90be7e-6dcb-4585-8d8e-a278a2008c94" />
# 🚀 Tugas Praktikum 10 — ReactJS
### Mata Kuliah: Pengembangan Desain Web (PDW)
### Universitas Muhammadiyah Yogyakarta

---

## 📌 Deskripsi Proyek

Proyek ini merupakan tugas praktikum Modul 14 — ReactJS pada mata kuliah Pengembangan Desain Web. Aplikasi ini berupa **halaman portfolio pribadi** yang dibangun menggunakan **ReactJS** dengan styling menggunakan **CSS Custom** (dark theme modern).

---

## ✨ Fitur yang Diimplementasikan

| Fitur | Tag HTML yang Digunakan | Keterangan |
|-------|------------------------|------------|
| Hero / Header | `<div>`, `<h1>`, `<p>`, `<img>` | Tampilan awal dengan foto profil avatar |
| About Me | `<div>`, `<h2>`, `<h3>`, `<p>`, `<img>` | Foto workspace + informasi pribadi |
| Skills | `<div>`, `<h2>`, `<h4>`, `<p>` | 4 skill card dengan progress bar |
| Projects | `<div>`, `<h2>`, `<h4>`, `<p>`, `<img>` | 3 project card dengan gambar |
| Footer | `<div>`, `<h3>`, `<p>` | Informasi kontak |

---

## 🧩 Komponen React yang Dibuat

```
App.js
├── <Header />          → Hero section dengan avatar, nama, dan badge teknologi
├── <AboutCard />       → Informasi tentang diri dengan gambar
├── <SkillsSection />   → Grid skill cards
│   └── <SkillCard />   → Komponen reusable untuk tiap skill (menerima props)
├── <ProjectsSection /> → Grid project cards
│   └── <ProjectCard /> → Komponen reusable untuk tiap proyek (menerima props)
└── <Footer />          → Footer dengan link kontak
```

---

## 🔑 Konsep React yang Diterapkan

### 1. JSX (JavaScript Syntax Extension)
Setiap komponen menggunakan JSX untuk mendeskripsikan tampilan UI:
```jsx
function Header() {
  return (
    <div className="hero-section">
      <h1>Halo, Saya <span className="highlight">Mahasiswa React!</span></h1>
    </div>
  );
}
```

### 2. Komponen Fungsi (Function Component)
Semua komponen ditulis sebagai function component:
```jsx
function SkillCard({ icon, title, description, level }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
```

### 3. Props (Properties)
Komponen `SkillCard` dan `ProjectCard` menerima **props** dari parent:
```jsx
// Parent mengirim data melalui props
<SkillCard
  icon="⚛️"
  title="ReactJS"
  description="Membangun UI dengan komponen reusable"
  level={65}
/>
```

### 4. Array.map() untuk Render List
Menggunakan `.map()` untuk merender daftar komponen secara dinamis:
```jsx
{skills.map((skill, index) => (
  <SkillCard key={index} {...skill} />
))}
```

### 5. Ekspresi dalam JSX (Curly Braces `{}`)
```jsx
<div className="skill-bar-fill" style={{ width: level + '%' }}>
  <span>{level}%</span>
</div>
```

---

## 🛠️ Cara Menjalankan Proyek

### Prasyarat
- Node.js versi LTS (https://nodejs.org)
- npm (sudah termasuk dalam Node.js)

### Langkah-langkah

**1. Clone repository ini**
```bash
git clone https://github.com/USERNAME/praktikum-react.git
cd praktikum-react
```

**2. Install dependencies**
```bash
npm install
```

**3. Jalankan development server**
```bash
npm start
```

**4. Buka browser**
```
http://localhost:3000
```

---

## 📸 Screenshot Proses Pengerjaan

### Step 1 — Membuat Proyek React Baru
Menggunakan perintah `npx create-react-app praktikumreact` di terminal:

> *(Masukkan screenshot terminal kamu di sini)*

### Step 2 — Menjalankan Proyek Awal
Menjalankan `npm start` dan membuka `localhost:3000`:

> *(Masukkan screenshot tampilan default React di sini)*

### Step 3 — Modifikasi App.js
Membuka VS Code dan mulai menulis kode komponen:

> *(Masukkan screenshot VS Code dengan kode App.js di sini)*

### Step 4 — Modifikasi App.css
Menambahkan custom styling dengan tema dark mode:

> *(Masukkan screenshot VS Code dengan kode App.css di sini)*

### Step 5 — Hasil Akhir di Browser
Tampilan final di browser `localhost:3000`:

> *(Masukkan screenshot tampilan akhir web di sini)*

### Step 6 — Upload ke GitHub
Menggunakan perintah git untuk push ke GitHub:

> *(Masukkan screenshot terminal proses git push di sini)*

---

## 📂 Struktur Folder

```
praktikum-react/
├── public/
│   └── index.html          ← File HTML utama (root div)
├── src/
│   ├── App.js              ← Komponen utama + semua sub-komponen
│   ├── App.css             ← Styling custom (dark theme)
│   ├── index.js            ← Entry point React
│   └── index.css           ← Base styling
├── package.json            ← Konfigurasi npm
└── README.md               ← Dokumentasi ini
```

---

## 📖 Referensi

- [Dokumentasi Resmi ReactJS](https://react.dev)
- [Create React App](https://create-react-app.dev)
- [MDN Web Docs — JSX](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- Modul 14 Praktikum PDW — Universitas Muhammadiyah Yogyakarta

---

## 👤 Informasi Mahasiswa

| Field | Isi |
|-------|-----|
| **Nama** | *(Nama kamu)* |
| **NIM** | *(NIM kamu)* |
| **Kelas** | *(Kelas kamu)* |
| **Mata Kuliah** | Pengembangan Desain Web |
| **Dosen** | *(Nama dosen kamu)* |

---

*Tugas ini dibuat untuk memenuhi tugas praktikum Modul 14 — ReactJS, Mata Kuliah Pengembangan Desain Web, Universitas Muhammadiyah Yogyakarta.*

import React from 'react';
import './App.css';

// =============================================
// KOMPONEN: Header / Hero Section
// =============================================
function Header() {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content text-center">
        <div className="avatar-wrapper">
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=mahasiswa"
            alt="Foto Profil"
            className="avatar-img"
          />
        </div>
        <h1 className="hero-name">Halo, Saya <span className="highlight">Faiz Sulthon Daud Muhammad!</span></h1>
        <p className="hero-subtitle">
          Mahasiswa Informatika | Web Developer | ReactJS Enthusiast
        </p>
        <div className="hero-badges">
          <span className="badge-custom">HTML</span>
          <span className="badge-custom">CSS</span>
          <span className="badge-custom">JavaScript</span>
          <span className="badge-custom">ReactJS</span>
        </div>
      </div>
    </div>
  );
}

// =============================================
// KOMPONEN: About Me Card
// =============================================
function AboutCard() {
  return (
    <div className="section-card">
      <h2 className="section-title">
        <span className="icon-emoji">👤</span> Tentang Saya
      </h2>
      <div className="about-grid">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80"
            alt="Coding workspace"
            className="about-img"
          />
        </div>
        <div className="about-text">
          <h3>Faiz Sulthon Daud Muhammad</h3>
          <p>
            Saya adalah mahasiswa semester 4 yang sedang belajar pengembangan
            web modern menggunakan ReactJS. Saya sangat antusias dalam membangun
            antarmuka pengguna yang interaktif dan menarik.
          </p>
          <p>
            Praktikum ini merupakan bagian dari mata kuliah <strong>Pengembangan Desain Web</strong>
            di Universitas Muhammadiyah Yogyakarta, dimana saya mempelajari
            konsep komponen, JSX, props, dan cara kerja React DOM.
          </p>
          <div className="info-list">
            <div className="info-item">
              <span className="info-label">🎓 Universitas</span>
              <span>Universitas Muhammadiyah Yogyakarta</span>
            </div>
            <div className="info-item">
              <span className="info-label">📚 Jurusan</span>
              <span>Teknologi Informasi</span>
            </div>
            <div className="info-item">
              <span className="info-label">📍 Kota</span>
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================
// KOMPONEN: Card Skill (Reusable Component)
// =============================================
function SkillCard({ icon, title, description, level }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: level + '%' }}>
          <span className="skill-level-text">{level}%</span>
        </div>
      </div>
    </div>
  );
}

// =============================================
// KOMPONEN: Skills Section
// =============================================
function SkillsSection() {
  const skills = [
    {
      icon: '🌐',
      title: 'HTML & CSS',
      description: 'Membuat struktur dan tampilan halaman web yang responsif.',
      level: 85,
    },
    {
      icon: '⚡',
      title: 'JavaScript',
      description: 'Logika pemrograman dan interaktivitas pada web.',
      level: 75,
    },
    {
      icon: '⚛️',
      title: 'ReactJS',
      description: 'Membangun UI dengan komponen yang dapat digunakan ulang.',
      level: 65,
    },
    {
      icon: '🎨',
      title: 'Bootstrap',
      description: 'Framework CSS untuk desain responsif yang cepat.',
      level: 80,
    },
  ];

  return (
    <div className="section-card">
      <h2 className="section-title">
        <span className="icon-emoji">💡</span> Keahlian Saya
      </h2>
      <p className="section-desc">
        Berikut adalah teknologi dan tools yang saya pelajari selama mengikuti
        perkuliahan Pengembangan Desain Web.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

// =============================================
// KOMPONEN: Project Card (Reusable)
// =============================================
function ProjectCard({ image, title, desc, tags }) {
  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img src={image} alt={title} className="project-img" />
        <div className="project-overlay">
          <span>Lihat Detail →</span>
        </div>
      </div>
      <div className="project-body">
        <h4 className="project-title">{title}</h4>
        <p className="project-desc">{desc}</p>
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// =============================================
// KOMPONEN: Projects Section
// =============================================
function ProjectsSection() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
      title: 'Website Portfolio',
      desc: 'Website portfolio pribadi yang dibuat menggunakan HTML, CSS, dan JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80',
      title: 'Aplikasi Todo List',
      desc: 'Aplikasi manajemen tugas sederhana menggunakan ReactJS dan local storage.',
      tags: ['ReactJS', 'CSS', 'LocalStorage'],
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
      title: 'Dashboard Analytics',
      desc: 'Dashboard sederhana untuk menampilkan data dan statistik dengan grafik.',
      tags: ['React', 'Bootstrap', 'Chart.js'],
    },
  ];

  return (
    <div className="section-card">
      <h2 className="section-title">
        <span className="icon-emoji">🚀</span> Proyek Saya
      </h2>
      <p className="section-desc">
        Beberapa proyek yang telah saya kerjakan selama perkuliahan sebagai
        implementasi dari materi yang telah dipelajari.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

// =============================================
// KOMPONEN: Footer
// =============================================
function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <h3>📬 Hubungi Saya</h3>
        <p>Saya terbuka untuk kolaborasi dan diskusi seputar web development!</p>
        <div className="contact-links">
          <a href="#!" className="contact-btn">✉️ Email</a>
          <a href="#!" className="contact-btn">💼 LinkedIn</a>
          <a href="#!" className="contact-btn">🐙 GitHub</a>
        </div>
        <hr className="footer-divider" />
        <p className="footer-copy">
          © 2024 Dibuat dengan ❤️ menggunakan <strong>ReactJS</strong> | Praktikum PDW — UMY
        </p>
      </div>
    </footer>
  );
}

// =============================================
// KOMPONEN UTAMA: App
// =============================================
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content container">
        <AboutCard />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

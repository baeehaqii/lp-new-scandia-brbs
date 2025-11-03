"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dqobwse9q/image/upload/w_800,h_450,c_fill,f_auto,q_40/v1754373669/WhatsApp_Image_2025-06-19_at_11.00.09_1_ghtwop.jpg"
                alt="Sapphire Scandia Brebes"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Scandia Brebes</h2>
              <p className="about-description">
                Berada di Jl. Taman Siswa, Brebes, Kec. Brebes, Kab. Brebes, Sapphire Scandia Brebes menghadirkan perumahan Brebes dengan konsep modern dan fungsional, memaksimalkan ruang dengan desain mezzanine yang multifungsi.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">1</div>
              <div className="about-stat-label">Perumahan Terbaik di Tegal</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">10000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">5+</div>
              <div className="about-stat-label">CCTV Kawasan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Scandia Brebes</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762185704/Screenshot_2025-11-03_at_22.50.16_alsosc.avif"
                  alt="Sapphire Scandia Brebes"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Berada di Jl. Taman Siswa, Brebes, Kec. Brebes, Kab. Brebes, Sapphire Scandia Brebes menghadirkan perumahan Brebes dengan konsep modern dan fungsional, memaksimalkan ruang dengan desain mezzanine yang multifungsi. Hunian ini dirancang untuk memudahkan aktivitas sehari-hari, dekat ke pusat kota, sekolah, dan area komersial, sekaligus mengusung sistem smart & green living yang efisien dan estetik. Sapphire Scandia Brebes menjadi pilihan tepat bagi keluarga muda maupun profesional yang mencari hunian prestisius dengan gaya hidup praktis, desain timeless, dan nilai investasi jangka panjang.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>4 menit ke fasilitas kesehatan</li>
                  <li>1 menit ke fasilitas pendidikan</li>
                  <li>5 menit ke fasilitas perbelanjaan</li>
                  <li>5 menit ke Stasiun Brebes</li>
                  <li>Berada di jalur utama penghubung Slawi – Tegal</li>
                  <li>Lingkungan berkembang, ideal untuk hunian jangka panjang</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti, CCTV, dan one gate system</li>
                  <li>Ruang terbuka hijau yang luas</li>
                  <li>Instalasi listrik bawah tanah</li>
                  <li>Area bermain aman dan menyenangkan bagi anak-anak</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

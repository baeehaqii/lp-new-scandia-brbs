import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "1 menit ke Kantor PDAM Brebes",
        "2 menit ke Stadion Karang Birahi",
        "3 menit ke Kantor Imigrasi Brebes",
        "3 menit ke Stasiun Brebes",
        "3 menit ke BPKAD Brebes",
        "5 menit ke Polres Brebes",
        "15 menit ke Pintu Tol Brexit",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "1 menit ke SMK PGRI Brebes",
        "2 menit ke SMPN 2 Brebes",
        "2 menit ke SMAN 1 Brebes",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "4 menit ke RSUD Brebes",
        "6 menit ke Rumah Sakit Dedy Jaya",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: [
        "4 menit Yogya Mall Brebes",
        "6 menit ke Pasar Batang",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Concept {
  id: number
  title: string
  subtitle: string
  image: string
  alt: string
}

export default function Concepts() {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null)

  const concepts: Concept[] = [
    {
      id: 1,
      title: "Konsep Kesehatan Bangunan",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762185708/Screenshot_2025-11-03_at_22.51.40_mpvgui.avif",
      alt: "Konsep Kesehatan Bangunan dan Penghematan Energi",
    },
    {
      id: 2,
      title: "Sistem Sanitasi Air",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762185705/Screenshot_2025-11-03_at_22.51.48_jurp2e.avif",
      alt: "Sistem Sanitasi Air Bersih dan Limbah",
    },
    {
      id: 3,
      title: "Sistem drainase",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762185705/Screenshot_2025-11-03_at_22.51.55_s6w2b3.avif",
      alt: "Sistem Drainase",
    },
    {
      id: 4,
      title: "Konsep Air Kotor Cair",
      subtitle: "Sistem Pelindung Matahari",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762185706/Screenshot_2025-11-03_at_22.52.05_zcugd6.avif",
      alt: "Konsep Air Kotor Cair",
    },
    {
      id: 5,
      title: "Konsep Air Kotor Padat",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762185706/Screenshot_2025-11-03_at_22.52.13_ibknnu.avif",
      alt: "Konsep Air Kotor Padat",
    },
    {
      id: 6,
      title: "Konsep Air Kotor",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066025/konsep-fasad-material_sr5883.png",
      alt: "Konsep Fasad - Material Bangunan",
    },
    {
      id: 7,
      title: "Exterior Fasad",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762185707/Screenshot_2025-11-03_at_22.50.44_iehhp1.avif",
      alt: "Exterior Fasad",
    },
    {
      id: 8,
      title: "Interior Fasad",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762187196/Screenshot_2025-11-03_at_22.50.52_kqbgq0.avif",
      alt: "Interior Fasad",
    },
  ]

  const openModal = (concept: Concept) => {
    setSelectedConcept(concept)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedConcept(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="konsep" className="concepts-section">
      <div className="container">
        <h2 className="section-title">Konsep Desain Sapphire Scandia</h2>
        <p className="section-subtitle">
          Rumah yang dirancang dengan konsep responsif iklim tropis, memadukan estetika modern dengan kenyamanan
          maksimal
        </p>

        <div className="concepts-grid">
          {concepts.map((concept) => (
            <div key={concept.id} className="concept-card" onClick={() => openModal(concept)}>
              <div className="concept-image-wrapper">
                <Image
                  src={concept.image || "/placeholder.svg"}
                  alt={concept.alt}
                  width={400}
                  height={300}
                  className="concept-image"
                />
                <div className="concept-overlay">
                  <div className="concept-overlay-content">
                    <h3 className="concept-overlay-title">{concept.title}</h3>
                    <p className="concept-overlay-subtitle">{concept.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedConcept && (
        <div className="concept-modal-overlay" onClick={closeModal}>
          <div className="concept-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="concept-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="concept-modal-content">
              <Image
                src={selectedConcept.image || "/placeholder.svg"}
                alt={selectedConcept.alt}
                width={1200}
                height={900}
                className="concept-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

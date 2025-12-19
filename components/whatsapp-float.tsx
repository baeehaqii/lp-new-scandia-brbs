"use client"

import { WhatsAppIcon } from "./icons"
import { usePixel } from "@/hooks/use-pixel"

export default function WhatsAppFloat() {
  const { trackWhatsappFloating } = usePixel()

  const handleClick = () => {
    // Track Meta Pixel event with button label
    trackWhatsappFloating()

    // Replace with your WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = "62811261740" // Example: Indonesian number
    const message = encodeURIComponent("Halo, saya tertarik dengan Sapphire Scandia Brebes")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <div className="whatsapp-button">
        <WhatsAppIcon size={28} className="whatsapp-icon" />
      </div>
    </div>
  )
}

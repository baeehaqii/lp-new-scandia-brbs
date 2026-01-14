"use client"

import { WhatsAppIcon } from "./icons"
import { usePixel } from "@/hooks/use-pixel"

export default function WhatsAppFloat() {
  const { trackWhatsappFloating } = usePixel()

  const handleClick = () => {
    // Track Meta Pixel event with button label
    trackWhatsappFloating()

    // Replace with your WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = "6281127272256" // Example: Indonesian number
    const message = encodeURIComponent("Halo kak, saya dapat informasi dari Facebook, boleh minta tolong informasi selengkapnya tentang perumahan Sapphire Scandia Brebes")
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

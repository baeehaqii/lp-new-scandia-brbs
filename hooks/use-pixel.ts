export const usePixel = () => {
  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", eventName, data)
    }
  }

  const trackPageView = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView")
    }
  }

  const trackLead = () => {
    trackEvent("Lead")
  }

  const trackContact = (buttonLabel?: string) => {
    const data = buttonLabel ? { content_name: buttonLabel } : {}
    trackEvent("Contact", data)
  }

  const trackWhatsappFloating = () => {
    trackEvent("Contact", { 
      content_name: "Floating WhatsApp Button",
      content_type: "product"
    })
  }

  const trackWhatsappCTA = () => {
    trackEvent("Contact", { 
      content_name: "Whatsapp Kami CTA",
      content_type: "product"
    })
  }

  const trackPromoCTA = () => {
    trackEvent("Lead", { 
      content_name: "Dapatkan Promo CTA",
      content_type: "product"
    })
  }

  const trackInitiateCheckout = () => {
    trackEvent("InitiateCheckout")
  }

  return {
    trackEvent,
    trackPageView,
    trackLead,
    trackContact,
    trackWhatsappFloating,
    trackWhatsappCTA,
    trackPromoCTA,
    trackInitiateCheckout,
  }
}

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

  const trackAddToCart = (buttonLabel?: string) => {
    const data = buttonLabel ? { content_name: buttonLabel } : {}
    trackEvent("AddToCart", data)
  }

  const trackWhatsappFloating = () => {
    trackAddToCart("Floating WhatsApp Button")
  }

  const trackWhatsappCTA = () => {
    trackAddToCart("Whatsapp Kami CTA")
  }

  const trackPromoCTA = () => {
    trackAddToCart("Dapatkan Promo CTA")
  }

  const trackInitiateCheckout = () => {
    trackEvent("InitiateCheckout")
  }

  return {
    trackEvent,
    trackPageView,
    trackAddToCart,
    trackWhatsappFloating,
    trackWhatsappCTA,
    trackPromoCTA,
    trackInitiateCheckout,
  }
}

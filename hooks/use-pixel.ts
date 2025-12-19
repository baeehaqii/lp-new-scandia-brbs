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

  const trackContact = () => {
    trackEvent("Contact")
  }

  const trackInitiateCheckout = () => {
    trackEvent("InitiateCheckout")
  }

  return {
    trackEvent,
    trackPageView,
    trackLead,
    trackContact,
    trackInitiateCheckout,
  }
}

export const useSiteContact = () => {
  const { public: pub } = useRuntimeConfig()

  return {
    whatsappUrl: `https://wa.me/${pub.whatsappNumber}`,
    whatsappDisplay: pub.whatsappDisplay as string,
    email: pub.email as string,
    mailtoUrl: `mailto:${pub.email}`,
    instagramUrl: `https://instagram.com/${pub.instagramHandle}`,
    instagramHandle: `@${pub.instagramHandle}`,
    formspreeUrl: `https://formspree.io/f/${pub.formspreeId}`
  }
}

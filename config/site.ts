export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js Image PlaceHolder",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/Michael0520/Next13-image-placeholder",
  },
  routes: [
    {
      title: "Static Import with Blur",
      href: '/base64'
    },
    {
      title: "Dynamic Import with Blur",
      href: '/dynamic-import'
    }
  ]
}

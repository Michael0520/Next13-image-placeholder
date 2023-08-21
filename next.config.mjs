import withPlaiceholder from "@plaiceholder/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
}

export default withPlaiceholder(nextConfig)

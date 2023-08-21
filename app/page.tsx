import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex gap-4">
        {siteConfig.routes.map((route) => (
          <Link
            href={route.href}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            {route.title}
          </Link>
        ))}
      </div>
    </section>
  )
}

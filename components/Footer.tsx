import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import siteMetadata from '@/data/siteMetadata'
import { footerNav } from '@/data/navigation'
import { Container } from '@/components/Container'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={siteMetadata.siteLogo}
                width={36}
                height={36}
                alt=""
                className="h-9 w-9"
              />
              <span className="font-display text-lg font-extrabold tracking-tight">
                Hello<span className="text-primary-strong">Maker</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteMetadata.description}
            </p>
            <a
              href={`mailto:${siteMetadata.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-strong hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteMetadata.email}
            </a>
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} className="flex flex-col gap-3" aria-label={group.heading}>
              <h2 className="font-display text-sm font-extrabold">{group.heading}</h2>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteMetadata.shortTitle} &middot;{' '}
            {siteMetadata.region}
          </p>
          <p>
            Built by{' '}
            <a
              href={siteMetadata.authorSite}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-strong hover:underline"
            >
              {siteMetadata.author}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

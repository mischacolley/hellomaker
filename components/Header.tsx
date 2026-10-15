'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { mainNav } from '@/data/navigation'
import siteMetadata from '@/data/siteMetadata'
import Form from '@/components/Form'
import { Container } from '@/components/Container'
import { cn } from '@/lib/utils'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${siteMetadata.shortTitle}, home`}
          >
            <Image
              src={siteMetadata.siteLogo}
              width={40}
              height={40}
              alt=""
              className="h-9 w-9 md:h-10 md:w-10"
              priority
            />
            <span className="font-display text-lg font-extrabold tracking-tight md:text-xl">
              <span className="text-muted-foreground">Hello</span>Maker
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {mainNav.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-foreground',
                    active ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {link.title}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Form
                filloutId={siteMetadata.forms.general}
                buttonText="Express interest"
                size="sm"
                trackAs="header"
              />
            </div>
            <button
              type="button"
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <Container>
            <nav className="flex flex-col py-2" aria-label="Main">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-medium last:border-0"
                >
                  {link.title}
                </Link>
              ))}
              <div className="py-4 sm:hidden">
                <Form
                  filloutId={siteMetadata.forms.general}
                  buttonText="Express interest"
                  className="w-full"
                  trackAs="mobile-nav"
                />
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

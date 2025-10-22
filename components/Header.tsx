import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Form from './Form'

const Header = () => {
  return (
    <header className="py-5">
      {/* Navigation Menu - Full Width */}
      <div className="flex items-center justify-end w-full mb-4 gap-4">
        <div className="flex items-center space-x-4 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden sm:block font-medium text-gray-900 dark:text-white"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <div className="flex items-center space-x-4">
          {/* Express Interest Form - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <Form
              buttonText="Express Interest"
              filloutId="8926s4Ngckus"
              buttonClassName="whitespace-nowrap py-2 px-4 text-sm"
            />
          </div>
          {/* <SearchButton /> */}
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>

      {/* Logo and Title - Full Width */}
      <div className="w-full -mt-16">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <div className="mr-3 w-36">
              <Image
                src="/assets/logo-hellomaker.svg"
                width={500}
                height={500}
                alt="HelloMaker"
                className="drop-shadow-lg"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-1xl md:text-2xl font-semibold">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header

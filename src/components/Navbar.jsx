import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ShoppingCart, Leaf } from 'lucide-react'
import CountrySelector from './CountrySelector'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.menu'), path: '/shop' },
    { name: t('nav.sustainability'), path: '/sustainability' },
    { name: t('nav.faq'), path: '/faq' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/90 border-b border-green-500/20 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start space-y-0">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Leaf className="h-10 w-10 text-green-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent tracking-wide">PLANTIQUE</span>
                <span className="text-xs text-green-300 font-medium tracking-widest -mt-1 opacity-80">NATURALLY PURE - PERFECTLY YOU</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 hover:text-green-400 relative group ${
                  isActive(item.path) ? 'text-green-400' : 'text-gray-300'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-amber-400 transition-all duration-300 group-hover:w-full rounded-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </div>

          {/* Cart, Country Selector and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <CountrySelector />
            
            <Button variant="ghost" size="icon" className="relative hover:bg-green-500/10 transition-colors group">
              <ShoppingCart className="h-6 w-6 text-gray-300 group-hover:text-green-400 transition-colors" />
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-xs text-white flex items-center justify-center font-bold shadow-lg">
                0
              </span>
            </Button>

            <Button asChild className="hidden md:flex bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 font-bold text-lg shadow-xl border-0">
              <Link to="/shop">{t('hero.orderNow')}</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-green-500/10 group">
                  <Menu className="h-6 w-6 text-gray-300 group-hover:text-green-400 transition-colors" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] sm:w-[400px] bg-black/95 backdrop-blur-xl border-l border-green-500/20">
                <div className="flex flex-col space-y-8 mt-12">
                  <div className="flex flex-col items-start space-y-2 pb-8 border-b border-green-500/20">
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">PLANTIQUE</span>
                    <span className="text-xs text-green-300 font-medium opacity-80">NATURALLY PURE - PERFECTLY YOU</span>
                  </div>
                  
                  <div className="mb-4">
                    <CountrySelector />
                  </div>
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-medium transition-colors hover:text-green-400 ${
                        isActive(item.path) ? 'text-green-400' : 'text-gray-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <Button asChild className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full font-bold text-lg mt-8 shadow-xl border-0">
                    <Link to="/shop" onClick={() => setIsOpen(false)}>{t('hero.orderNow')}</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}


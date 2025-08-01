import { Link } from 'react-router-dom'
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-400 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-purple-400 rounded-full blur-xl" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-8 md:col-span-2">
            <Link to="/" className="flex flex-col items-start space-y-3">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Leaf className="h-12 w-12 text-green-400" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full opacity-60 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent tracking-wide">PLANTIQUE</span>
                  <span className="text-sm text-green-300 font-medium tracking-widest -mt-1 opacity-80">NATURALLY PURE - PERFECTLY YOU</span>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-300 text-xl leading-relaxed max-w-lg">
              Enjoy Plant-Powered Goodness Every Day. Premium plant-based products crafted with love in India. 
              We believe in simple ingredients, sustainable choices, and pure nutrition.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full hover:from-green-600 hover:to-green-500 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-green-500/20">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="p-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full hover:from-blue-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-blue-500/20">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="p-4 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-full hover:from-purple-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-purple-500/20">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">Quick Links</h3>
            <div className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Menu', path: '/shop' },
                { name: 'Sustainability', path: '/sustainability' },
                { name: 'Blog & Recipes', path: '/blog' },
                { name: 'FAQ', path: '/faq' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="block text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2 transform text-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300 group hover:text-green-400 transition-colors">
                <Mail className="h-6 w-6 text-green-400" />
                <span className="text-lg">hello@plantique.in</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 group hover:text-green-400 transition-colors">
                <Phone className="h-6 w-6 text-green-400" />
                <span className="text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 group hover:text-green-400 transition-colors">
                <MapPin className="h-6 w-6 text-green-400" />
                <span className="text-lg">Made with ❤️ in India</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-xl p-6 backdrop-blur-sm border border-green-500/20">
              <h4 className="font-bold text-green-400 mb-3 text-lg">Business Hours</h4>
              <div className="text-gray-300 space-y-2">
                <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                <div>Sat: 10:00 AM - 4:00 PM</div>
                <div>Sun: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-green-500/20 mt-16 pt-12">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">Stay Updated</h3>
            <p className="text-gray-300 max-w-3xl mx-auto text-xl">
              Subscribe to our newsletter for exclusive product updates, wellness recipes, and sustainable living tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-green-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm text-lg"
              />
              <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/20 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">
            © 2024 Plantique Organics. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-lg">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-lg">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-lg">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


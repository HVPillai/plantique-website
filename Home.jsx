import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Leaf, Heart, Shield, Truck, Star, ArrowRight, Coffee, Sparkles, Clock, ShoppingCart } from 'lucide-react'
import { convertPrice, countryConfig } from '../i18n'
import heroImage from '../assets/hero-coffee.jpg'
import latteImage from '../assets/latte-art.jpg'
import plantMilkImage from '../assets/plant-milk.jpg'
import ingredientsImage from '../assets/ingredients.jpg'
import oatMilkProduct from '../assets/oat-milk-product.png'
import soyaMilkProduct from '../assets/soya-milk-product.png'
import coconutMilkProduct from '../assets/coconut-milk-product.png'
import almondMilkProduct from '../assets/almond-milk-product.png'
import matchaProduct from '../assets/matcha-product.png'
import chaiLatteProduct from '../assets/chai-latte-product.png'
import lionsManeProduct from '../assets/lions-mane-product.png'

export function Home() {
  const { t } = useTranslation()
  const [currentCountry, setCurrentCountry] = useState(() => {
    return localStorage.getItem('selectedCountry') || 'India'
  })

  useEffect(() => {
    const handleCountryChange = (event) => {
      setCurrentCountry(event.detail.country)
    }

    window.addEventListener('countryChanged', handleCountryChange)
    return () => window.removeEventListener('countryChanged', handleCountryChange)
  }, [])

  const products = [
    {
      id: 1,
      name: t('products.oatMilk.name'),
      description: t('products.oatMilk.description'),
      basePrice: 299,
      originalBasePrice: 349,
      image: oatMilkProduct,
      color: 'from-amber-900/20 to-amber-800/30',
      borderColor: 'border-amber-700/30',
      badges: t('products.oatMilk.badges', { returnObjects: true }),
      comingSoon: true
    },
    {
      id: 2,
      name: t('products.soyaMilk.name'),
      description: t('products.soyaMilk.description'),
      basePrice: 399,
      originalBasePrice: 449,
      image: soyaMilkProduct,
      color: 'from-blue-900/20 to-blue-800/30',
      borderColor: 'border-blue-700/30',
      badges: t('products.soyaMilk.badges', { returnObjects: true }),
      comingSoon: true
    },
    {
      id: 3,
      name: t('products.coconutMilk.name'),
      description: t('products.coconutMilk.description'),
      basePrice: 329,
      originalBasePrice: 379,
      image: coconutMilkProduct,
      color: 'from-purple-900/20 to-purple-800/30',
      borderColor: 'border-purple-700/30',
      badges: t('products.coconutMilk.badges', { returnObjects: true }),
      comingSoon: true
    },
    {
      id: 4,
      name: t('products.almondMilk.name'),
      description: t('products.almondMilk.description'),
      basePrice: 379,
      originalBasePrice: 429,
      image: almondMilkProduct,
      color: 'from-rose-900/20 to-rose-800/30',
      borderColor: 'border-rose-700/30',
      badges: t('products.almondMilk.badges', { returnObjects: true }),
      comingSoon: true
    },
    {
      id: 5,
      name: t('products.matcha.name'),
      description: t('products.matcha.description'),
      basePrice: 449,
      originalBasePrice: 499,
      image: matchaProduct,
      color: 'from-green-900/20 to-green-800/30',
      borderColor: 'border-green-700/30',
      badges: t('products.matcha.badges', { returnObjects: true }),
      comingSoon: true
    },
    {
      id: 6,
      name: t('products.chaiLatte.name'),
      description: t('products.chaiLatte.description'),
      basePrice: 349,
      originalBasePrice: 399,
      image: chaiLatteProduct,
      color: 'from-orange-900/20 to-orange-800/30',
      borderColor: 'border-orange-700/30',
      badges: t('products.chaiLatte.badges', { returnObjects: true }),
      comingSoon: true
    },
    {
      id: 7,
      name: t('products.lionsMane.name'),
      description: t('products.lionsMane.description'),
      basePrice: 549,
      originalBasePrice: 599,
      image: lionsManeProduct,
      color: 'from-indigo-900/20 to-indigo-800/30',
      borderColor: 'border-indigo-700/30',
      badges: t('products.lionsMane.badges', { returnObjects: true }),
      comingSoon: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-green-600/90 text-white border-green-500 text-sm px-4 py-2">
            <Leaf className="w-4 h-4 mr-2" />
            {t('hero.badge')}
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}<br />
            <span className="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">
              {t('hero.powered')}
            </span><br />
            <span className="bg-gradient-to-r from-lime-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {t('hero.goodness')}
            </span><br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-green-400 bg-clip-text text-transparent">
              {t('hero.everyday')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-green-800/50 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-green-100">{t('hero.rating')}</span>
            </div>
            <div className="flex items-center bg-green-800/50 rounded-full px-4 py-2">
              <Heart className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-100">{t('hero.customers')}</span>
            </div>
            <div className="flex items-center bg-green-800/50 rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-green-100">{t('hero.madeIn')}</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            <ShoppingCart className="w-5 h-5 mr-2" />
            {t('hero.orderNow')}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                <Leaf className="w-4 h-4 mr-2" />
                {t('about.badge')}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {t('about.title')}<br />
                <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                  {t('about.subtitle')}
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t('about.description2')}
              </p>
              <p className="text-xl font-semibold text-green-400 mb-6">
                {t('about.tagline')}
              </p>
              <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                {t('about.discoverStory')}
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-lime-400/20 rounded-3xl transform rotate-3"></div>
              <img 
                src={plantMilkImage} 
                alt="Plant-based ingredients" 
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200 text-sm px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              {t('products.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('products.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('products.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm ${product.borderColor} border-2 overflow-hidden`}>
                <div className="relative">
                  {product.comingSoon && (
                    <Badge className="absolute top-4 left-4 z-10 bg-green-600 text-white border-green-500">
                      {t('products.comingSoon')}
                    </Badge>
                  )}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-800 border-green-200">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 ml-2">(124 {t('common.reviews')})</span>
                  </div>
                  
                  <Badge className="mb-3 bg-green-100 text-green-800 border-green-200 text-xs">
                    {t('products.save')} {convertPrice(product.originalBasePrice - product.basePrice, currentCountry)}
                  </Badge>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-400">
                        {convertPrice(product.basePrice, currentCountry)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {convertPrice(product.originalBasePrice, currentCountry)}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white rounded-full"
                    disabled={product.comingSoon}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.comingSoon ? t('products.comingSoon') : 'Add to Cart'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t('features.plantBased.title')}</h3>
              <p className="text-gray-300">
                {t('features.plantBased.description')}
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t('features.cleanLabel.title')}</h3>
              <p className="text-gray-300">
                {t('features.cleanLabel.description')}
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t('features.madeInIndia.title')}</h3>
              <p className="text-gray-300">
                {t('features.madeInIndia.description')}
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t('features.premiumQuality.title')}</h3>
              <p className="text-gray-300">
                {t('features.premiumQuality.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-lime-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            {t('cta.description')}
          </p>
          <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            <ShoppingCart className="w-5 h-5 mr-2" />
            {t('cta.button')}
          </Button>
        </div>
      </section>
    </div>
  )
}


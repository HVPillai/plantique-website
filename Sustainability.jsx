import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Leaf, Recycle, Award, Globe, Heart, Shield, Factory, Truck } from 'lucide-react'

export function Sustainability() {
  const commitments = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: 'Plant-Based Promise',
      description: 'Every product is 100% plant-based, vegan, and cruelty-free. We believe in the power of plants to nourish both people and planet.',
      details: [
        'Zero animal products or by-products',
        'Cruelty-free testing and production',
        'Supporting sustainable agriculture',
        'Promoting biodiversity through plant-based choices'
      ]
    },
    {
      icon: <Recycle className="h-12 w-12 text-green-600" />,
      title: 'Eco-Friendly Packaging',
      description: 'Our packaging is designed with the environment in mind, using recyclable and biodegradable materials wherever possible.',
      details: [
        'Recyclable aluminum pouches',
        'Biodegradable labels and stickers',
        'Minimal plastic usage',
        'Compostable shipping materials'
      ]
    },
    {
      icon: <Factory className="h-12 w-12 text-green-600" />,
      title: 'Made in India',
      description: 'Proudly manufactured in India, supporting local communities and reducing our carbon footprint through shorter supply chains.',
      details: [
        'Local sourcing of ingredients',
        'Supporting Indian farmers',
        'Reduced transportation emissions',
        'Contributing to local economy'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: 'Clean Label Promise',
      description: 'Transparency is key. Our products contain only natural ingredients with no artificial additives or hidden components.',
      details: [
        'No artificial preservatives',
        'No artificial colors or flavors',
        'No hidden ingredients',
        'Clear, honest labeling'
      ]
    }
  ]

  const certifications = [
    {
      name: 'FSSAI Certified',
      description: 'Food Safety and Standards Authority of India certification ensuring quality and safety',
      icon: <Award className="h-8 w-8 text-green-600" />
    },
    {
      name: 'Vegan Certified',
      description: 'Officially certified vegan products with no animal ingredients or testing',
      icon: <Heart className="h-8 w-8 text-green-600" />
    },
    {
      name: 'ISO 22000',
      description: 'International food safety management system certification',
      icon: <Shield className="h-8 w-8 text-green-600" />
    },
    {
      name: 'Organic Certified',
      description: 'Certified organic ingredients sourced from sustainable farms',
      icon: <Leaf className="h-8 w-8 text-green-600" />
    }
  ]

  const impactStats = [
    { number: '50%', label: 'Less Water Usage', description: 'Compared to dairy production' },
    { number: '75%', label: 'Lower Carbon Footprint', description: 'Than traditional milk products' },
    { number: '100%', label: 'Recyclable Packaging', description: 'All our packaging materials' },
    { number: '1000+', label: 'Trees Saved', description: 'Through our plant-based choices' }
  ]

  const initiatives = [
    {
      title: 'Carbon Neutral Shipping',
      description: 'We offset 100% of our shipping emissions through verified carbon offset programs.',
      icon: <Truck className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Farmer Partnership Program',
      description: 'Direct partnerships with local farmers to ensure fair prices and sustainable practices.',
      icon: <Globe className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Zero Waste Goal',
      description: 'Working towards zero waste in our production facilities by 2025.',
      icon: <Recycle className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Community Gardens',
      description: 'Supporting urban farming initiatives and community gardens across India.',
      icon: <Leaf className="h-6 w-6 text-green-600" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              🌍 Our Commitment
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900">
              Sustainability & <span className="text-green-600">Ethics</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Plantique, sustainability isn't just a buzzword—it's the foundation of everything we do. 
              From sourcing to packaging, we're committed to creating products that are good for you and good for the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Commitments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four pillars that guide our mission to create sustainable, ethical plant-based products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {commitment.icon}
                    <CardTitle className="text-xl">{commitment.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{commitment.description}</p>
                  <ul className="space-y-2">
                    {commitment.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Our Environmental Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Real numbers showing how choosing plant-based makes a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-xl font-semibold">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality and ethics is backed by recognized certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ongoing projects and partnerships that drive positive environmental and social impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                      {initiative.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                      <p className="text-gray-600">{initiative.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Transparency */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-gray-900">Supply Chain Transparency</h2>
              <p className="text-xl text-gray-600">
                We believe in complete transparency about where our ingredients come from and how they're processed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sourcing</h3>
                <p className="text-gray-600">
                  Direct partnerships with certified organic farms across India, ensuring fair trade and sustainable practices.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Processing</h3>
                <p className="text-gray-600">
                  State-of-the-art facilities with minimal processing to preserve nutrients and natural flavors.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Packaging</h3>
                <p className="text-gray-600">
                  Eco-friendly packaging materials that protect product quality while minimizing environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Join Our Sustainable Journey</h2>
            <p className="text-xl opacity-90">
              Every purchase you make supports sustainable agriculture, reduces environmental impact, 
              and helps build a healthier future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/shop" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Shop Sustainable Products
              </a>
              <a 
                href="/contact" 
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


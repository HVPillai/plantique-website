import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Leaf, Heart, Users, Award, Globe, Lightbulb } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Sustainability',
      description: 'We believe in protecting our planet through eco-friendly practices and sustainable sourcing.'
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: 'Wellness',
      description: 'Your health and well-being are at the heart of everything we create and deliver.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Community',
      description: 'Building a community of conscious consumers who care about their health and the environment.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Quality',
      description: 'We never compromise on quality, using only the finest plant-based ingredients.'
    }
  ]

  const timeline = [
    {
      year: '2022',
      title: 'The Idea',
      description: 'Founded with a vision to make plant-based nutrition accessible and delicious for everyone in India.'
    },
    {
      year: '2023',
      title: 'First Products',
      description: 'Launched our signature oat milk powder and chai latte mix, perfecting the recipes through months of testing.'
    },
    {
      year: '2024',
      title: 'Growing Community',
      description: 'Expanded our product line and built a community of 1000+ happy customers across India.'
    },
    {
      year: 'Future',
      title: 'Global Vision',
      description: 'Planning to expand internationally while maintaining our commitment to quality and sustainability.'
    }
  ]

  const team = [
    { name: 'Priya Sharma', role: 'Founder & CEO', image: '/api/placeholder/300/300' },
    { name: 'Rahul Gupta', role: 'Head of Product', image: '/api/placeholder/300/300' },
    { name: 'Anita Patel', role: 'Sustainability Lead', image: '/api/placeholder/300/300' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Our Story
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900">
              About <span className="text-green-600">Plantique</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to revolutionize plant-based nutrition in India, 
              one delicious product at a time. Our journey began with a simple belief: 
              healthy living shouldn't compromise on taste or convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Updated with new story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Plantique: Brewing a Vegan Revolution in India</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In the bustling heart of India, where tradition meets innovation, Plantique Manufacturing was born with a bold mission — to make vegan living affordable and accessible for everyone. Inspired by the growing need for plant-based, dairy-free alternatives, Plantique set out to craft high-quality oat milk powder, soya milk powder, and coconut milk powder, along with delicious chai latte, matcha, and lion’s mane blends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The founders of Plantique believed that enjoying creamy, nutritious, and sustainable milk shouldn’t come at a premium price. They worked closely with local farmers and experts to source the finest ingredients, ensuring that every product was not only vegan but also packed with authentic flavor and rich nutrition.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From the smooth, comforting warmth of chai latte to the energizing earthiness of matcha and the brain-boosting power of lion’s mane, Plantique’s range offered something for every taste and lifestyle. The company’s dedication to quality and affordability quickly made it a favorite among health-conscious consumers across India.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Plantique’s story is one of passion and purpose — a journey to redefine how India drinks milk, proving that plant-based choices can be delicious, affordable, and good for the planet.
              </p>
              <div className="flex items-center space-x-4">
                <Globe className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">Made with love in India 🇮🇳</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/500/400" 
                alt="Our Mission" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Name */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center space-x-2">
              <Lightbulb className="h-8 w-8 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-900">Behind the Name</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <span className="text-green-600 font-bold text-2xl">Plantique</span> combines 
                "Plant" with "Boutique" - representing our curated selection of premium 
                plant-based products. Just like a boutique offers carefully selected, 
                high-quality items, we offer thoughtfully crafted plant-based nutrition 
                that doesn't compromise on taste or quality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The name reflects our commitment to being more than just another food brand - 
                we're a destination for conscious consumers who value quality, 
                sustainability, and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from product development to customer service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a simple idea to a growing community of plant-based enthusiasts
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working together to bring you the best plant-based products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-green-600 font-medium">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


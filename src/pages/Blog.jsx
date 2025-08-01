import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Calendar, User, ArrowRight, Clock, Heart, BookOpen } from 'lucide-react'

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Creamy Oat Milk Matcha Latte Recipe',
      excerpt: 'Start your morning with this energizing and antioxidant-rich matcha latte made with our premium oat milk powder.',
      content: 'Learn how to make the perfect matcha latte using our oat milk powder...',
      category: 'recipes',
      author: 'Priya Sharma',
      date: '2024-01-20',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      tags: ['Matcha', 'Oat Milk', 'Morning Drink', 'Antioxidants']
    },
    {
      id: 2,
      title: 'The Science Behind Plant-Based Nutrition',
      excerpt: 'Discover the nutritional benefits of plant-based foods and how they can improve your overall health and wellbeing.',
      content: 'Plant-based nutrition has gained significant attention in recent years...',
      category: 'wellness',
      author: 'Dr. Rahul Gupta',
      date: '2024-01-18',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      tags: ['Nutrition', 'Health', 'Plant-Based', 'Science']
    },
    {
      id: 3,
      title: 'Sustainable Packaging: Our Journey Towards Zero Waste',
      excerpt: 'Learn about our commitment to sustainable packaging and the steps we are taking to reduce environmental impact.',
      content: 'At Plantique, sustainability is not just a buzzword...',
      category: 'sustainability',
      author: 'Anita Patel',
      date: '2024-01-15',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      tags: ['Sustainability', 'Packaging', 'Environment', 'Zero Waste']
    },
    {
      id: 4,
      title: '5 Delicious Smoothie Recipes with Plant-Based Milk',
      excerpt: 'Transform your smoothie game with these nutrient-packed recipes using our plant-based milk powders.',
      content: 'Smoothies are a fantastic way to pack nutrition into your day...',
      category: 'recipes',
      author: 'Chef Meera',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      tags: ['Smoothies', 'Recipes', 'Plant Milk', 'Nutrition']
    },
    {
      id: 5,
      title: 'The Rise of Plant-Based Living in India',
      excerpt: 'Exploring the growing trend of plant-based living in India and its impact on health and environment.',
      content: 'India has always had a rich tradition of vegetarianism...',
      category: 'industry',
      author: 'Vikram Singh',
      date: '2024-01-10',
      readTime: '10 min read',
      image: '/api/placeholder/400/250',
      tags: ['India', 'Plant-Based', 'Trends', 'Lifestyle']
    },
    {
      id: 6,
      title: 'Golden Turmeric Latte: Ancient Wisdom, Modern Wellness',
      excerpt: 'Discover the healing properties of turmeric and how to make the perfect golden latte for immunity and wellness.',
      content: 'Turmeric has been used in Ayurvedic medicine for thousands of years...',
      category: 'wellness',
      author: 'Dr. Kavya Nair',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      tags: ['Turmeric', 'Ayurveda', 'Immunity', 'Wellness']
    },
    {
      id: 7,
      title: 'Behind the Scenes: How We Source Our Ingredients',
      excerpt: 'Take a look at our ingredient sourcing process and meet the farmers who help us create premium plant-based products.',
      content: 'Quality starts with the source. At Plantique, we believe...',
      category: 'behind-scenes',
      author: 'Plantique Team',
      date: '2024-01-05',
      readTime: '9 min read',
      image: '/api/placeholder/400/250',
      tags: ['Sourcing', 'Farmers', 'Quality', 'Transparency']
    },
    {
      id: 8,
      title: 'Plant-Based Protein: Complete Guide for Beginners',
      excerpt: 'Everything you need to know about plant-based protein sources and how to incorporate them into your diet.',
      content: 'One of the most common questions about plant-based diets...',
      category: 'wellness',
      author: 'Nutritionist Ravi',
      date: '2024-01-03',
      readTime: '12 min read',
      image: '/api/placeholder/400/250',
      tags: ['Protein', 'Nutrition', 'Plant-Based', 'Diet']
    }
  ]

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'recipes', label: 'Recipes' },
    { value: 'wellness', label: 'Wellness Tips' },
    { value: 'industry', label: 'Industry News' },
    { value: 'sustainability', label: 'Sustainability' },
    { value: 'behind-scenes', label: 'Behind the Scenes' }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 4)

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'recipes':
        return '🍽️'
      case 'wellness':
        return '💪'
      case 'industry':
        return '📈'
      case 'sustainability':
        return '🌱'
      case 'behind-scenes':
        return '🎬'
      default:
        return '📝'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'recipes':
        return 'bg-orange-100 text-orange-800'
      case 'wellness':
        return 'bg-blue-100 text-blue-800'
      case 'industry':
        return 'bg-purple-100 text-purple-800'
      case 'sustainability':
        return 'bg-green-100 text-green-800'
      case 'behind-scenes':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <BookOpen className="h-4 w-4 mr-1" />
              Plantique Blog
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900">
              Stories, Recipes & <span className="text-green-600">Wellness</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover delicious recipes, wellness tips, and insights into the world of plant-based living. 
              Join our community of health-conscious food lovers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {getCategoryIcon(featuredPost.category)} {categories.find(c => c.value === featuredPost.category)?.label}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-sm text-gray-600">
                {filteredPosts.length} articles found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(post.category)}>
                          {getCategoryIcon(post.category)} {categories.find(c => c.value === post.category)?.label}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{post.excerpt}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Never Miss an Article</h2>
            <p className="text-xl opacity-90">
              Subscribe to our newsletter and get the latest recipes, wellness tips, 
              and plant-based insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-80">
              Join 5,000+ readers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


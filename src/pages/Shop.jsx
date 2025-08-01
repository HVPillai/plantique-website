import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Search, Filter, Star, ShoppingCart } from 'lucide-react'

export function Shop() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const products = [
    {
      id: 1,
      name: 'Oat Milk Powder',
      description: 'Creamy, naturally sweet oat milk powder made from premium oats',
      price: 299,
      originalPrice: 349,
      image: '/api/placeholder/300/300',
      category: 'milk-powders',
      badges: ['Vegan', 'No Sugar Added', 'Gluten-Free'],
      rating: 4.8,
      reviews: 124,
      weight: '250g',
      inStock: true
    },
    {
      id: 2,
      name: 'Chai Latte Mix',
      description: 'Aromatic spiced chai with plant-based goodness and traditional Indian spices',
      price: 349,
      originalPrice: 399,
      image: '/api/placeholder/300/300',
      category: 'functional-lattes',
      badges: ['Organic', 'Caffeine', 'Antioxidants'],
      rating: 4.9,
      reviews: 89,
      weight: '200g',
      inStock: true
    },
    {
      id: 3,
      name: 'Matcha Latte',
      description: 'Premium ceremonial grade matcha blend with coconut milk powder',
      price: 449,
      originalPrice: 499,
      image: '/api/placeholder/300/300',
      category: 'functional-lattes',
      badges: ['Antioxidants', 'Energy Boost', 'Ceremonial Grade'],
      rating: 4.7,
      reviews: 67,
      weight: '150g',
      inStock: true
    },
    {
      id: 4,
      name: 'Soya Protein Powder',
      description: 'High-protein plant-based nutrition for muscle building and recovery',
      price: 399,
      originalPrice: 449,
      image: '/api/placeholder/300/300',
      category: 'milk-powders',
      badges: ['High Protein', 'Muscle Building', '25g Protein'],
      rating: 4.6,
      reviews: 156,
      weight: '500g',
      inStock: true
    },
    {
      id: 5,
      name: 'Golden Turmeric Latte',
      description: 'Warming turmeric blend with coconut milk and healing spices',
      price: 329,
      originalPrice: 379,
      image: '/api/placeholder/300/300',
      category: 'functional-lattes',
      badges: ['Anti-inflammatory', 'Immunity Boost', 'Caffeine-Free'],
      rating: 4.8,
      reviews: 92,
      weight: '200g',
      inStock: true
    },
    {
      id: 6,
      name: 'Almond Milk Powder',
      description: 'Rich and creamy almond milk powder with natural sweetness',
      price: 379,
      originalPrice: 429,
      image: '/api/placeholder/300/300',
      category: 'milk-powders',
      badges: ['Vitamin E', 'Heart Healthy', 'Low Calorie'],
      rating: 4.5,
      reviews: 78,
      weight: '250g',
      inStock: false
    }
  ]

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'milk-powders', label: 'Plant-Based Milk Powders' },
    { value: 'functional-lattes', label: 'Functional Lattes' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'name':
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Shop Plantique</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of premium plant-based products
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <Filter className="h-4 w-4 mr-2" />
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
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {sortedProducts.length} of {products.length} products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive" className="text-white">
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 space-y-2">
                      {product.badges.slice(0, 2).map((badge) => (
                        <Badge key={badge} variant="secondary" className="bg-white/90 text-green-800 block">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500 text-white">
                          Save ₹{product.originalPrice - product.price}
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
                      <p className="text-sm text-gray-500 mt-1">{product.weight}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/product/${product.id}`}>View</Link>
                        </Button>
                        <Button 
                          size="sm" 
                          disabled={!product.inStock}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


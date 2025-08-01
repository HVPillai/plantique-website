import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, ArrowLeft, Plus, Minus } from 'lucide-react'

export function ProductDetail() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, this would come from API
  const product = {
    id: parseInt(id),
    name: 'Oat Milk Powder',
    description: 'Creamy, naturally sweet oat milk powder made from premium oats',
    longDescription: 'Our premium oat milk powder is crafted from carefully selected oats, creating a creamy and naturally sweet plant-based milk alternative. Perfect for your morning coffee, smoothies, or baking needs. Each serving provides essential nutrients while being completely vegan and environmentally friendly.',
    price: 299,
    originalPrice: 349,
    images: [
      '/api/placeholder/500/500',
      '/api/placeholder/500/500',
      '/api/placeholder/500/500',
      '/api/placeholder/500/500'
    ],
    badges: ['Vegan', 'No Sugar Added', 'Gluten-Free', 'High Fiber'],
    rating: 4.8,
    reviews: 124,
    weight: '250g',
    inStock: true,
    stockCount: 15,
    ingredients: [
      'Organic Oats (95%)',
      'Natural Vanilla Extract',
      'Sea Salt',
      'Vitamin B12',
      'Calcium Carbonate'
    ],
    nutrition: {
      servingSize: '25g (2 tbsp)',
      calories: 95,
      protein: '3g',
      carbs: '16g',
      fat: '2g',
      fiber: '3g',
      sugar: '0g',
      sodium: '120mg'
    },
    benefits: [
      'Rich in beta-glucan fiber for heart health',
      'Naturally lactose-free and dairy-free',
      'Fortified with Vitamin B12 and Calcium',
      'Sustainable and eco-friendly',
      'No artificial preservatives or additives'
    ],
    usage: [
      'Mix 2-3 tablespoons with 200ml water',
      'Stir well or blend for best results',
      'Perfect for coffee, tea, smoothies, and cereals',
      'Can be used in baking and cooking',
      'Store in a cool, dry place after opening'
    ]
  }

  const relatedProducts = [
    { id: 2, name: 'Chai Latte Mix', price: 349, image: '/api/placeholder/200/200' },
    { id: 3, name: 'Matcha Latte', price: 449, image: '/api/placeholder/200/200' },
    { id: 5, name: 'Golden Turmeric Latte', price: 329, image: '/api/placeholder/200/200' }
  ]

  const reviews = [
    {
      id: 1,
      name: 'Priya S.',
      rating: 5,
      date: '2024-01-15',
      comment: 'Amazing taste and quality! My kids love it in their morning cereal.'
    },
    {
      id: 2,
      name: 'Rahul M.',
      rating: 5,
      date: '2024-01-10',
      comment: 'Perfect for my coffee. Creamy texture and no artificial taste.'
    },
    {
      id: 3,
      name: 'Anita K.',
      rating: 4,
      date: '2024-01-05',
      comment: 'Good product, though I wish the packaging was larger.'
    }
  ]

  const updateQuantity = (change) => {
    setQuantity(Math.max(1, Math.min(10, quantity + change)))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-green-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/shop">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>
        </Button>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="bg-green-100 text-green-800">
                    {badge}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 text-lg">{product.longDescription}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                )}
                {product.originalPrice > product.price && (
                  <Badge className="bg-red-500 text-white">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
              <p className="text-gray-600">Weight: {product.weight}</p>
              <p className="text-sm text-gray-500">
                {product.inStock ? `${product.stockCount} in stock` : 'Out of stock'}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => updateQuantity(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => updateQuantity(1)}
                    disabled={quantity >= 10}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ₹{product.price * quantity}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-green-50 rounded-lg p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="font-medium">Free shipping on orders over ₹500</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-medium">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How to Use:</h4>
                    <ul className="space-y-1">
                      {product.usage.map((instruction, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="nutrition" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Nutrition Facts</CardTitle>
                  <p className="text-sm text-gray-600">Per serving ({product.nutrition.servingSize})</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Calories</span>
                        <span className="font-medium">{product.nutrition.calories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein</span>
                        <span className="font-medium">{product.nutrition.protein}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carbohydrates</span>
                        <span className="font-medium">{product.nutrition.carbs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fat</span>
                        <span className="font-medium">{product.nutrition.fat}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Fiber</span>
                        <span className="font-medium">{product.nutrition.fiber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sugar</span>
                        <span className="font-medium">{product.nutrition.sugar}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sodium</span>
                        <span className="font-medium">{product.nutrition.sodium}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews ({product.reviews})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.name}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">₹{relatedProduct.price}</span>
                    <Button asChild size="sm">
                      <Link to={`/product/${relatedProduct.id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


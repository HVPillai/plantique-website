import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react'

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState(new Set([1])) // First item open by default

  const faqCategories = [
    {
      name: 'Products',
      icon: '🌱',
      faqs: [
        {
          id: 1,
          question: 'Are all Plantique products vegan?',
          answer: 'Yes, absolutely! All our products are 100% vegan and plant-based. We never use any animal-derived ingredients or by-products. Our products are also cruelty-free and not tested on animals.'
        },
        {
          id: 2,
          question: 'How long do your products last after opening?',
          answer: 'Once opened, our powder products should be consumed within 3-6 months for best quality. Store them in a cool, dry place in an airtight container. Always check the expiry date printed on the package.'
        },
        {
          id: 3,
          question: 'How do I mix and use the powder products?',
          answer: 'For milk powders: Mix 2-3 tablespoons with 200ml of water. For lattes: Mix 1-2 tablespoons with 150ml hot water or milk alternative. Stir well or blend for best results. You can adjust the quantity based on your taste preference.'
        },
        {
          id: 4,
          question: 'Do your products contain any allergens?',
          answer: 'Our products may contain traces of nuts, soy, and gluten depending on the specific product. Please check the ingredient list and allergen information on each product page. We clearly label all potential allergens.'
        },
        {
          id: 5,
          question: 'Are your products suitable for children?',
          answer: 'Yes, our products are safe for children above 2 years of age. However, we recommend consulting with a pediatrician before introducing any new food products to young children, especially if they have allergies or dietary restrictions.'
        }
      ]
    },
    {
      name: 'Orders & Delivery',
      icon: '📦',
      faqs: [
        {
          id: 6,
          question: 'What are your delivery timelines?',
          answer: 'We deliver across India within 3-7 business days. Metro cities typically receive orders within 3-4 days, while other locations may take 5-7 days. You will receive a tracking number once your order is shipped.'
        },
        {
          id: 7,
          question: 'Do you offer free shipping?',
          answer: 'Yes! We offer free shipping on all orders above ₹500. For orders below ₹500, a shipping charge of ₹50 applies. We also offer express delivery options for faster delivery.'
        },
        {
          id: 8,
          question: 'Can I track my order?',
          answer: 'Absolutely! Once your order is shipped, you will receive an email with tracking details. You can track your order status in real-time using the tracking number provided.'
        },
        {
          id: 9,
          question: 'Do you deliver internationally?',
          answer: 'Currently, we only deliver within India. However, we are working on expanding our delivery to international locations. Please subscribe to our newsletter to be notified when international shipping becomes available.'
        }
      ]
    },
    {
      name: 'Returns & Refunds',
      icon: '↩️',
      faqs: [
        {
          id: 10,
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for unopened products. If you are not satisfied with your purchase, you can return it within 30 days of delivery for a full refund. The product should be in its original packaging and condition.'
        },
        {
          id: 11,
          question: 'How do I initiate a return?',
          answer: 'To initiate a return, please contact our customer support team at hello@plantique.in or call us. Provide your order number and reason for return. We will guide you through the return process and provide a return shipping label.'
        },
        {
          id: 12,
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive the returned product. The refund will be credited to your original payment method. You will receive an email confirmation once the refund is processed.'
        },
        {
          id: 13,
          question: 'Can I exchange a product?',
          answer: 'Yes, you can exchange a product for a different variant or size within 30 days of delivery. The exchange process is similar to returns. Contact our support team to initiate an exchange.'
        }
      ]
    },
    {
      name: 'Nutrition & Health',
      icon: '💪',
      faqs: [
        {
          id: 14,
          question: 'Are your products suitable for people with diabetes?',
          answer: 'Many of our products are suitable for diabetics as they contain no added sugars. However, we recommend consulting with your healthcare provider before making any dietary changes, especially if you have specific health conditions.'
        },
        {
          id: 15,
          question: 'Do your products provide complete nutrition?',
          answer: 'Our products are designed to be nutritious plant-based alternatives. While they provide essential nutrients, we recommend maintaining a balanced diet with a variety of foods for complete nutrition.'
        },
        {
          id: 16,
          question: 'Can I use your products for weight management?',
          answer: 'Our plant-based products can be part of a healthy weight management plan. They are generally lower in calories than dairy alternatives and high in fiber. However, consult with a nutritionist for personalized advice.'
        }
      ]
    },
    {
      name: 'Company & Sustainability',
      icon: '🌍',
      faqs: [
        {
          id: 17,
          question: 'Where are your products manufactured?',
          answer: 'All our products are proudly made in India in FSSAI-certified facilities. We work with local suppliers and farmers to source high-quality ingredients while supporting the local economy.'
        },
        {
          id: 18,
          question: 'How sustainable is your packaging?',
          answer: 'We use eco-friendly packaging materials including recyclable aluminum pouches and biodegradable labels. We are continuously working to reduce our environmental impact and move towards 100% sustainable packaging.'
        },
        {
          id: 19,
          question: 'Do you have any certifications?',
          answer: 'Yes, we have multiple certifications including FSSAI (Food Safety), Vegan Certification, ISO 22000 (Food Safety Management), and Organic Certification for applicable products. These ensure quality and safety standards.'
        }
      ]
    }
  ]

  const allFaqs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.name }))
  )

  const filteredFaqs = allFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <HelpCircle className="h-4 w-4 mr-1" />
              Help Center
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about our products, delivery, and policies. 
              Can't find what you're looking for? Contact our support team.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {searchTerm ? (
            // Search Results
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Search Results ({filteredFaqs.length})
                </h2>
                <p className="text-gray-600">
                  Results for "{searchTerm}"
                </p>
              </div>
              
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              {faq.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {faq.question}
                          </h3>
                        </div>
                        {openItems.has(faq.id) ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {openItems.has(faq.id) && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No FAQs found matching your search. Try different keywords or browse by category below.
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Category View
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-2xl">{category.icon}</span>
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                    </div>
                    
                    <div className="space-y-3">
                      {category.faqs.map((faq) => (
                        <Card key={faq.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(faq.id)}
                              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <h3 className="text-base font-semibold text-gray-900 flex-1 pr-4">
                                {faq.question}
                              </h3>
                              {openItems.has(faq.id) ? (
                                <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                              )}
                            </button>
                            {openItems.has(faq.id) && (
                              <div className="px-4 pb-4">
                                <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Still Have Questions?</h2>
            <p className="text-xl opacity-90">
              Our customer support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="mailto:hello@plantique.in" 
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Us
              </a>
            </div>
            <div className="text-sm opacity-80">
              <p>Email: hello@plantique.in | Phone: +91 98765 43210</p>
              <p>Support Hours: Monday - Friday, 9 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


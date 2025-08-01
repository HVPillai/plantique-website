import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: 'Email Us',
      details: 'hello@plantique.in',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: 'WhatsApp',
      details: '+91 98765 43210',
      description: 'Quick support via WhatsApp'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: 'Address',
      details: 'Mumbai, Maharashtra, India',
      description: 'Our headquarters'
    }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: '#', color: 'hover:text-pink-600' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: '#', color: 'hover:text-blue-400' }
  ]

  const subjects = [
    'General Inquiry',
    'Product Question',
    'Order Support',
    'Return/Refund',
    'Partnership',
    'Media Inquiry',
    'Other'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <MessageCircle className="h-4 w-4 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900">
              Contact <span className="text-green-600">Plantique</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about our products or need support? We're here to help! 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                  <p className="text-lg font-medium text-green-600">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Note:</strong> We typically respond to emails within 2-4 hours during business hours.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <p className="text-gray-600">
                    Stay connected for updates, recipes, and wellness tips.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`p-3 bg-gray-100 rounded-lg transition-colors ${social.color}`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Answers</CardTitle>
                  <p className="text-gray-600">
                    Looking for immediate answers? Check our FAQ section.
                  </p>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/faq">Visit FAQ Section</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Store Locations */}
              <Card>
                <CardHeader>
                  <CardTitle>Store Locations</CardTitle>
                  <p className="text-gray-600">
                    Find Plantique products at these retail partners.
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Online Stores</h4>
                    <p className="text-sm text-gray-600">Available on major e-commerce platforms</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Retail Partners</h4>
                    <p className="text-sm text-gray-600">Select health food stores across India</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Find Stores Near You
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Stay Updated</h2>
            <p className="text-xl opacity-90">
              Subscribe to our newsletter for product updates, recipes, and wellness tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


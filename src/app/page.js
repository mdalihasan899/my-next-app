// app/page.js
import Link from 'next/link'
import ProductCard from './components/ProductCard'

// Mock data
const featuredProducts = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    description: "High-quality sound with noise cancellation and 30-hour battery life.",
    price: 99.99
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    description: "Track your health metrics with this advanced smartwatch.",
    price: 199.99
  },
  {
    id: 3,
    title: "Portable Laptop Stand",
    description: "Adjustable aluminum stand for comfortable working anywhere.",
    price: 49.99
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable t-shirt in various colors.",
    price: 29.99
  }
]

const features = [
  {
    title: "Secure Payments",
    description: "Your transactions are protected with bank-level security",
    icon: "🔒"
  },
  {
    title: "Fast Shipping",
    description: "Free shipping on orders over $50 across the country",
    icon: "🚚"
  },
  {
    title: "24/7 Support",
    description: "Our team is here to help you anytime you need",
    icon: "💬"
  },
  {
    title: "Easy Returns",
    description: "30-day return policy for all products",
    icon: "↩️"
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Amazing
              <span className="text-primary-600"> Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find unique items from trusted sellers. Join thousands of happy customers in our growing marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary text-lg px-8 py-4">
                Shop Now
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best shopping experience with secure payments and fast delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 card">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Check out our most popular items</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                comment: "Amazing quality products and fast shipping! Will definitely shop again.",
                rating: 5
              },
              {
                name: "Mike Chen",
                comment: "Great customer service and the product exceeded my expectations.",
                rating: 5
              },
              {
                name: "Emily Davis",
                comment: "Easy to use platform with secure payment options. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4 italic">{testimonial.comment}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover amazing products today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Start Shopping
            </Link>
            <Link href="/login" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Sell Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
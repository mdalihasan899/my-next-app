// app/products/[id]/page.js
import Link from 'next/link'

// Mock product data
const product = {
  id: 1,
  title: "Wireless Bluetooth Headphones",
  description: "Experience crystal-clear audio with our premium wireless Bluetooth headphones. Featuring advanced noise cancellation technology, these headphones provide an immersive listening experience whether you're commuting, working, or relaxing.",
  fullDescription: `These state-of-the-art wireless headphones combine superior sound quality with exceptional comfort. The over-ear design features plush memory foam ear cushions that mold to your ears, providing all-day comfort without fatigue.

Key Features:
• Advanced Active Noise Cancellation (ANC)
• 30-hour battery life with quick charge
• Premium sound quality with deep bass
• Comfortable over-ear design with memory foam
• Built-in microphone for crystal-clear calls
• Touch controls for easy operation
• Foldable design for easy storage

Perfect for travel, work, or leisure, these headphones deliver an unparalleled audio experience. The quick charge feature gives you 3 hours of playback with just 15 minutes of charging.`,
  price: 99.99,
  category: "Electronics",
  inStock: true,
  rating: 4.8,
  reviewCount: 1247
}

export default function ProductDetail() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Products
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Product Image */}
          <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden mb-6 lg:mb-0">
            <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
              <div className="text-8xl">🎧</div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary-600">${product.price}</span>
              {product.inStock && (
                <span className="ml-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  In Stock
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>

            {/* Add to Cart */}
            <div className="flex space-x-4 mb-8">
              <button className="flex-1 btn-primary py-4 text-lg">
                Add to Cart
              </button>
              <button className="btn-secondary py-4 px-6 text-lg">
                ❤️
              </button>
            </div>

            {/* Full Description */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h3>
              <div className="prose prose-gray max-w-none">
                {product.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
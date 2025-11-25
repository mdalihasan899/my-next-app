// app/products/page.js
import ProductCard from '../components/ProductCard'

// Mock products data
const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    description: "High-quality sound with noise cancellation and 30-hour battery life. Perfect for travel and work.",
    price: 99.99
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    description: "Track your health metrics with this advanced smartwatch. Heart rate, sleep, and activity tracking.",
    price: 199.99
  },
  {
    id: 3,
    title: "Portable Laptop Stand",
    description: "Adjustable aluminum stand for comfortable working anywhere. Lightweight and durable design.",
    price: 49.99
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable t-shirt in various colors. Made from 100% organic cotton.",
    price: 29.99
  },
  {
    id: 5,
    title: "Wireless Charging Pad",
    description: "Fast wireless charging for all Qi-enabled devices. Sleek and compact design.",
    price: 39.99
  },
  {
    id: 6,
    title: "Professional Camera Bag",
    description: "Water-resistant camera bag with customizable compartments. Perfect for photographers.",
    price: 89.99
  },
  {
    id: 7,
    title: "Stainless Steel Water Bottle",
    description: "Keep your drinks hot or cold for hours. Eco-friendly and BPA-free construction.",
    price: 24.99
  },
  {
    id: 8,
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys. Perfect for gaming and typing.",
    price: 79.99
  }
]

const categories = ["Electronics", "Clothing", "Home", "Sports", "Books", "Beauty"]

export default function Products() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing products from trusted sellers. Find exactly what you're looking for with our wide selection.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="input-field pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-auto">
              <select className="input-field">
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="w-full lg:w-auto">
              <select className="input-field">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  )
}
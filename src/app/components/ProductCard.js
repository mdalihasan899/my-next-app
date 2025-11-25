// components/ProductCard.js
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="card p-6 group">
      <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
          <div className="text-4xl">📱</div>
        </div>
      </div>
      
      <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors">
        {product.title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-2xl font-bold text-primary-600">${product.price}</span>
        <Link 
          href={`/products/${product.id}`}
          className="btn-primary text-sm py-2 px-4"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
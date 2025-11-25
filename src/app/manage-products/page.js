// app/manage-products/page.js
'use client'
import { useState } from 'react'
import Link from 'next/link'

// Mock products data
const initialProducts = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    description: "High-quality sound with noise cancellation",
    price: 99.99,
    status: "active",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    description: "Track your health metrics with this advanced smartwatch",
    price: 199.99,
    status: "active",
    createdAt: "2024-01-10"
  },
  {
    id: 3,
    title: "Portable Laptop Stand",
    description: "Adjustable aluminum stand for comfortable working",
    price: 49.99,
    status: "draft",
    createdAt: "2024-01-08"
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable t-shirt",
    price: 29.99,
    status: "active",
    createdAt: "2024-01-05"
  }
]

export default function ManageProducts() {
  const [products, setProducts] = useState(initialProducts)
  const [selectedProducts, setSelectedProducts] = useState([])

  const handleDelete = (productId) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId))
    }
  }

  const handleBulkDelete = () => {
    if (selectedProducts.length === 0) return
    if (confirm(`Are you sure you want to delete ${selectedProducts.length} products?`)) {
      setProducts(products.filter(p => !selectedProducts.includes(p.id)))
      setSelectedProducts([])
    }
  }

  const toggleSelectProduct = (productId) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const toggleSelectAll = () => {
    setSelectedProducts(
      selectedProducts.length === products.length
        ? []
        : products.map(p => p.id)
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Products</h1>
          <p className="text-gray-600">View and manage all your listed products</p>
        </div>

        {/* Bulk Actions */}
        {selectedProducts.length > 0 && (
          <div className="mb-6 p-4 bg-primary-50 border border-primary-200 rounded-lg flex items-center justify-between">
            <p className="text-primary-800">
              {selectedProducts.length} product{selectedProducts.length > 1 ? 's' : ''} selected
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleBulkDelete}
                className="text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Delete Selected
              </button>
              <button
                onClick={() => setSelectedProducts([])}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 font-medium text-gray-900 text-sm">
            <div className="col-span-1 flex items-center">
              <input
                type="checkbox"
                checked={selectedProducts.length === products.length && products.length > 0}
                onChange={toggleSelectAll}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
            </div>
            <div className="col-span-4">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Date Added</div>
            <div className="col-span-1">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {products.map(product => (
              <div key={product.id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                {/* Checkbox */}
                <div className="col-span-1 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleSelectProduct(product.id)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>

                {/* Product Info */}
                <div className="col-span-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">📦</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{product.title}</h3>
                      <p className="text-sm text-gray-500 truncate">{product.description}</p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 flex items-center">
                  <span className="font-medium text-gray-900">${product.price}</span>
                </div>

                {/* Status */}
                <div className="col-span-2 flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.status === 'active' ? 'Active' : 'Draft'}
                  </span>
                </div>

                {/* Date */}
                <div className="col-span-2 flex items-center text-sm text-gray-500">
                  {new Date(product.createdAt).toLocaleDateString()}
                </div>

                {/* Actions */}
                <div className="col-span-1 flex items-center space-x-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="text-primary-600 hover:text-primary-700 p-1 rounded transition-colors"
                    title="View"
                  >
                    👁️
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-700 p-1 rounded transition-colors"
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Get started by adding your first product.</p>
              <Link href="/add-product" className="btn-primary">
                Add Product
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden mt-6 space-y-4">
          {products.map(product => (
            <div key={product.id} className="card p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleSelectProduct(product.id)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm">📦</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="text-primary-600 hover:text-primary-700 p-1"
                  >
                    👁️
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-700 p-1"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">${product.price}</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.status === 'active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {product.status === 'active' ? 'Active' : 'Draft'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
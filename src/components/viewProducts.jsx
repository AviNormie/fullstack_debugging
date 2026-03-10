import { useState } from 'react'
import { products } from '../utils/products'
import ViewCard from './viewCard'

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home']

function ViewProducts() {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    const matchesCategory = category === 'All' || p.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <div className="bg-green-900 p-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-3 px-2 py-1 w-64"
        />
        <div className="flex gap-2 mb-3 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded ${category === cat ? 'bg-green-700 text-white' : 'bg-green-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span>this is a card</span>
        <div className="mt-2 space-y-2">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <ViewCard key={product.id} product={product} />
            ))
          )}
        </div>
        <div>card ended here</div>
      </div>
    </>
  )
}

export default ViewProducts

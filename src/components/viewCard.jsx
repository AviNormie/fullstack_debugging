function ViewCard({ product }) {
  if (!product) return null

  return (
    <div className="bg-green-900 rounded p-3 mb-2">
      {product.name} - {product.category} - ₹{product.price}
    </div>
  )
}

export default ViewCard
    
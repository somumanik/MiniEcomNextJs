// pages/products.js
"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Products() {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     image: 'https://via.placeholder.com/600x600', // Replace with actual product image
  //     description: 'Description for product 1. It has great features.',
  //     price: '$49.99',
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     image: 'https://via.placeholder.com/600x600', // Replace with actual product image
  //     description: 'Description for product 2. It is amazing and affordable.',
  //     price: '$29.99',
  //   },
  //   {
  //     id: 3,
  //     name: 'Product 3',
  //     image: 'https://via.placeholder.com/600x600', // Replace with actual product image
  //     description: 'Description for product 3. High quality and durable.',
  //     price: '$99.99',
  //   },
  //   {
  //     id: 4,
  //     name: 'Product 4',
  //     image: 'https://via.placeholder.com/600x600', // Replace with actual product image
  //     description: 'Description for product 4. Best choice for your needs.',
  //     price: '$79.99',
  //   },
  // ]
  let [product, setProduct] = useState(null)
  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalres) => {
        setProduct(finalres.products)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])


  return (
    // <div className="min-h-screen bg-gray-100 py-16 px-4">
    //   <div className="max-w-7xl mx-auto text-center">
    //     <h1 className="text-4xl font-extrabold text-gray-800">Our Products</h1>
    //     <p className="mt-4 text-lg text-gray-600">
    //       Browse through our wide range of products and find the perfect one for you.
    //     </p>

    //     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    //       {/* Product Cards */}
    //       {products.map((product) => (
    //         <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
    //           <img
    //             src={product.image}
    //             alt={product.name}
    //             className="w-full h-64 object-cover"
    //           />
    //           <div className="p-6">
    //             <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
    //             <p className="mt-2 text-gray-600">{product.description}</p>
    //             <div className="mt-4 text-2xl font-semibold text-gray-900">{product.price}</div>
    //             <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
    //               Add to Cart
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className='max-w-[1320px] mx-auto grid grid-cols-4 shadow-lg'>
        {
          product && product.map((items, index) => {
            return (
              <ProductItems data={items} key={index} />
            )
          })}

      </div>
    </div>
  )
}


function ProductItems({ data }) {
  let { id, title, description, category, price, thumbnail } = data
  return (
    <div className='shadow-2xl border-1 m-1 p-2'>
      <Link href={`/product/${id}`}>
        <div>
          <img src={thumbnail} alt="" />
          <h2 className='uppercase mt-3'>{category}</h2>
          <p>{title}</p>
          <p>Rs.{price}</p>
        </div>
      </Link>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div className="max-w-sm rounded p-4 border">
            <div className="w-20 h-25 py-20 mx-auto">
                <img src={product.image} alt="a"/>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">
                    {product.description}
                </p>
                <h2 className='mt-4 font-bold text-xl'>
                    {product.price}$
                </h2>
            </div>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.category}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-1 px-4 rounded-full">
                    <Link to={`/ProductDetail/${product.id}`}>Product detail</Link>
                </button>
            </div>
        </div>
    )
}

export default Product
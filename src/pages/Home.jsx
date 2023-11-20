import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/productsSlice';
import Product from '../components/Product';

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.data.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.data.length / productsPerPage);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {products.loading && "Yükleniyor..."}
      {products.error && products.error}
      <div className='flex flex-wrap'>
        {currentProducts.length > 0 &&
          currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
      <div className="flex justify-between mt-12">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
        >
          Önceki Sayfa
        </button>
        <span>Sayfa {currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentProducts.length < productsPerPage}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === totalPages || currentProducts.length < productsPerPage
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-600'
            }`}
        >
          Sonraki Sayfa
        </button>
      </div>
    </div>
  )
}

export default Home
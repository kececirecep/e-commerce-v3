import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../redux/productDetail';
import { addItemToCart } from '../redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.detail);


  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const addSuccess = () => {
    toast.success('ürün sepete eklendi', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  const handleAddToCart = () => {
    const newItem = {
      id: productDetail.data.id,
      name: productDetail.data.title,
      price: productDetail.data.price,
      image: productDetail.data.image,
      quantity: 1,
    };
    dispatch(addItemToCart(newItem));
    addSuccess()
  };

  return (
    <div>
      <ToastContainer />

      {productDetail.loading && "Yükleniyor..."}
      {productDetail.error && productDetail.error}
      {productDetail.data && (
        <div className='flex flex-wrap'>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg p-8" src={productDetail.data.image} alt="product image" />
              <div className="px-5 pb-5">
                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{productDetail.data.title}</h3>
                <p className='mt-4 mb-4'>
                  {productDetail.data.description}
                </p>
                <span className='bg-orange-300 rounded px-4 py-1 text-white mb-4 inline-block'>{productDetail.data.category}</span>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${productDetail.data.price}</span>
                  <a href="#" onClick={handleAddToCart}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
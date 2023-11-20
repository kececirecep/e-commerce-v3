import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, updateCartItemQuantity } from '../redux/cartSlice';
import { FaPlus, FaMinus } from 'react-icons/fa';


const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  let totalAmount = 0;

  cartItems.forEach(item => {
    totalAmount += item.price * item.quantity;
  });

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleUpdate = (id,newQuantity) => {
    dispatch(updateCartItemQuantity({ id: id, quantity: newQuantity }));
  }

  return (
    <div>
      <ul>
        {cartItems.map(item => (
          <li className='border p-4' key={item.id}>
            <img className='w-20' src={item.image} alt="" />
            <br />
            <span className='font-bold text-lg'>ürün adı : </span>{item.name} <br /> <span className='font-bold text-lg'>fiyat : </span>{item.price}$ <br /> <span className='font-bold text-lg'>adet :
            </span>

            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
              <button
                className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none flex items-center justify-center'
                onClick={() => {
                  handleUpdate(item.id, item.quantity - 1);
                }}
                disabled={item.quantity === 1}
              >
                <FaMinus />
              </button>
              <input
                className='border'
                type="number"
                value={item.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value);
                  if (newQuantity >= 0) {
                    handleUpdate(item.id, newQuantity);
                  }
                }}
              />
              <button
                className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer flex items-center justify-center'
                onClick={() => {
                  handleUpdate(item.id, item.quantity + 1);
                }}
              >
                <FaPlus />
              </button>
            </div>

            <br />
            <button onClick={() => handleRemoveItem(item.id)} className='inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md'>ürünü sil</button>
          </li>
        ))}
      </ul>
      <h3 className='font-bold text-lg mt-4'>toplam : {totalAmount}</h3>
    </div>
  )
}

export default Cart
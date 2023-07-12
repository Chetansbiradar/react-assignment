import React from 'react'

const Bill = ({items}) => {
    
  const total = items.reduce((accumulator, item)=>accumulator+item.price*item.quantity, 0);
  const quantity = items.reduce((accumulator, item)=>accumulator+item.quantity, 0);
  return (
    <div className='flex flex-col justify-start shadow-xl p-5 space-y-5'>
        <h1>Total Quantity: {quantity}</h1>
        <h1>Total Amount: {total}</h1>
        <button className="px-4 py-2 rounded bg-slate-300 hover:bg-green-400 hover:text-white hover:scale-110 duration-150">Checkout</button>
    </div>
  )
}

export default Bill
import { Link } from 'react-router-dom';
import Bill from './Bill';
import ShopItemCard from './ShopItemCard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector(store=>store.cart.items);

  return (
    <div className='flex m-5'>
      <div className='flex-[80]'>
        {items.length<=0 ? <div className='flex flex-col space-y-5 items-center'><h1>Cart is Empty</h1><Link to="/shopping" className='bg-slate-500 px-5 py-2 rounded-lg'>Go to Shop</Link></div> : items.map((item)=><ShopItemCard key={item.id} item={item}/>)}
      </div>
      <div className='flex-[20]'>
        <Bill items={items}/>
      </div>
    </div>
  )
}

export default Cart
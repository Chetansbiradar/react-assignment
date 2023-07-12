import Bill from './Bill';
import ShopItemCard from './ShopItemCard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector(store=>store.cart.items);

  return (
    <div className='flex m-5'>
      <div className='flex-[80]'>
        {items.length<=0 ? <h1>Cart is Empty</h1> : items.map((item)=><ShopItemCard key={item.id} item={item}/>)}
      </div>
      <div className='flex-[20]'>
        <Bill items={items}/>
      </div>
    </div>
  )
}

export default Cart
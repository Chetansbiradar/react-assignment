import { useEffect, useState } from 'react'
import ShopItemCard from './ShopItemCard';

const Shopping = () => {
  const [items, setItems] = useState([])

  useEffect(()=>{
    getItems()
  },[]);

  async function getItems() {
    const data = await fetch('https://fakestoreapi.com/products');
    const json = await data.json();
    setItems(json);
  }

  return (
    <div className='flex flex-wrap justify-center'>
    {items?.length <= 0 ? <p>Loading...</p>: (items.map((item) => <ShopItemCard key={item.id} item={item}/>))}
    </div>
  )
}

export default Shopping
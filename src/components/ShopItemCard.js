import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../utils/cartSlice";

const ShopItemCard = ({item}) => {

    console.log(item);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addToCart(item));
    }
    const handleRemoveItem = (item) => {
        dispatch(removeFromCart(item));
    }
    const cartItems = useSelector(store=>store.cart.items);
  return (
    <div className="w-60 flex flex-col shadow-xl p-5 rounded-md m-2 space-y-2 hover:scale-105 duration-200">
        <img src={item.image} alt={item.title} className="w-auto object-cover h-60"/>
        <h1 className="line-clamp-1">{item.title}</h1>
        <h2>Price: {item.price}</h2>
        <p>Category: {item.category}</p>
        <p>{item.rating.rate} Stars</p>
        {item.quantity && <p>Quantity: {item.quantity}</p>}
        <button className="px-4 py-2 rounded bg-slate-300 hover:bg-green-400 hover:text-white hover:scale-110 duration-150" onClick={
            ()=>handleAddItem(item) 
        }>Add to Cart</button>
        {cartItems.find((cartItem)=>cartItem.id===item.id) && <button className="px-4 py-2 rounded bg-slate-300 hover:bg-red-400 hover:text-white hover:scale-110 duration-150" onClick={
            ()=>handleRemoveItem(item)
        }   
        >Remove from Cart</button>} 
    </div>
  );
};

export default ShopItemCard
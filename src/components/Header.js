import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Title=()=>{
    return(
        <Link to="/">
            <div>
                <img src="https://ambula.app/assets/images/logo.png" alt="ambula logo" className="w-24"/>
            </div>
        </Link>
        
    )
}

const Header=()=>{
    const cartItems = useSelector(store=>store.cart.items);
    let initialValue = 0;
    return(
        <div className="flex justify-between p-5 shadow-md mb-2 items-center">
            <Title/>
            <ul className="flex space-x-2 items-center">
                <Link to="/" className="hover:scale-105 hover:bg-slate-400 px-3 py-2 rounded-xl hover:text-white duration-200">Home</Link>
                <Link to="/todo" className="hover:scale-105 hover:bg-slate-400 px-3 py-2 rounded-xl hover:text-white duration-200">To-Do</Link>
                <Link to="/shopping" className="hover:scale-105 hover:bg-slate-400 px-3 py-2 rounded-xl hover:text-white duration-200">Shoping</Link>
                <Link to="/api" className="hover:scale-105 hover:bg-slate-400 px-3 py-2 rounded-xl hover:text-white duration-200">API Test</Link>
                <Link to="/cart" className="bg-slate-600 px-3 py-2 rounded-xl text-white hover:scale-110 duration-150">Cart {cartItems?.reduce((accumulator, item)=>accumulator+item.quantity, initialValue)}</Link>
            </ul>
        </div>
    )
}

export default Header;
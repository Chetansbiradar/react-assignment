import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Title=()=>{
    return(
        <Link to="/">
            <div>
                <h1>Ambula</h1>
            </div>
        </Link>
        
    )
}

const Header=()=>{
    const cartItems = useSelector(store=>store.cart.items);
    let initialValue = 0;
    return(
        <div className="flex justify-between p-5 shadow-md mb-2">
            <Title/>
            <ul className="flex space-x-2">
                <Link to="/">Home</Link>
                <Link to="/todo">To-Do</Link>
                <Link to="/shopping">Shoping</Link>
                <Link to="/api">API Test</Link>
                <Link to="/cart">Cart {cartItems?.reduce((accumulator, item)=>accumulator+item.quantity, initialValue)}</Link>
            </ul>
        </div>
    )
}

export default Header;
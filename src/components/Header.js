import { Link } from "react-router-dom";

const Title=()=>{
    return(
        <div>
            <h1>Ambula</h1>
        </div>
    )
}

const Header=()=>{
    return(
        <div className="flex justify-between p-5 shadow-xl">
            <Title/>
            <ul className="flex space-x-2">
                <Link to="/">Home</Link>
                <Link to="/todo">To-Do</Link>
                <Link to="/shopping">Shoping</Link>
                <Link to="/api">API Test</Link>
                <Link to="/cart">Cart</Link>
            </ul>
        </div>
    )
}

export default Header;
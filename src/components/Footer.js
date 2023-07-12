import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex justify-between p-5 bg-slate-400 absolute bottom-0 w-full">
            <p> &copy; Copyright 2023</p>
            <ul className="flex space-x-2">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Footer;
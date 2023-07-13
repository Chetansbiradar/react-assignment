import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex justify-between p-5 bg-slate-200">
            <p> &copy; Copyright 2023</p>
            <ul className="flex space-x-2">
                <li><Link  className="hover:scale-105 hover:bg-slate-700 px-3 py-2 rounded-xl hover:text-white duration-200" to="/about">About</Link></li>
                <li><Link className="hover:scale-105 hover:bg-slate-700 px-3 py-2 rounded-xl hover:text-white duration-200" to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Footer;
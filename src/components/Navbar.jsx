import { Link, NavLink } from "react-router-dom"


export default function Navbar() {

    return (
        <div className="bg-light">
            <div className="container">
                <nav className="navbar">
                    <ul className="nav nav-pills">
                        <li className="navbar-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/chi-siamo' className="nav-link">Chi Siamo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/prodotti' className="nav-link">Prodotti</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
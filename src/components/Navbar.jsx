import { Link, NavLink } from "react-router-dom"

import { useContext } from "react"
import BudgetContext from "../Contexts/BudgetContext"

export default function Navbar() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    const toggleBudgetMode = () => {
        setBudgetMode(!budgetMode) // cambio da true a false e viceversa
    }
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

                    <button
                        onClick={toggleBudgetMode}
                        className={`btn ${budgetMode ? 'btn-warning' : 'btn-primary'}`}
                    >
                        {/* testo che cambia in base allo stato di BudgetMode */}
                        {budgetMode ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget'}
                    </button>

                </nav>
            </div>
        </div>
    )
}
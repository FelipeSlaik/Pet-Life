import "./Nav.css"
import { GiBubbles } from "react-icons/gi";

const Nav = () => {
    return (
        <header>
            <div className="logo">
                <img src="/img/pet-life.png" alt="Logo da Pet Life" />
                <GiBubbles className="bubbles"/>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="#">Clínica Pet</a></li>
                    <li><a href="#">Pet Hotel</a></li>
                    <li><a href="#">Medicamentos</a></li>
                    <li><a href="#">Babá de Pet</a></li>
                    <li><a href="#">Treino Pet</a></li>
                </ul>
            </nav>
        </header>

    )
}

export default Nav
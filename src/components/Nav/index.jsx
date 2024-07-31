import "./Nav.css"

function Nav() {
    return (
        <header>
            <div className="logo">
                <img src="./public/img/pet-life.png" alt="Logo da Pet Life" />
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="#">Clínica Pet</a></li>
                    <li><a href="#">Pet Hotel</a></li>
                    <li><a href="#">Tratamento Pet</a></li>
                    <li><a href="#">Babá de Pet</a></li>
                    <li><a href="#">Treino Pet</a></li>
                </ul>
            </nav>
        </header>

    )
}

export default Nav
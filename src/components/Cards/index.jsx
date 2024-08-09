import "./Cards.css"

const Cards = () => {
    return (
        <section className="card-container">
            <h3>Nossa avaliação</h3>
            <h1>O que eles dizem?</h1>
            
            <div className="cards">

                <div className="card">
                    <img className="user" src="./img/oz-noel.jpg" alt="Oslow de natal" />

                    <h4>Oslow</h4>
                    <div className="avaliation-stars">
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />

                        <p className="card-text">Pessoal super atencioso!
                             Primeira vez que fui tomar banho fora de casa e me trataram super bem.
                             Voltei com o pelo lindo,
                             macio e cheiroso. Gostei muito do serviço!
                        </p>

                    </div>
                </div>
                <div className="card">
                    <img className="user" src="./img/pituxa.jpg" alt="Pituxa" />

                    <h4>Pituxa</h4>
                    <div className="avaliation-stars">
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />

                        <p className="card-text">Ambiente muito gostoso, 
                            onde nós doguinhos nos sentimos bem. 
                            Atendimento maravilhoso e humanizado. Recomendo
                        </p>

                    </div>
                </div>
                <div className="card">
                    <img className="user" src="./img/laika.jpg" alt="Laika" />

                    <h4>Laika</h4>
                    <div className="avaliation-stars">
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />

                        <p className="card-text">Ótimo, o melhor da região,
                             e olha q meu dono me levou em vários outros para tomar banho,
                              mas esse foi o que mais me agradou, me deixando super cheirosa e linda.
                        </p>

                    </div>
                </div>
                <div className="card">
                    <img className="user" src="./img/aava.jpg" alt="Aava" />

                    <h4>Aava</h4>
                    <div className="avaliation-stars">
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />
                        <img className="star" src="./img/star.svg" alt="Estrelas" />

                        <p className="card-text">Fui atendida com muito carinho,
                             fizeram os curativos com cuidado e não me deixaram com dor, 
                             de tão bem feito que foi feito.
                            Atendimento nota 10
                        </p>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cards
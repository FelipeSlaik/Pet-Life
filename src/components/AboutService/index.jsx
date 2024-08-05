import './AboutService.css'

const AboutService = () => {
    return (
        <section className='about-us'>
            <div className='experience'>
                <img src="./img/bad-cat.png" alt=" Gato derrubando vaso da mesa" />
                <h2>Com experiência</h2>
                <p>Com funcionários especialistas em suas áreas
                    bem como garantias de certificação oficial
                    a segurança do seu animal de estimação.
                </p>
            </div>
            <div className='experience'>
                <img src="./img/cat-dog.png" alt=" Gato e Cachorro" />
                <h2>Com coração</h2>
                <p>Não apenas especialistas, mas também profissionais
                    em cuidados e tratamento
                    trabalhando de todo o coração.
                </p>
            </div>
            <div className='experience'>
                <img src="./img/cat-astronaut.png" alt=" Gato derrubando vaso da mesa" />
                <h2>Com o melhor serviço</h2>
                <p>Consulta gratuita para seus animais de estimação,
                     do problema leve ao pesado.
                </p>
            </div>
        </section>
    )
}

export default AboutService
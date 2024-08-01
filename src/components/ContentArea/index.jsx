import './ContentArea.css'
import { BsStars } from "react-icons/bs";

const ContentArea = () => {
    return (
        <section className='content-container'>
            <div className='content-image'>
                <img className='eclipse' src="/img/Ellipse.png" alt="" />
                <img className='dog'src="/img/pastor-alemao.png" alt="Imagem de um cachorro da raça Pastor Alemão" />
            </div>

            <div className='content-text'>
                <h2>Esteja brilhando</h2>
                <h2>Seja fofo<BsStars className='stars'/></h2>
                <p><BsStars className='stars'/> Pets felizes são Pets limpinhos e cheirosos. 
                    Prestamos serviços de banho, tosa, 
                    hidratação e tratamentos especiais para cães, gatos, 
                    com uma boa dose de carinho.<BsStars className='stars'/>
                </p>
                <button className='btn'>Saiba mais</button>
            </div>
        </section>
    )
}

export default ContentArea
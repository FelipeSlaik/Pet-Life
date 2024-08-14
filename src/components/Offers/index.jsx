import './Offers.css'

const Offers = () => {
    return (
        <section className='offers-container'>
            <div className='offers-text'>
                <h3>Nossas novidades & promoções</h3>
                <h1>Assine nosso boletim informativo</h1>
                <p>São muitas promoções disponíveis especialmente para você, não quer perder?<br />
                    Venha participar e se inscrever gratuitamente!
                </p>
            </div>

            <div className='email-container'>
                <input type="email" id='email' name='email'
                    placeholder='Digite seu endereço de e-mail' />

                <button className='btn-submit' type='submit'>Inscrever-se</button>
            </div>
        </section>
    )
}

export default Offers
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='footer-container'>
            <div className='social-media-container'>
                
                <img src="/img/pet-life.png" alt="Logo da Pet Life" />
                
                <div className='social-media'>
                    <FaInstagram className='icon' />
                    <CiGlobe className='icon'/>
                    <FaXTwitter className='icon'/>
                    <FaTiktok className='icon'/>
                </div>

            </div>

            <div className='service'>
                <h4>Serviços</h4>
                <ul>
                    <li>Animais</li>
                    <li>Gato</li>
                    <li>Cachorro</li>
                    <li>Localização</li>
                    <li>Banho e Tosa</li>
                </ul>
            </div>

            <div className='support'>
                <h4>Suporte</h4>
                <ul>
                    <li>Conta</li>
                    <li>Centro de suporte</li>
                    <li>Avaliações</li>
                    <li>Contatos</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer
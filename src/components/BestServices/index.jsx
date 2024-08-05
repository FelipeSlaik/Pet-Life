import './BestServices.css'
import { FaClinicMedical } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { GiMedicalPack } from "react-icons/gi";
import { TbBabyCarriageFilled } from "react-icons/tb";
import { GiJumpingDog } from "react-icons/gi";


const BestService = () => {
    return (
        <section className='best-services' >
            <div className='services'>
                <h2>O Melhor Serviço</h2>
                <p>Oferecemos o melhor e mais experiente serviço
                    para apoiar você e as necessidades do seu pet.
                </p>
            </div>

            <div className='services-options'>
                <div className='service-items'>
                    <FaClinicMedical className='service-icons' />
                    <h3>Clínica Pet</h3>
                </div>
                <div className='service-items'>
                    <GiNightSleep className='service-icons'/>
                    <h3>Pet Hotel</h3>
                </div>
                <div className='service-items'>
                    <GiMedicalPack className='service-icons'/>
                    <h3>Medicamentos</h3>
                </div>
                <div className='service-items'>
                    <TbBabyCarriageFilled className='service-icons'/>
                    <h3>Babá de Pet</h3>
                </div>
                <div className='service-items'>
                    <GiJumpingDog className='service-icons'/>
                    <h3>Treino Pet</h3>
                </div>  
            </div>

            <div className='next-section'>
                <h4>Nosso Serviço</h4>
                    <h1>Como é que funciona</h1>
            </div>
        </section>
    )
}

export default BestService
import './FoodArea.css'
import { MdOutlinePets } from "react-icons/md";
import { GiCat } from "react-icons/gi";
const FoodArea = () => {
    return (
        <section className='food-container'>
            <div className='text-container'>
            <div className='text-info'>
            <h2>Alimentos de qualidade <GiCat/></h2>
            <p>Um alimento saboroso, 
                com os nutrientes necessários para a saúde do seu gato,
                 que vai transbordar seu pet de felicidade.
                 Adquira a linha Cat Happy com muita saúde e uma patinha estendida!
            </p>
            </div>

            <div className='text-info'>
            <h2><MdOutlinePets/>Seu Pet vai amar</h2>
            <p>Ver seu melhor amigo feliz é um prato cheio de alegria. 
                A linha Dog Happy para cães garante isso e muito mais: 
                um alimento de qualidade, com sabor irresistível, 
                que nutre seu pet com muito cuidado e amor.
            </p>
            </div>
           
            </div>
                <div className='cat-dog'>
                    <img src="img/cat-food.png" alt="gato comendo" />
                    
                    <img src="img/dog-food.png" alt="cachorro comendo" />
                </div>
        </section>
    )
}

export default FoodArea
import '../styles/Page3.css'
import CoffeeCard from '../components/CoffeeCard'
import cappuccinoImage from '../assets/images/cappuccino.png'
import chaiLatte from '../assets/images/chai-latte.png'
import machiato from '../assets/images/machiato.png'
import expresso from '../assets/images/expresso.png'
import { useEffect } from 'react'
import Aos from 'aos'
function Page3() {

    useEffect(() => {
        Aos.refresh();
    }, [])
    return (
        <>

            <div className="page3-container" data-aos="fade-up">
                <div className="title">
                    Enjoy a new blend of coffee style
                </div>
                <div className="desc">
                    Explore all flavours of coffee with us. There is always a new cup worth experiencing
                </div>

                <div className="coffee-container">
                    <CoffeeCard name="Cappuccino" image={cappuccinoImage} delay="500" aos="fade-up" />
                    <CoffeeCard name="Chai Latte" image={chaiLatte} delay="700" aos="fade-up" />
                    <CoffeeCard name="Macchiato" image={machiato} delay="900" aos="fade-up" />
                    <CoffeeCard name="Expresso" image={expresso} delay="1100" aos="fade-up" />
                </div>
            </div>
        </>
    )
}

export default Page3
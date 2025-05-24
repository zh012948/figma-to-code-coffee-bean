import '../styles/Page3.css'
import CoffeeCard from '../components/CoffeeCard'
import cappuccinoImage from '../assets/images/cappuccino.png'
import chaiLatte from '../assets/images/chai-latte.png'
import machiato from '../assets/images/machiato.png'
import expresso from '../assets/images/expresso.png'
function Page3() {
    return (
        <>
            <div className="page3-container">
                <div className="title">
                    Enjoy a new blend of coffee style
                </div>
                <div className="desc">
                    Explore all flavours of coffee with us. There is always a new cup worth experiencing
                </div>

                <div className="coffee-container">
                    <CoffeeCard name="Cappuccino" image={cappuccinoImage} />
                    <CoffeeCard name="Chai Latte" image={chaiLatte} />
                    <CoffeeCard name="Macchiato" image={machiato} />
                    <CoffeeCard name="Expresso" image={expresso} />
                </div>
            </div>
        </>
    )
}

export default Page3
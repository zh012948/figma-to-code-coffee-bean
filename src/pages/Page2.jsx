import '../styles/Page2.css'
import coffeeMug from '../assets/images/Mask_group.png'
import leftCoffeeBlast from '../assets/images/coffee_blast_left.png'

function Page2() {
    return (
        <>

            <div className="page2-container" data-aos="zoom-in">
                <div className="content-container">

                    <div className="title">
                        Discover the best coffee
                    </div>

                    <div className="text">
                        Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
                    </div>

                    <div className="btnLearnMore">
                        <button>Learn More</button>
                    </div>
                    <img src={leftCoffeeBlast} alt="left Coffee Blast" className="left-blast" />
                </div>

                <div className="image-container">
                    <img src={coffeeMug} alt="coffee mug" />
                </div>
            </div>

        </>
    )
}

export default Page2
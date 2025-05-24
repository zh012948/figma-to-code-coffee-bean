import '../styles/Hero.css'
import coffee from '../assets/images/Coffee.png'

function Hero() {
    return (
        <>
            <div className="hero-container" >
                <div className="overlay"></div>
                <div className="hero-content">
                    <div className="wrapper">
                        <div className="top-info">
                            We've got your morning covered with
                        </div>

                        <div className="coffee-img">
                            <img src={coffee} alt="coffee" />
                        </div>

                        <div className="lower-info">
                            <span>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</span>
                        </div>

                        <div className="order-button">
                            <button className='btnOrder'>Order Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero


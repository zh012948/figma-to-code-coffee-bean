
import coffeeCup from '../assets/images/cup.png'
import '../styles/Page5.css'

function Page5() {
    return (
        <>

            <div className="page5-wrapper">
                <div className="page5-container">
                    <div className="overlay"></div>
                    <div className="content-container">
                        <div className="heading">
                            Get a chance to have an <br /> Amazing morning
                        </div>

                        <div className="desc3">
                            We are giving you our one time opportunity to <br /> experience a better life with coffee
                        </div>

                        <div className="order-button">
                            <button className='btnOrder5'>Order Now</button>
                        </div>
                    </div>

                    <div className="img-container">
                        <img src={coffeeCup} alt="Coffee Cup" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page5
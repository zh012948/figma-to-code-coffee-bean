import '../styles/Page4.css'
import topCoffeeBlast from '../assets/images/top_coffee_blast.png'
import ContentCard from '../components/ContentCard'
import beans from '../assets/images/coffee-beans.png'
import quality from '../assets/images/quality.png'
import coffeeCup from '../assets/images/coffee-cup.png'
import bestPrice from '../assets/images/best-price.png'
function Page4() {

    return (
        <>
            <div className="page4-container" >
                <div className='top-blast-container'>
                    <img src={topCoffeeBlast} alt="top Coffee Blast" className='top-blast' />
                </div>

                <div className="question">Why are we different?</div>
                <div className="desc1">We don’t just make your coffee, we make your day!</div>

                <div className="content-card-container">
                    <ContentCard image={beans} title="Supreme Beans" message="Beans that provides great taste" delay="300" aos="fade-up" />
                    <ContentCard image={quality} title="High Quality" message="We provide the highest quality" delay="400" aos="fade-up" />
                    <ContentCard image={coffeeCup} title="Extraordinary" message="Coffee like you have never tasted" delay="500" aos="fade-up" />
                    <ContentCard image={bestPrice} title="Affordable Price" message="Our Coffee prices are easy to afford" delay="600" aos="fade-up" />
                </div>

                <div className="desc1 desc2" data-aos="fade-up" data-aos-delay="000">
                    Great ideas start with greate coffee, lets help you achieve that
                </div>

                <div className="text-started" data-aos="fade-up" data-aos-delay="000">
                    Get started today.
                </div>

                <button className="btnJoin" data-aos="fade-up" data-aos-delay="000">Join Us</button>
            </div>
        </>
    )

}

export default Page4
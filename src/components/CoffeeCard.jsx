import '../styles/CoffeeCard.css'

function CoffeeCard(props) {
    return (
        <>

            <div>
                <div className="card">

                    <img src={props.image} alt="cappucino" />
                </div>

                <div className="content-card">
                    <div className='name'>{props.name}</div>
                    <div>Coffee 50% | Milk </div>
                    <div className='price'>$8.50</div>
                </div>

                <button className="order-now">Order Now</button>
            </div>
        </>
    )
}

export default CoffeeCard
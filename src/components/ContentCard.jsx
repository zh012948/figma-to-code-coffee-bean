import '../styles/ContentCard.css'

function ContentCard(props) {
    return (
        <>
            <div className="custom-card">
                <img src={props.image} alt="beans" className='custom-image' />
                <span className="custom-title">{props.title}</span>
                <span className="message">{props.message}</span>

            </div>
        </>
    )
}

export default ContentCard
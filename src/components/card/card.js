import star from '../../img/star.png'
import './card.css'

const Card = ({id, img,title, description, rate, count, price}) => {

  return (
    <li className='card' id={id}>
      <div className="card-cover">
      <img  src={img} alt="" className="card-img" />
        <p className="card-title">{title}</p>
        <div className="rated">
        <p className="rates"><img src={star} width={16} alt="" /> {rate} <span className="rate-num">({count} rated)</span>
        </p>
        <p className="card-price">{price} $</p>
        </div>
        {/* <p className='card-description'>{description}</p> */}

      </div>
    </li>
  )
}

export default Card
// Write your code here.
import './index.css'

function CardItem(props) {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`layer ${className}`}>
      <h1 className="head">{title}</h1>
      <p className="info">{description}</p>
      <img className="pic" src={imgUrl} alt={title} />
    </li>
  )
}
export default CardItem

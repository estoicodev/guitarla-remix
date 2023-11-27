import { Link } from "@remix-run/react"
import styles from "../styles/store.css"

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
  ]
}

const Guitar = ({guitar}) => {
  const { name, description, price, url, image } = guitar
  const imageUrl = image.data.attributes.formats.small.url

  return (
    <div className="card">
      <img src={imageUrl} alt={`${name} Guitar`} />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <Link className="link" to={`/store/${url}`}>View product</Link>
      </div>
    </div>
)
}

export default Guitar

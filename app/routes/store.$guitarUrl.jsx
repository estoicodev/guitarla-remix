import { useState } from "react"
import { Link, useLoaderData, useOutletContext } from "@remix-run/react"
import { getSingleGuitar } from "~/models/guitars.server"

export const loader = async ({params}) => {
  const { guitarUrl } = params
  const guitar = await getSingleGuitar(guitarUrl)

  if (guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitar Not Found'
    })
  }
  return guitar
}

export const meta = ({data}) => {
  const guitar = data.data[0].attributes
  return [
    { title: `GuitarLA - ${guitar.name}` },
    {
      name: "description",
      content: `Guitar shop, ${guitar.description}`,
    },
  ]
}

function Guitar() {
  const result = useLoaderData()
  const guitar = result.data[0]?.attributes
  const { name, description, price, image } = guitar
  const imageUrl = image.data?.attributes?.formats?.small?.url
  
  const [quantity, setQuantity] = useState(0)

  const { addToCart } = useOutletContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (quantity < 1) {
      alert('Please select a quantity')
      return
    }

    const guitarSelected = {
      id: result.data[0]?.id,
      name: guitar.name,
      image: imageUrl,
      price: guitar.price,
      quantity
    }

    addToCart(guitarSelected)

    console.log(`You added ${quantity} ${name} to your cart`)
  }

  return (
    <article className="card">
      <img src={imageUrl} alt={`${name} Guitar`} />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="quantity">Quantity</label>

          <select
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={e => setQuantity(+e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input className="link" type="submit" value="Add to cart"/>
        </form>

        {/* <Link className="link" to="/store">Add to cart</Link> */}
        <Link className="link" to="/store">Back to store</Link>
      </div>
    </article>
  )
}

export default Guitar

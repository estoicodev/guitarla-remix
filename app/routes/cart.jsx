import styles from "~/styles/cart.css"
import { useOutletContext } from "@remix-run/react"
import { useState, useEffect } from "react"

export const meta = () => {
  return [
    {
      title: "GuitarLA - Shopping Cart",
    },
    {
      name: "description",
      description: "Shopping Cart of guitars, music, blog, shop",
    }
  ]
}

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
  ]
}

const Cart = () => {
  const { cart, updateQuantity, deleteFromCart } = useOutletContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart?.reduce((acc, guitar) => {
      return acc + (guitar.price * guitar.quantity)
    }, 0)

    setTotal(total)
  }, [cart])

  return (
    <main className="container main">
      <h1 className="heading">Shopping Cart</h1>
      <div className="shopping-cart">
        <div className="articles">
          <h2>Articles</h2>
          {
            cart?.length
              ? cart?.map((guitar) => {
                return (
                  <article key={guitar.id} className="product">
                    <div className="img-ctn">
                      <img src={guitar.image} alt={`${guitar.name} Guitar`} />
                    </div>
                    <div className="content">
                      <h3 className="name">{guitar.name}</h3>

                      <div className="quantity">
                        <label htmlFor="quantity">Quantity:</label>
                        <select
                          id="quantity"
                          name="quantity"
                          value={guitar.quantity}
                          onChange={e => updateQuantity({
                            guitarId: guitar.id,
                            quantity: e.target.value
                          })}
                        >
                          {[...Array(10)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      <p className="price">Price: <span>${guitar.price}</span></p>
                      <p className="subtotal">Subtotal: <span>${guitar.price * guitar.quantity}</span></p>
                    </div>

                    <button
                      className="btn-delete"
                      onClick={() => deleteFromCart(guitar.id)}
                    >
                      X
                    </button>
                  </article>
                )})
              : <p className="empty">Your cart is empty...</p>
          }
        </div>
        <aside className="resume">
          <h3>Order Resume</h3>
          <p>Total to pay: ${total}</p>
        </aside>
      </div>
    </main>
  )
}

export default Cart

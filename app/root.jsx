import { useState, useEffect } from "react"
import { cssBundleHref } from "@remix-run/css-bundle"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react"
import indexStyles from "~/styles/index.css"
import errorStyles from "~/styles/error.css"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import Error from "./components/Error"

export const meta = ({ error }) => {
  if (error?.status === 404) {
    return [
      { title: `GuitarLA - ${error?.status}` },
      {
        name: "description",
        content: `content not found`,
      },
    ]
  }

  return [
    { title: "GuitarLA | Remix" },
    {
      name: "description",
      content: "GuitarLA is a guitar shop in Los Angeles, CA.",
    },
  ]
}

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "stylesheet",
    href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Outfit:wght@400;700;900&display=swap"
  },
  {
    rel: "stylesheet",
    href: indexStyles 
  },
  {
    rel: "stylesheet",
    href: errorStyles 
  },
]

export default function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) ?? []
    if (cart.length) {
      setCart(cart)
    } else {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (guitar) => {

    const existingGuitarIndex = cart.findIndex(g => g.id === guitar.id)

    let newCart
    if (existingGuitarIndex === -1) {
      newCart = [...cart, guitar]
      setCart(newCart)
    } else {
      if (cart[existingGuitarIndex].quantity + guitar.quantity > 10) {
        alert('You can only add up to 10 guitars of the same model')
        return
      }

      newCart = [...cart]
      newCart[existingGuitarIndex].quantity += guitar.quantity
      setCart(newCart)
    }
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const deleteFromCart = (guitarId) => {
    const newCart = cart.filter(g => g.id !== guitarId)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }
  
  const updateQuantity = ({ guitarId, quantity }) => {
    const existingGuitarIndex = cart.findIndex(g => g.id === guitarId)

    const newCart = [...cart]
    newCart[existingGuitarIndex].quantity = +quantity
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return (
    <Document>
      <Outlet
        context={{
          cart,
          addToCart,
          updateQuantity,
          deleteFromCart
        }}
      />
    </Document>
  )
}

const Document = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="app">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// Manejo de errores

export const ErrorBoundary = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <main className="container main">
          <Error error={error} />
        </main>
      </Document>
    )
  }
}
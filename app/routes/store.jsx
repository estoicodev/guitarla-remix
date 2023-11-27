import { Outlet, useOutletContext } from "@remix-run/react"
import styles from "~/styles/store.css"

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
  ]
}

const Store = () => {
  return (
    <main className="container main">
      <Outlet
        context={useOutletContext()}
      />
    </main>
  )
}

export default Store

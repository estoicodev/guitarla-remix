import { Outlet } from "@remix-run/react"
import styles from "~/styles/blog.css"

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
  ]
}

const Blog = () => {
  return (
    <main className="container main">
      <Outlet />
    </main>
  )
}

export default Blog

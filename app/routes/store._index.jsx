import { useLoaderData } from "@remix-run/react"
import ListOfGuitars from "~/components/ListOfGuitars"
import { getGuitars } from "~/models/guitars.server"

export const meta = () => {
  return [
    { title: "GuitarLA | Store" },
    {
      name: "description",
      content: "Our collection of guitars.",
    },
  ]
}

export const loader = async () => {
  const result = await getGuitars()
  return result
}

const Store = () => {
  const result = useLoaderData()

  const { data: guitars } = result

  return (
    <>
      <h2 className="heading">Our Collection</h2>
      <ListOfGuitars guitars={guitars} />
    </>
  )
}

export default Store

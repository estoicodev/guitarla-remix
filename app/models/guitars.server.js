export const getGuitars = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  const result = await response.json()
  return result
}

export const getSingleGuitar = async (url) => {
  const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
  const result = await response.json()
  return result
}
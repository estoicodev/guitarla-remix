export const getGuitars = async () => {
  const response = await fetch(`https://guitarla-strapi-x7y6.onrender.com/api/guitars?populate=image`)
  const result = await response.json()
  return result
}

export const getSingleGuitar = async (url) => {
  const response = await fetch(`https://guitarla-strapi-x7y6.onrender.com/api/guitars?filters[url]=${url}&populate=image`)
  const result = await response.json()
  return result
}
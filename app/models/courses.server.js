export const getCourse = async () => {
  const response = await fetch(`https://guitarla-strapi-x7y6.onrender.com/api/curso?populate=image`)
  const result = await response.json()
  return result
}
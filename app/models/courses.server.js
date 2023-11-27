export const getCourse = async () => {
  const response = await fetch(`${process.env.API_URL}/curso?populate=image`)
  const result = await response.json()
  return result
}
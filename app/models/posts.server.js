export const getPosts = async () => {
  const response = await fetch(`https://guitarla-strapi-x7y6.onrender.com/api/posts?populate=image`)
  const result = await response.json()
  return result
}

export const getSinglePost = async (url) => {
  const response = await fetch(`https://guitarla-strapi-x7y6.onrender.com/api/posts?filters[url]=${url}&populate=image`)
  const result = await response.json()
  return result
}

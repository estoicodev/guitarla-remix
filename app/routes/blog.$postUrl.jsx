import { Link, useLoaderData } from "@remix-run/react"
import { getSinglePost } from "~/models/posts.server"
import { formatDate } from "~/utils/helpers"

export const meta = ({data}) => {
  const post = data.data[0].attributes
  return [
    { title: `GuitarLA Blog - ${post.name}` },
    {
      name: "description",
      content: `Post of GuitarLA shop, ${post.content}`,
    },
  ]
}

export const loader = async ({params}) => {
  const { postUrl } = params
  const post = await getSinglePost(postUrl)

  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post Not Found'
    })
  }
  return post
}

const Post = () => {
  const result = useLoaderData()
  const post = result.data[0]?.attributes
  const { title, content, image, publishedAt } = post
  const imageUrl = image.data?.attributes?.url

  return (
    <article className="post column">
      <h3 className="title">{title}</h3>
      <p className="date">{formatDate(publishedAt)}</p>
      <img className="img" src={imageUrl} alt={title} />
      <p>{content}</p>
      <Link className="link" to={`/blog`}>Go to blog</Link>
    </article>
  )
}

export default Post

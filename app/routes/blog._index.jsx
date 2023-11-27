import { useLoaderData } from "@remix-run/react"
import Post from "~/components/Post"
import { getPosts } from "~/models/posts.server"

export const meta = () => {
  return [
    { title: "GuitarLA | Blog" },
    {
      name: "description",
      content: "Blog about guitars.",
    },
  ]
}

export const loader = async () => {
  const result = await getPosts()
  return result
}

const Blog = () => {
  const result = useLoaderData()

  const { data: posts } = result

  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts?.length
          ? <div className="posts-grid">
              {posts?.map(post => (
                <Post post={post.attributes} key={post.id} />
              ))}
            </div>
          : null
        }
      </div>
    </>
  )
}

export default Blog

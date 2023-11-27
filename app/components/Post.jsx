import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

const Post = ({ post }) => {
  const { title, content, image, url, publishedAt } = post
  const imageUrl = image.data.attributes.formats.small.url
  return (
    <article className="post shadow rounded">
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="resume">{content}</p>
        <Link className="link" to={`/blog/${url}`}>Read more</Link>
      </div>
    </article>
  )
}

export default Post

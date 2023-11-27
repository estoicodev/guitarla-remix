import Post from "./Post"

const ListOfPosts = ({ posts }) => {
  return (
    <>
      {posts?.length
        ? <div className="posts-grid">
            {posts?.map(post => (
              <Post post={post.attributes} key={post.id} />
            ))}
          </div>
        : null
      }
    </>
  )
}

export default ListOfPosts

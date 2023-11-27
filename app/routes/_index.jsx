import { useLoaderData } from "@remix-run/react"
import ListOfGuitars from "~/components/ListOfGuitars"
import ListOfPosts from "~/components/ListOfPosts"
import { getGuitars } from "~/models/guitars.server"
import { getPosts } from "~/models/posts.server"
import storeStyles from "~/styles/store.css"
import blogStyles from "~/styles/blog.css"
import courseStyles from "~/styles/course.css"
import { getCourse } from "~/models/courses.server"
import Course from "~/components/Course"

export const meta = () => {
  return [
    { title: "GuitarLA | Home" },
    {
      name: "description",
      content: "Shop GuitarLA.",
    },
  ]
}

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: storeStyles
    },
    {
      rel: "stylesheet",
      href: courseStyles
    },
    {
      rel: "stylesheet",
      href: blogStyles
    },
  ]
}

export const loader = async () => {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ])

  return {
    guitars: guitars.data ,
    posts: posts.data,
    course: course.data,
  }
}

export default function Index() {
  const { guitars, posts, course } = useLoaderData()

  return (
    <>
      <main className="container main">
        <h1 className="heading">GuitarLA</h1>
        <ListOfGuitars guitars={guitars} />
      </main>
      <Course course={course.attributes} />
      <section className="container main">
        <h2 className="heading">Latest Posts</h2>
        <ListOfPosts posts={posts} />
      </section>
    </>
  );
}

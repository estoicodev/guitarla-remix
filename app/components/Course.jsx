const Course = ({ course }) => {
  const { title, content, image } = course
  return (
    <section className="course">
      <style jsx="true">{`
        .course {
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${image.data.attributes.formats.large.url});
          background-size: cover;
          background-position: center center;
        }
      `}
      </style>
      <div className="container course-grid">
        <div className="content">
          <h2 className="heading">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </section>
)
}

export default Course

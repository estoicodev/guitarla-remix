import { Link } from '@remix-run/react'

const Error = ({error}) => {
  return (
    <div className="notfound">
      <div className="notfound-msg">
        <h1>{error.status}</h1>
      </div>
      <h2>{error.statusText}</h2>
      <Link to="/"><span className="arrow"></span>Back to home</Link>
    </div>
  )
}

export default Error

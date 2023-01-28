import Link from "next/link"


const notFound = () => {
  return (
    <div>
      <h1>Ooooooooops</h1>
      <h2>This page not available</h2>
      <p>
        Go back 
          <Link href='/'>Homepage</Link>
      </p>
    </div>
  )
}

export default notFound
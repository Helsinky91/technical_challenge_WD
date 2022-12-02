import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Welcome to our Phone Cave Website!</h1>
        <p> Click the botton to check all our phones:</p>
        <Link to={"/phones"}><button className="btn" >Check the Phones</button></Link>

    </div>
  )
}

export default Home
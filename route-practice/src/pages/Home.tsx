import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="text-center">
        <h1 className="text-5xl hover:text-red-500 transition-all">Homepage</h1>
        <p className="text-2xl mt-6" >Welcome to my Homepage my friend!</p>

        <Link to='/about'><strong>More <u>about me</u></strong></Link>
    </div>
  )
}

export default Home
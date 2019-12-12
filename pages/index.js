import { Link } from '../routes'

const Home = () => {
    return <div>
        this is home page
        <Link route="/about">About</Link>
        <Link route="/contact">Contact</Link>
    </div>
}

export default Home
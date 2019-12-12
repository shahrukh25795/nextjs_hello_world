import { Link, Router } from '../routes'

const Home = () => {
    const divStyle = {
        textAlign : "center",
    },
    buttonStyle = {
        margin : "10px",
        padding : "10px",
        backgroundColor: "#c1c2dd",
        border : "1px solid #f7f7f7",
        borderRadius : "5px",
        cursor :"pointer"
    }
    return <div style={divStyle}>
        <button style={buttonStyle} type="button" onClick={()=>Router.pushRoute("/about")}>Go to about page</button>
        <button style={buttonStyle} type="button" onClick={()=>Router.pushRoute("/contact")}>Go to contact page</button>
        <button style={buttonStyle} type="button" onClick={()=>Router.pushRoute("/user")}>Go to user List</button>
        {/* <Link style={linkStyle} route="/about">Go to about page</Link>
        <Link style={linkStyle} route="/contact">Go to contact page</Link>
        <Link style={linkStyle} route="/user">Go to user List</Link> */}
    </div>
}

export default Home
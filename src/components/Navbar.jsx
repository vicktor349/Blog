import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo-link">Blog</Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blogs</Link>
            </div>            
        </nav>
    );
}
 
export default Navbar;
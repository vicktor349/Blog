import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const Navbar = () => {
    const location = useLocation()
    const activeColor = (p) => location.pathname === p ? "#f1356d" : "#000"
    return (
        
        <nav className="navbar">
            <Link to="/" className="logo-link" style={{color: activeColor("/")}}>Blog</Link>
            <div className="links">
                <Link to="/" style={{color: activeColor("/")}}>Home</Link>
                <Link to="/create" style={{color: activeColor("/create")}}>New Blogs</Link>
            </div>            
        </nav>
    );
}
 
export default Navbar;
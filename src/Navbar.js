import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Armando's TodoList App
            </Link>
        <ul>
                <CustomLink to="/todo">Todo</CustomLink>
                <CustomLink to="/contactus">Contact Us</CustomLink>
        </ul>
        </nav>
    )
}

function CustomLink({ to, path, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
      
        <li className={ path === to ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
        </Link>
    </li>

)
}

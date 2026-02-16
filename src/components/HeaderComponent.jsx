import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link'

function HeaderComponent() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">SI</span>
        <div>
          <p className="brand-title">Student Info App</p>
          <p className="brand-subtitle">Simple roster insights</p>
        </div>
      </div>
      <nav className="nav">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/students" className={navLinkClass}>
          Students
        </NavLink>
      </nav>
    </header>
  )
}

export default HeaderComponent

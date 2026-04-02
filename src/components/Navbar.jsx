import { NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import auth from '../firebase/auth'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/history', label: 'History' },
  { to: '/journey', label: 'Journey' },
  { to: '/family-tree', label: 'Family Tree' },
  { to: '/honours', label: 'Honours' },
  { to: '/membership', label: 'Membership' },
  { to: '/join', label: 'Join' },
  { to: '/archive', label: 'Archive' },
  { to: '/store', label: 'Store' },
  { to: '/petition', label: 'Petition' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { user } = useAuth()

  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem', margin: 0 }}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end={to === '/'}>
              {label}
            </NavLink>
          </li>
        ))}
        {user ? (
          <>
            <li>
              <NavLink to="/member">Member Area</NavLink>
            </li>
            <li>
              <button onClick={() => signOut(auth)}>Log Out</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

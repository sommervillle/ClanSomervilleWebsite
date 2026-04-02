import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import auth from '../firebase/auth'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const navLinks = [
  { to: '/history',    label: 'History'   },
  { to: '/history',    label: 'Chiefs'    },
  { to: '/news',       label: 'News'      },
  { to: '/membership', label: 'Tartans'   },
  { to: '/membership', label: 'Clansmen'  },
  { to: '/journey',    label: 'Clan Map'  },
]

function ClanBadge() {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" aria-hidden="true">
      <path
        d="M13 1L1 5.5V15C1 22.5 7 27.5 13 29C19 27.5 25 22.5 25 15V5.5L13 1Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M13 8L9.5 14H16.5L13 8Z"
        fill="currentColor"
        opacity="0.55"
      />
      <line x1="13" y1="14" x2="13" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="9.5" y1="17.5" x2="16.5" y2="17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export default function Navbar() {
  const { user } = useAuth()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navClass = `navbar${scrolled ? ' navbar--scrolled' : ''}`

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        {/* Badge */}
        <Link to="/" className="navbar__badge" onClick={closeMenu}>
          <ClanBadge />
          <span className="navbar__badge-text">Clan Somerville</span>
        </Link>

        {/* Centre links */}
        <ul className="navbar__links">
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <NavLink to={to} className="navbar__link">
                {label.toUpperCase()}
              </NavLink>
            </li>
          ))}
          {user && (
            <li>
              <NavLink to="/member" className="navbar__link">
                MEMBER AREA
              </NavLink>
            </li>
          )}
        </ul>

        {/* Right controls */}
        <div className="navbar__right">
          {user ? (
            <button className="navbar__logout" onClick={() => signOut(auth)}>
              Log Out
            </button>
          ) : (
            <Link to="/join" className="navbar__cta">
              Join The Clan
            </Link>
          )}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map(({ to, label }) => (
          <NavLink key={label} to={to} className="navbar__mobile-link" onClick={closeMenu}>
            {label.toUpperCase()}
          </NavLink>
        ))}
        {user && (
          <NavLink to="/member" className="navbar__mobile-link" onClick={closeMenu}>
            MEMBER AREA
          </NavLink>
        )}
        <div className="navbar__mobile-actions">
          {user ? (
            <button className="navbar__cta" onClick={() => { signOut(auth); closeMenu() }}>
              Log Out
            </button>
          ) : (
            <Link to="/join" className="navbar__cta" onClick={closeMenu}>
              Join The Clan
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

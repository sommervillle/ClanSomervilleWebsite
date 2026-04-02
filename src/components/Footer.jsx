import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__columns">

        {/* Quick Links */}
        <div className="footer__col">
          <span className="footer__col-title">Quick Links</span>
          <ul>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/petition">The Petition</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/archive">Archive</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <span className="footer__col-title">Contact</span>
          <p>
            Correspondence regarding the clan, the petition, or membership
            enquiries should be directed through our official contact form.
          </p>
          <ul className="footer__col-links">
            <li><Link to="/contact">Send a Message</Link></li>
            <li><Link to="/join">Join the Clan</Link></li>
          </ul>
        </div>

        {/* About */}
        <div className="footer__col">
          <span className="footer__col-title">About</span>
          <p>
            Clan Somerville traces its lineage to Gaulter de Somerville,
            who crossed with William the Conqueror in 1066. David Somerville
            is recognised as Chief of the Name and Arms of Somerville and
            is the driving force behind the Lord Lyon Petition.
          </p>
        </div>

      </div>

      <div className="footer__divider" aria-hidden="true" />

      <div className="footer__identity">
        <span className="footer__clan-name">Clan Somerville</span>
        <span className="footer__motto">Fear God in Life</span>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Clan Somerville. The Official Home of Clan Somerville.
        </p>
        <p className="footer__note">
          In support of the Lord Lyon Petition — David Somerville, Chief of the Name and Arms of Somerville
        </p>
      </div>
    </footer>
  )
}

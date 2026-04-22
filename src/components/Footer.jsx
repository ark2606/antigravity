import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import styles from './Footer.module.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoIcon}>AR</div>
            <div>
              <div className={styles.logoName}>Ankit Raj</div>
              <div className={styles.logoRole}>Full Stack Developer</div>
            </div>
          </div>

          <nav className={styles.links}>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className={styles.link}
                onClick={e => { e.preventDefault(); scrollTo(l.href) }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles.socials}>
            <a href="https://github.com/ark2606" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ark26/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:ankash2609@gmail.com" className={styles.socialBtn} aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} <span>Ankit Raj</span>. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <FiHeart size={13} className={styles.heart} /> in Mohali, Punjab
          </p>
        </div>
      </div>
    </footer>
  )
}

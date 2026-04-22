import { FiUser, FiMapPin, FiMail, FiDownload } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import styles from './About.module.css'

const facts = [
  { icon: '🎓', label: 'Education', value: 'B.Tech in Computer Science' },
  { icon: '📍', label: 'Location', value: 'Mohali, Punjab, India' },
  { icon: '📧', label: 'Email', value: 'ankash2609@gmail.com' },
  { icon: '💼', label: 'Status', value: 'Open to Opportunities' },
]

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className={`${styles.grid} reveal ${visible ? 'visible' : ''}`}>
          {/* Left — Avatar */}
          <div className={styles.avatarWrap}>
            <div className={styles.avatarRing}>
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>AR</span>
              </div>
            </div>
            <div className={styles.avatarBadge}>
              <span>👋</span> Nice to meet you!
            </div>
          </div>

          {/* Right — Content */}
          <div className={styles.content}>
            <span className="section-tag">
              <FiUser size={13} /> About Me
            </span>
            <h2 className="section-title">
              Passionate Developer &<br />
              <span className="gradient-text">Creative Problem Solver</span>
            </h2>
            <p className={styles.bio}>
              Hey! I'm <strong>Ankit Raj</strong>, a full-stack developer from Mohali, Punjab,
              with a passion for building elegant digital products. I specialise in React,
              Node.js, and modern web technologies, and I love turning complex problems into
              simple, beautiful solutions.
            </p>
            <p className={styles.bio}>
              When I'm not coding, you'll find me exploring new tech, contributing to open
              source, or levelling up on DSA challenges. I believe great software is not just
              about functionality — it's about the experience it creates.
            </p>

            <div className={styles.facts}>
              {facts.map(f => (
                <div key={f.label} className={styles.fact}>
                  <span className={styles.factIcon}>{f.icon}</span>
                  <div>
                    <span className={styles.factLabel}>{f.label}</span>
                    <span className={styles.factValue}>{f.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                <FiMail size={16} /> Get In Touch
              </a>
              <a href="#" className="btn btn-outline">
                <FiDownload size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

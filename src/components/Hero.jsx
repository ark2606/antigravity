import { useEffect, useState, useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import styles from './Hero.module.css'

const roles = ['Full Stack Developer', 'React Developer', 'UI/UX Enthusiast', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)
  const timeout = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout.current)
  }, [displayed, deleting, roleIndex])

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      {/* Animated background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
      <div className={styles.grid} />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for work
        </div>

        <h1 className={styles.heading}>
          Hi, I'm{' '}
          <span className="gradient-text">Ankit Raj</span>
          <br />
          <span className={styles.role}>
            {displayed}
            <span className={`${styles.cursor} ${blink ? styles.cursorVisible : ''}`}>|</span>
          </span>
        </h1>

        <p className={styles.desc}>
          I craft beautiful, high-performance web experiences with clean code and
          modern technologies. Passionate about turning ideas into reality — one
          component at a time.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Get In Touch
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/ark2606" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ark26/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:ankash2609@gmail.com" className={styles.socialLink} aria-label="Email">
            <FiMail size={20} />
          </a>
          <div className={styles.socialLine} />
        </div>

        <div className={styles.stats}>
          {[
            { value: '2+', label: 'Years Exp.' },
            { value: '15+', label: 'Projects' },
            { value: '10+', label: 'Technologies' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className={styles.scrollDown} onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
        <FiArrowDown size={18} />
      </a>
    </section>
  )
}

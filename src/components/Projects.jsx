import { useState } from 'react'
import { FiGithub, FiExternalLink, FiBriefcase } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'ShopEase — E-Commerce Platform',
    desc: 'A full-featured e-commerce platform with product listings, cart management, user auth, order tracking, and Razorpay payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    category: 'Full Stack',
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #7c3aed22, #06b6d422)',
    github: 'https://github.com/ark2606',
    live: '#',
    featured: true,
  },
  {
    title: 'TaskFlow — Project Manager',
    desc: 'A Trello-inspired drag-and-drop project management app with real-time collaboration, task prioritisation, and team workspace.',
    tech: ['React', 'Firebase', 'CSS Modules'],
    category: 'Frontend',
    emoji: '📋',
    gradient: 'linear-gradient(135deg, #06b6d422, #8b5cf622)',
    github: 'https://github.com/ark2606',
    live: '#',
    featured: true,
  },
  {
    title: 'WeatherWise — Dashboard',
    desc: 'A beautiful weather dashboard with 7-day forecasts, hourly breakdown, location search, and animated weather icons using OpenWeatherMap API.',
    tech: ['React', 'REST API', 'Chart.js'],
    category: 'Frontend',
    emoji: '🌤️',
    gradient: 'linear-gradient(135deg, #f59e0b22, #06b6d422)',
    github: 'https://github.com/ark2606',
    live: '#',
    featured: false,
  },
  {
    title: 'DevBlog — Blogging Platform',
    desc: 'A markdown-powered blogging platform for developers with syntax highlighting, rich text editor, comment threads, and user authentication.',
    tech: ['Next.js', 'MongoDB', 'Node.js', 'JWT'],
    category: 'Full Stack',
    emoji: '✍️',
    gradient: 'linear-gradient(135deg, #10b98122, #7c3aed22)',
    github: 'https://github.com/ark2606',
    live: '#',
    featured: false,
  },
  {
    title: 'CodeCollab — Real-time IDE',
    desc: 'A browser-based collaborative code editor with real-time sync, multi-language support, live output, and room-based collaboration.',
    tech: ['React', 'Socket.io', 'Node.js', 'CodeMirror'],
    category: 'Full Stack',
    emoji: '💻',
    gradient: 'linear-gradient(135deg, #7c3aed22, #f59e0b22)',
    github: 'https://github.com/ark2606',
    live: '#',
    featured: true,
  },
  {
    title: 'ExpenseTracker — Finance App',
    desc: 'A personal finance tracker with spending categorisation, monthly charts, budget goals, and CSV export powered by Chart.js.',
    tech: ['React', 'Firebase', 'Chart.js', 'Redux'],
    category: 'Frontend',
    emoji: '💰',
    gradient: 'linear-gradient(135deg, #22c55e22, #06b6d422)',
    github: 'https://github.com/ark2606',
    live: '#',
    featured: false,
  },
]

const filters = ['All', 'Full Stack', 'Frontend', 'Backend']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [ref, visible] = useReveal()

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={`${styles.header} reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-tag"><FiBriefcase size={13} /> Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects showcasing my skills across the full stack.
          </p>
        </div>

        <div className={styles.filters}>
          {filters.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.card} glass-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className={styles.cardTop} style={{ background: p.gradient }}>
        <span className={styles.emoji}>{p.emoji}</span>
        {p.featured && <span className={styles.featuredBadge}>⭐ Featured</span>}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.category}>{p.category}</span>
        </div>
        <h3 className={styles.cardTitle}>{p.title}</h3>
        <p className={styles.cardDesc}>{p.desc}</p>
        <div className={styles.techTags}>
          {p.tech.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
      <div className={styles.cardFooter}>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          <FiGithub size={16} /> Code
        </a>
        <a href={p.live} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          <FiExternalLink size={16} /> Live Demo
        </a>
      </div>
    </div>
  )
}

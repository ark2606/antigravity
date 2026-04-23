import useReveal from '../hooks/useReveal'
import styles from './Experience.module.css'

const timeline = [
  {
    type: 'work',
    role: 'Full Stack Developer',
    org: 'Freelance / Self-Employed',
    period: '2023 — Present',
    location: 'Mohali, Punjab',
    emoji: '💼',
    points: [
      'Built and deployed 10+ client web applications using React, Node.js, and MongoDB',
      'Implemented REST APIs, authentication flows, and third-party integrations',
      'Improved client site performance by 40% through code splitting and lazy loading',
    ],
  },
  {
    type: 'work',
    role: 'Frontend Developer Intern',
    org: 'Tech Startup — Chandigarh',
    period: 'Jun 2023 — Sep 2023',
    location: 'Chandigarh, India',
    emoji: '🚀',
    points: [
      'Developed responsive UI components in React.js with pixel-perfect accuracy',
      'Collaborated with design team to convert Figma mockups into live features',
      'Integrated RESTful APIs and state management with Redux Toolkit',
    ],
  },
  {
    type: 'education',
    role: 'B.Tech — Computer Science & Engineering',
    org: 'University / College',
    period: '2020 — 2024',
    location: 'Punjab, India',
    emoji: '🎓',
    points: [
      'Core subjects: Data Structures, Algorithms, DBMS, OS, Computer Networks',
      'Final year project: Real-time Collaborative Code Editor using Socket.io',
      'Active member of the college coding club',
    ],
  },
  {
    type: 'education',
    role: 'Higher Secondary (12th)',
    org: 'CBSE School, Punjab',
    period: '2019 — 2020',
    location: 'Punjab, India',
    emoji: '📚',
    points: [
      'Stream: Science (Physics, Chemistry, Mathematics, Computer Science)',
      'Scored 73.2% in board examinations',
    ],
  },
]

export default function Experience() {
  const [ref, visible] = useReveal()

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className={`${styles.header} reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-tag">📊 Journey</span>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My professional path and academic background that shaped who I am as a developer.
          </p>
        </div>

        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} side={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index, side }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.item} ${styles[side]} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className={styles.dot}>
        <span>{item.emoji}</span>
      </div>
      <div className={`${styles.card} glass-card`}>
        <div className={styles.cardTop}>
          <span className={`${styles.typeBadge} ${item.type === 'work' ? styles.work : styles.edu}`}>
            {item.type === 'work' ? '💼 Work' : '🎓 Education'}
          </span>
          <span className={styles.period}>{item.period}</span>
        </div>
        <h3 className={styles.role}>{item.role}</h3>
        <p className={styles.org}>{item.org} · {item.location}</p>
        <ul className={styles.points}>
          {item.points.map((pt, pi) => (
            <li key={pi}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

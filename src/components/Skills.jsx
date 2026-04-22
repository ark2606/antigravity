import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiPython, SiMongodb, SiMysql, SiFirebase,
  SiGit, SiGithub, SiDocker, SiFigma, SiTailwindcss, SiPostman,
  SiRedux, SiLinux
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import useReveal from '../hooks/useReveal'
import styles from './Skills.module.css'

const categories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React JS', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Database',
    emoji: '🗄️',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools',
    emoji: '🛠️',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    ],
  },
]

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className={`${styles.header} reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-tag">🛠️ Tech Stack</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with daily to build scalable, performant web applications.
          </p>
        </div>

        <div className={styles.categories}>
          {categories.map((cat, ci) => (
            <SkillCategory key={cat.title} cat={cat} delay={ci * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ cat, delay }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.category} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.catHeader}>
        <span className={styles.catEmoji}>{cat.emoji}</span>
        <h3 className={styles.catTitle}>{cat.title}</h3>
      </div>
      <div className={styles.skillGrid}>
        {cat.skills.map(skill => {
          const Icon = skill.icon
          return (
            <div key={skill.name} className={`${styles.skillCard} glass-card`} title={skill.name}>
              <Icon size={28} style={{ color: skill.color }} className={styles.skillIcon} />
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

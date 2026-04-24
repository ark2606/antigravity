import { useState, useRef } from 'react'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import styles from './Contact.module.css'

const info = [
  { icon: FiMail, label: 'Email', value: 'ankash2609@gmail.com', href: 'mailto:ankash2609@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Mohali, Punjab, India', href: null },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/ark2606', href: 'https://github.com/ark2606' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/ark26', href: 'https://www.linkedin.com/in/ark26/' },
]

export default function Contact() {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const formRef = useRef(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "dc99d73c-6b38-4192-bc97-e2e7cba9a0fa",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error("Error submitting form", result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error("Form submission failed", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={`${styles.header} reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-tag"><FiMail size={13} /> Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? I'm always open to new opportunities.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Info Panel */}
          <div className={styles.info}>
            <div className={`${styles.infoCard} glass-card`}>
              <h3 className={styles.infoTitle}>Get In Touch</h3>
              <p className={styles.infoText}>
                Whether you need a new website, have a collaboration idea, or just want to say hi —
                drop me a message and I'll get back to you within 24 hours.
              </p>
              <div className={styles.infoItems}>
                {info.map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className={styles.infoItem}>
                      <div className={styles.infoIcon}><Icon size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>{item.label}</span>
                        {item.href
                          ? <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.infoValue}>{item.value}</a>
                          : <span className={styles.infoValue}>{item.value}</span>
                        }
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className={styles.socials}>
                <a href="https://github.com/ark2606" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub">
                  <FiGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ark26/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                  <FiLinkedin size={20} />
                </a>
                <a href="mailto:ankash2609@gmail.com" className={styles.socialBtn} aria-label="Email">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} className={`${styles.form} glass-card`} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input
                  id="name" name="name" type="text" required
                  className={styles.input} placeholder="Your Full Name"
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  id="email" name="email" type="email" required
                  className={styles.input} placeholder="Your Email Address"
                  value={form.email} onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                id="subject" name="subject" type="text" required
                className={styles.input} placeholder="Project Inquiry / Collaboration..."
                value={form.subject} onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message" name="message" rows={5} required
                className={styles.textarea} placeholder="Tell me about your project..."
                value={form.message} onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'idle' && <><FiSend size={16} /> Send Message</>}
              {status === 'sending' && <><span className={styles.spinner} /> Sending...</>}
              {status === 'sent' && <><FiCheck size={16} /> Message Sent!</>}
            </button>

            {status === 'sent' && (
              <p className={styles.successMsg}>
                ✅ Thanks for reaching out! I'll reply within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg} style={{ color: '#ef4444', fontSize: '0.88rem', textAlign: 'center' }}>
                ❌ Oops! Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

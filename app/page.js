'use client';

import { useState } from 'react';
import { Github, Linkedin, Facebook, Mail, Phone, Download, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';

const projects = [
  { title: 'Dhaka Road & Drainage Issue Reporting System', type: 'Full-Stack Web Application', description: 'A role-based platform for reporting, assigning and resolving city road and drainage issues.', tech: ['Next.js', 'NestJS', 'Node.js', 'MySQL'], Frontend: 'https://github.com/safwan-yasfee/Dhaka-Road-Draining-Issue-Reporting-System_Frontend', Backend: 'https://github.com/safwan-yasfee/Dhaka-Road-Draining-Issue-Reporting-System_Backend' },
  { title: 'Dhaka Road & Drainage Issue Reporting System', type: 'Full-Stack Web Application', description: 'A role-based platform for reporting, assigning and resolving city road and drainage issues.', tech: ['Next.js', 'NestJS', 'Node.js', 'MySQL'], Frontend: 'https://github.com/safwan-yasfee/Dhaka-Road-Draining-Issue-Reporting-System_Frontend', Backend: '' },
  { title: 'Online Ticket Booking System', type: 'Web Application', description: 'A database-backed flight booking application with search, booking and management features.', tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'], link: 'https://github.com/safwan-yasfee/online_ticket_booking_system' },
];

const skills = {
  'Programming': ['Python', 'C#', 'JavaScript', 'PHP', 'R'],
  'Web': ['Next.js', 'Node.js', 'NestJS', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'MySQL', 'Microsoft SQL Server', 'PostgreSQL'],
  'Data & AI': ['Data Analytics', 'Machine Learning', 'Data Mining', 'Data Warehousing', 'EDA'],
  'Tools': ['Git/GitHub', 'Visual Studio Code', 'Postman', 'Figma', 'Notion', 'Jupyter Notebook', 'Google Colab', 'Tableau', 'Power BI'],
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const nav = ['Home', 'Introduction', 'Education', 'Skills', 'Projects', 'Publications', 'Contact'];
  const close = () => setOpen(false);

  return <main>
    <header className="navbar">
      <a className="brand" href="#home">SYF<span>.</span></a>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav open' : 'nav'}>{nav.map(n => <a key={n} href={'#' + n.toLowerCase()} onClick={close}>{n}</a>)}</nav>
    </header>

    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">CSE Student • Data Analytics • Developer</p>
        <h1>Safwan Yasfee <span>Fahim</span></h1>
        <p className="lead">I love to explore data-driven solutions using analytics, machine learning and web technologies.</p>
        <div className="actions"><a className="btn primary" href="#projects">View Projects <ArrowUpRight size={18} /></a><a className="btn secondary" href="/resume.pdf" download>Download Resume <Download size={18} /></a></div>

        {/* Social Links */}
        <div className="socials">
          <a href="https://github.com/safwan-yasfee" target="_blank"><Github /></a>
          <a href="https://www.linkedin.com/in/sarker-fahim" target="_blank"><Linkedin /></a>
          <a href="https://www.facebook.com/share/1HSUth1fRh/" target="_blank"><Facebook /></a>
          <a href="mailto:sarkerfahim577@gmail.com"><Mail /></a>
        </div>
      </div>
      <div className="hero-card"><div className="avatar">SF</div><div><strong>Data + Technology</strong><p>Turning ideas into useful digital products.</p></div><div className="mini-grid"><span>Python</span><span>Next.js</span><span>ML</span><span>SQL</span></div></div>
    </section>

    <section id="introduction" className="section two-col">
      <div>
        <p className="eyebrow">01 — Introduction</p>
        <h2>About me</h2>
      </div>
      <div className="text">
        <p>I am Safwan Yasfee Fahim, a Computer Science & Engineering student at American International University-Bangladesh (AIUB), with a strong interest in Data Analytics, Machine Learning and Information Systems.</p>
        <p>My goal is to combine software development and analytical thinking to solve real-world problems. I enjoy building full-stack applications, working with data, and learning modern AI methods.</p>
      </div>
    </section>

    <section id="education" className="section">
      <p className="eyebrow">02 — Education</p>
      <h2>Academic journey</h2>
      <div className="timeline">
        <article>
          <span>Current</span>
          <h3>BSc in Computer Science & Engineering</h3>
          <p>American International University-Bangladesh (AIUB)</p>
          <p className="muted">Focus: Data Analytics • Machine Learning • Information Systems</p>
        </article>
        <article>
          <span>Previous</span>
          <h3>Higher Secondary Education</h3>
          <p>Safiuddin Sarker Academy and College</p>
        </article>
      </div>
    </section>

    <section id="skills" className="section">
      <p className="eyebrow">03 — Skills</p>
      <h2>My toolkit</h2>
      <div className="skill-grid">
        {Object.entries(skills).map(([group, list]) => (
          <div className="skill-card" key={group}>
            <h3>{group}</h3>
            <div className="tags">
              {list.map(x => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section id="projects" className="section">
      <p className="eyebrow">04 — Projects</p>
      <h2>Selected work</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <article className="project" key={p.title}>
            <div className="project-number">0{i + 1}</div>
            <p className="muted">{p.type}</p>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tech.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a href={p.link}>
              Project details <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>

    <section id="publications" className="section two-col">
      <div>
        <p className="eyebrow">05 — Explorations</p>
        <h2>Researches & analytics</h2>
      </div>
      <div className="publication">
        <p className="status">Research in progress</p>
        <h3>LSTM-Based Short-Term Solar Irradiance & Wind Speed Forecasting</h3>
        <p>Research project on short-term solar irradiance and wind speed forecasting for coastal Bangladesh using LSTM-based deep learning models and NASA POWER weather data.</p>
        <div className="tags">
          <span>LSTM</span>
          <span>Time-Series</span>
          <span>Self-Supervised Learning</span>
          <span>NASA POWER Dataset</span>
        </div>
         <div className="publication">
          <p className="status">Co-authored paper</p>
          <h3>AI-Based Student Performance Prediction and Academic Risk Analysis System</h3>
          <p>Co-developed an early-warning system that classifies university students as academically safe or at-risk from early-to-mid-semester data. Built and compared Logistic Regression, Random Forest, XGBoost and CatBoost models combined into a calibrated soft-voting ensemble, using Odds Ratios and TreeSHAP to explain which coursework and lifestyle factors drive risk. The final system reached 80% accuracy, 83% recall and 0.886 ROC-AUC on a held-out test set of 1,000 students.</p>
          <div className="tags">
            <span>Machine Learning</span>
            <span>Ensemble Learning</span>
            <span>XGBoost</span>
            <span>CatBoost</span>
            <span>Explainable AI (SHAP)</span>
            <span>Educational Data Mining</span>
          </div>
        </div>
      </div>
    </section>
    

    <section id="contact" className="section contact">
      <p className="eyebrow">06 — Contact</p>
      <h2>Let's connect.</h2>
      <p>Have a research idea, job opportunity, project, or collaboration in mind? Reach out through any channel below.</p>
      <div className="contact-grid">
        <a href="tel:+8801611506556">
          <Phone />
          <span>
            <small>Mobile</small>
            +880 1611506556
          </span>
        </a>
        <a href="mailto:sarkerfahim577@gmail.com">
          <Mail />
          <span>
            <small>Gmail</small>
            sarkerfahim577@gmail.com
          </span>
        </a>
        <a href="https://www.facebook.com/share/1HSUth1fRh/" target="_blank" rel="noopener noreferrer">
          <Facebook />
          <span>
            <small>Facebook</small>
            Safwan Yasfee Fahim
          </span>
        </a>
        <a href="https://github.com/safwan-yasfee" target="_blank" rel="noopener noreferrer">
          <Github />
          <span>
            <small>GitHub</small>
            safwan-yasfee
          </span>
        </a>
        <a href="https://www.linkedin.com/in/sarker-fahim" target="_blank" rel="noopener noreferrer">
          <Linkedin />
          <span>
            <small>LinkedIn</small>
            Safwan Yasfee Fahim
          </span>
        </a>
      </div>
    </section>

    <footer><span>© 2026 Safwan Yasfee Fahim</span><a href="#home">Back to top ↑</a></footer>
  </main>
}

'use client';

import { useState } from 'react';
import { Github, Linkedin, Facebook, Mail, Phone, Download, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';

const projects = [
  { title: 'Dhaka Road & Drainage Issue Reporting System', type: 'Full-Stack Web Application', description: 'A role-based platform for reporting, assigning and resolving city road and drainage issues.', tech: ['Next.js', 'NestJS', 'Node.js', 'MySQL'], link: '#' },
  { title: 'AI / Machine Learning Research', type: 'Research', description: 'Research work around continuous-time sequence modeling, Neural ODEs, transformers and irregular SCADA telemetry.', tech: ['Python', 'Machine Learning', 'Neural ODE', 'Transformers'], link: '#' },
  { title: 'Flight Booking System', type: 'Web Application', description: 'A database-backed flight booking application with search, booking and management features.', tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'], link: '#' },
  { title: 'Network VLAN & Router Configuration', type: 'Networking', description: 'A Cisco Packet Tracer network using VLAN segmentation, trunking and router-based inter-VLAN communication.', tech: ['Cisco Packet Tracer', 'VLAN', 'Routing'], link: '#' }
];

const skills = {
  'Programming': ['Python', 'C#', 'JavaScript', 'PHP', 'R', 'MATLAB'],
  'Web & Backend': ['Next.js', 'Node.js', 'NestJS', 'HTML', 'CSS', 'MySQL'],
  'Data & AI': ['Data Analytics', 'Machine Learning', 'Data Mining', 'Data Warehousing', 'EDA'],
  'Tools': ['Git/GitHub', 'Figma', 'Proteus', 'STM32CubeIDE', 'Cisco Packet Tracer']
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const nav = ['Home','Introduction','Education','Skills','Projects','Publications','Contact'];
  const close = () => setOpen(false);

  return <main>
    <header className="navbar">
      <a className="brand" href="#home">SYF<span>.</span></a>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav open' : 'nav'}>{nav.map(n => <a key={n} href={'#'+n.toLowerCase()} onClick={close}>{n}</a>)}</nav>
    </header>

    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">CSE Student • Data Analytics • Developer</p>
        <h1>Safwan Yasfee <span>Fahim</span></h1>
        <p className="lead">I build practical software and explore data-driven solutions using web technologies, machine learning and analytics.</p>
        <div className="actions"><a className="btn primary" href="#projects">View Projects <ArrowUpRight size={18}/></a><a className="btn secondary" href="/resume.pdf" download>Download Resume <Download size={18}/></a></div>
        <div className="socials"><a href="https://github.com/" target="_blank"><Github/></a><a href="https://www.linkedin.com/" target="_blank"><Linkedin/></a><a href="https://www.facebook.com/" target="_blank"><Facebook/></a><a href="mailto:your.email@gmail.com"><Mail/></a></div>
      </div>
      <div className="hero-card"><div className="avatar">SF</div><div><strong>Data + Technology</strong><p>Turning ideas into useful digital products.</p></div><div className="mini-grid"><span>Python</span><span>Next.js</span><span>ML</span><span>SQL</span></div></div>
    </section>

    <section id="introduction" className="section two-col"><div><p className="eyebrow">01 — Introduction</p><h2>About me</h2></div><div className="text"><p>I am Safwan Yasfee Fahim, a Computer Science & Engineering student at American International University-Bangladesh (AIUB), with a strong interest in Data Analytics, Machine Learning and Information Systems.</p><p>My goal is to combine software development and analytical thinking to solve real-world problems. I enjoy building full-stack applications, working with data, and learning modern AI methods.</p></div></section>

    <section id="education" className="section"><p className="eyebrow">02 — Education</p><h2>Academic journey</h2><div className="timeline"><article><span>Current</span><h3>BSc in Computer Science & Engineering</h3><p>American International University-Bangladesh (AIUB)</p><p className="muted">Focus: Data Analytics • Machine Learning • Information Systems</p></article><article><span>Previous</span><h3>Higher Secondary Education</h3><p>Safiuddin Sarker Academy and College</p></article></div></section>

    <section id="skills" className="section"><p className="eyebrow">03 — Skills</p><h2>My toolkit</h2><div className="skill-grid">{Object.entries(skills).map(([group, list]) => <div className="skill-card" key={group}><h3>{group}</h3><div className="tags">{list.map(x=><span key={x}>{x}</span>)}</div></div>)}</div></section>

    <section id="projects" className="section"><p className="eyebrow">04 — Projects</p><h2>Selected work</h2><div className="project-grid">{projects.map((p,i)=><article className="project" key={p.title}><div className="project-number">0{i+1}</div><p className="muted">{p.type}</p><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div><a href={p.link}>Project details <ExternalLink size={15}/></a></article>)}</div></section>

    <section id="publications" className="section two-col"><div><p className="eyebrow">05 — Publications</p><h2>Research & publications</h2></div><div className="publication"><p className="status">Research in progress</p><h3>Continuous-Time ODE Transformer Framework for Irregular SCADA Telemetry</h3><p>Research direction focused on asynchronous and irregular renewable-energy telemetry, Neural ODEs, self-supervised masked trajectory reconstruction and transformer-based representations.</p><div className="tags"><span>Neural ODE</span><span>Time-Series</span><span>Self-Supervised Learning</span><span>SCADA</span></div></div></section>

    <section id="contact" className="section contact"><p className="eyebrow">06 — Contact</p><h2>Let's connect.</h2><p>Have a project, research idea, internship opportunity or collaboration in mind? Reach out through any channel below.</p><div className="contact-grid"><a href="tel:+8801XXXXXXXXX"><Phone/><span><small>Mobile</small>+880 1XXXXXXXXX</span></a><a href="mailto:your.email@gmail.com"><Mail/><span><small>Gmail</small>your.email@gmail.com</span></a><a href="https://www.facebook.com/" target="_blank"><Facebook/><span><small>Facebook</small>facebook.com/yourprofile</span></a><a href="https://github.com/" target="_blank"><Github/><span><small>GitHub</small>github.com/yourusername</span></a><a href="https://www.linkedin.com/" target="_blank"><Linkedin/><span><small>LinkedIn</small>linkedin.com/in/yourprofile</span></a></div></section>

    <footer><span>© 2026 Safwan Yasfee Fahim</span><a href="#home">Back to top ↑</a></footer>
  </main>
}

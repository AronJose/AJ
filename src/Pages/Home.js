import React, { useState } from "react";

const linkedin = "https://www.linkedin.com/in/aron-jose-5a5640201/";
const github = "https://github.com/AronJose?tab=repositories";
const skills = {
  "Data Engineering": ["Data pipelines", "ETL / ELT", "Data warehousing", "Medallion architecture", "Data transformation", "Data quality", "Data validation"],
  "Data Platforms": ["Snowflake", "dbt", "Apache Airflow", "AWS S3", "Snowpark", "PySpark"],
  Programming: ["Python", "SQL", "JavaScript"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Application Development": ["React.js", "React Native", "Node.js", "Flutter", "TypeScript"],
};
const tech = [
  ["AWS S3", "Source data storage"], ["Snowflake", "Cloud data warehouse and ingestion"], ["dbt", "SQL transformations and data modeling"], ["Apache Airflow", "Pipeline orchestration and scheduling"], ["Python", "Custom validations and processing"], ["PySpark", "Distributed data processing"], ["Snowpark", "Processing data within Snowflake"], ["SQL", "Transformations and querying"],
];
const oldProjects = [
  { title: "Zlash Seller", tech: "React Native · TypeScript · Expo · Redux Toolkit · Firebase", desc: "Seller workflows for products, inventory, order management, notifications, uploads, authentication, offline persistence and printing." },
  { title: "Zlash Buyer", tech: "React Native · TypeScript · Expo · Redux Toolkit · REST APIs", desc: "Buyer experience covering OTP authentication, product discovery, cart, wishlist, payments, order tracking and push notifications." },
  { title: "Kettile", tech: "Flutter · Dart · REST APIs · Push Notifications", desc: "Dating application features including profiles, matching, discovery, chat, pagination, search and filtering." },
  { title: "DevFood", tech: "Frontend and backend development", desc: "Restaurant workflow applications. Visit the live projects.", links: [["DevFood", "https://devfood.zlash.in"], ["DevFood POS", "https://devfoodpos.zlash.in"]] },
];
const tabs = ["Overview", "Architecture", "Data Pipeline", "Technology Stack", "Analytics & Validation"];
const companySites = {
  Toobler: "https://www.toobler.com/",
  Innovature: "https://innovature.ai/",
};

function useModalLifecycle(onClose) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);
}

function Architecture({ compact = false, onSelect }) {
  return <div className={`architecture ${compact ? "architecture-compact" : ""}`}>
    <div className="source-branches"><button className="arch-node source" onClick={() => onSelect?.("AWS S3 — source data storage. The source is represented in two distinct areas.")}>AWS S3<span>Main source data</span></button><button className="arch-node source" onClick={() => onSelect?.("Parquet-formatted data is a separate S3 source branch and is ingested into Snowflake.")}>AWS S3<span>Parquet-formatted data</span></button></div>
    <span className="flow-arrow" aria-hidden="true">↘　 ↙</span>
    <button className="arch-node warehouse" onClick={() => onSelect?.("Snowflake — cloud data warehouse and ingestion destination for the Parquet-formatted source.")}>Snowflake<span>Ingestion & warehouse</span></button>
    <span className="flow-arrow" aria-hidden="true">↓</span>
    <div className="layers">{[["BRONZE", "Raw · preserve · ingest"], ["SILVER", "Clean · standardize · validate"], ["GOLD", "Business-ready · aggregate"]].map(([name, sub]) => <React.Fragment key={name}><button className={`arch-node layer ${name.toLowerCase()}`} onClick={() => onSelect?.(`${name}: ${sub}.`)}>{name}<span>{sub}</span></button><span className="flow-arrow" aria-hidden="true">↓</span></React.Fragment>)}</div>
    <button className="arch-node analytics" onClick={() => onSelect?.("Analytics & reporting — curated datasets prepared for downstream use.")}>Analytics & Reporting</button>
  </div>;
}

function ProjectModal({ onClose }) {
  const [tab, setTab] = useState(tabs[0]);
  const [selected, setSelected] = useState("");
  useModalLifecycle(onClose);
  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header className="modal-header"><div><p className="eyebrow">ENGINEERING CASE STUDY</p><h2 id="modal-title">Enterprise Insurance Data Analytics Platform</h2></div><button className="icon-button" onClick={onClose} aria-label="Close project details">×</button></header><nav className="modal-tabs" aria-label="Project details">{tabs.map((item) => <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>{item}</button>)}</nav><div className="modal-content" key={tab}>
    {tab === "Overview" && <><p className="lead">An enterprise data analytics platform organizing insurance-related data from broker and customer domains.</p><div className="detail-grid"><div><span className="eyebrow">COMPANY</span><p>Toobler Technologies</p></div><div><span className="eyebrow">CLIENT</span><p>UAE-based insurance client</p></div><div><span className="eyebrow">APPROACH</span><p>AWS S3 ingestion · Snowflake · Medallion Architecture</p></div></div><Architecture compact onSelect={setSelected}/>{selected && <p className="node-detail">{selected}</p>}</>}
    {tab === "Architecture" && <><p className="lead">Two distinct source areas are preserved in the conceptual flow. Parquet-formatted data is ingested into Snowflake.</p><Architecture onSelect={setSelected}/>{selected && <p className="node-detail">{selected}</p>}</>}
    {tab === "Data Pipeline" && <div className="pipeline-detail"><article><b>01 · AWS S3 sources</b><p>Keep Main Source Data and Parquet-formatted Data as distinct source areas. The Parquet-formatted data is ingested into Snowflake.</p></article><article><b>02 · Snowflake · Bronze</b><p>Load to Snowflake raw/staging tables, preserve source data, and perform initial ingestion validation.</p></article><article><b>03 · Silver</b><p>Clean data, handle nulls, deduplicate records, standardize structures, apply SQL transformations and run data quality checks. Use Python / PySpark processing where applicable.</p></article><article><b>04 · Gold</b><p>Apply business transformations, prepare aggregated datasets and publish analytics-ready tables and reporting datasets.</p></article><article><b>05 · Orchestration & modeling</b><p>Use Apache Airflow for pipeline orchestration and scheduling, and dbt for SQL transformations and data modeling.</p></article></div>}
    {tab === "Technology Stack" && <div className="tech-grid">{tech.map(([name, desc]) => <button className="tech-card" key={name} onClick={() => setSelected(`${name}: ${desc}.`)}><span className="tech-mark">{name.slice(0, 2)}</span><b>{name}</b><small>{desc}</small></button>)}</div>}
    {tab === "Analytics & Validation" && <><p className="sample-note">Illustrative sample data · not production metrics</p><div className="charts"><div className="chart-card"><b>Sample data distribution</b><div className="bar-chart">{[["Bronze", 92], ["Silver", 68], ["Gold", 43]].map(([label, width]) => <div className="bar-row" key={label}><span>{label}</span><i><em style={{ width: `${width}%` }}/></i></div>)}</div></div><div className="chart-card"><b>Pipeline stages</b><div className="stage-chart">{["Ingest", "Bronze", "Silver", "Gold"].map((s, i) => <span key={s}><i>{String(i + 1).padStart(2, "0")}</i>{s}</span>)}</div></div><div className="chart-card"><b>Validation lifecycle</b><div className="validation-list"><span>✓ Ingestion checks</span><span>✓ Null handling</span><span>✓ Deduplication</span><span>✓ Data quality checks</span></div></div></div><p className="muted">Charts are conceptual visualizations only. No volumes, timings, outcomes or performance figures are asserted.</p></>}
  </div></section></div>;
}

function CompanyModal({ company, onClose }) {
  const details = companySites[company];
  useModalLifecycle(onClose);

  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className="project-modal company-modal" role="dialog" aria-modal="true" aria-labelledby="company-title">
      <header className="modal-header"><div><p className="eyebrow">COMPANY WEBSITE</p><h2 id="company-title">{company}</h2></div><button className="icon-button" onClick={onClose} aria-label="Close company website">×</button></header>
      <div className="company-content"><div className="company-monogram">{company.slice(0, 1)}</div><h3>{company === "Toobler" ? "Technology and digital engineering" : "Technology solutions and software services"}</h3><p>{company === "Toobler" ? "Aron’s current employer, where he works as a Data Engineer on an enterprise insurance data analytics platform." : "Aron’s previous employer, where he worked as a Full Stack Developer building web and mobile applications."}</p><a className="button primary" href={details} target="_blank" rel="noreferrer">Visit {company} website ↗</a></div>
      <footer className="company-modal-footer"><span>Company websites can block in-page embedding.</span><a href={details} target="_blank" rel="noreferrer">Open external website ↗</a></footer>
    </section>
  </div>;
}

function ResumeModal({ onClose }) {
  const resumeUrl = `${process.env.PUBLIC_URL}/AronResume.pdf`;
  useModalLifecycle(onClose);
  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className="project-modal resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <header className="modal-header"><div><p className="eyebrow">CURRICULUM VITAE</p><h2 id="resume-title">Aron Jose · Resume</h2></div><div className="resume-modal-actions"><a className="button primary" href={resumeUrl} download="AronResume.pdf">Download PDF ↓</a><button className="icon-button" onClick={onClose} aria-label="Close resume">×</button></div></header>
      <iframe title="Aron Jose resume PDF" src={resumeUrl} className="resume-frame" />
    </section>
  </div>;
}

export default function Home() {
  const [modal, setModal] = useState(false);
  const [companyModal, setCompanyModal] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const senderName = String(form.get("name") || "").trim();
    const senderEmail = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = `Portfolio inquiry from ${senderName}`;
    const body = `${message}\n\nBest regards,\n${senderName}\n${senderEmail}`;
    window.location.href = `mailto:aronjose63@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <main>
    <header className="site-nav"><a className="brand" href="#home"><span>AJ</span><b>Aron Jose</b></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button><nav className={menuOpen ? "nav-links open" : "nav-links"}>{[["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Experience", "experience"], ["Projects", "projects"], ["Contact", "contact"]].map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{name}</a>)}<button className="nav-resume" onClick={() => { setResumeOpen(true); setMenuOpen(false); }}>Resume ↗</button></nav></header>
    <section id="home" className="hero section-wrap"><div className="hero-copy"><div className="availability">DATA ENGINEER <span>·</span> KOCHI, INDIA</div><p className="intro">Hi, I’m <strong>Aron Jose.</strong></p><h1><span className="name-highlight">Aron Jose</span><br/>Data Engineer<br/><span>Engineering Data.<br/>Enabling Decisions.</span></h1><p className="hero-description">I design and build data pipelines using AWS S3, Snowflake and Medallion Architecture. I preserve raw source data in Bronze, standardize and validate it in Silver, then shape business-ready datasets in Gold for analytics and reporting.</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <span>↘</span></a><button className="button secondary" onClick={() => setResumeOpen(true)}>View resume <span>↗</span></button><a className="text-link" href="#contact">Contact me</a></div><div className="social-links"><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:aronjose63@gmail.com">Email ↗</a></div></div><div className="hero-visual"><div className="visual-top"><span>INSURANCE DATA PIPELINE</span><span>MEDALLION ARCHITECTURE</span></div><div className="hero-terms"><span>AWS S3 <small>Main source data</small></span><span>AWS S3 <small>Parquet-formatted data</small></span><i>↘　 ↙</i><b>SNOWFLAKE <small>Ingestion & raw/staging tables</small></b></div><div className="mini-layers">{[["BRONZE", "Raw ingestion · source preservation"], ["SILVER", "Null handling · deduplication · standardization"], ["GOLD", "Business transformations · analytics-ready datasets"]].map(([name, sub]) => <div className="mini-layer" key={name}><b>{name}</b><small>{sub}</small><i/></div>)}</div><div className="mini-output"><b>↗</b><span>Analytics & Reporting<small>Curated datasets for downstream use</small></span></div><div className="visual-bottom"><span>Pipeline stages</span><span>SQL · dbt · Airflow · Python / PySpark</span></div></div><div className="hero-foot"><span>4+ YEARS OF SOFTWARE EXPERIENCE</span><span>SCROLL TO EXPLORE ↓</span></div></section>

    <section id="about" className="section-wrap section-block"><div className="section-heading"><p className="eyebrow">01 / ABOUT</p><h2>Data systems with<br/><span>an application mindset.</span></h2></div><div className="about-content"><p className="lead">I’m a Data Engineer at Toobler Technologies with 4+ years of overall software development experience and a focus on building reliable pipelines and analytics-ready datasets.</p><p>My work spans Snowflake, SQL, Python, PySpark, Snowpark, dbt and AWS S3. I use Medallion Architecture, data transformation, integration and validation to prepare structured data for analytics and reporting. Earlier experience with React, React Native, Flutter and Node.js gives me a broader view of application and data workflows.</p><div className="about-meta"><div><span>FOCUS</span><b>Data platforms · Analytics engineering</b></div><div><span>EDUCATION</span><b>MCA · BSc Mathematics</b></div><div><span>LEARNING</span><b>Azure Data Factory · Azure Databricks · Lakehouse</b></div></div></div></section>

    <section id="skills" className="section-wrap section-block"><div className="section-heading"><p className="eyebrow">02 / TOOLKIT</p><h2>Tools for the<br/><span>whole data lifecycle.</span></h2></div><div className="skills-area">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}<div className="learning-box"><div><span className="eyebrow">CURRENTLY LEARNING</span><p>Expanding cloud data platform skills</p></div><div className="learning-tags"><span>Azure Data Factory</span><span>Azure Databricks</span><span>Databricks Lakehouse</span></div></div></div></section>

    <section id="experience" className="section-wrap section-block"><div className="section-heading"><p className="eyebrow">03 / EXPERIENCE</p><h2>My professional<br/><span>experience.</span></h2></div><div className="timeline"><article className="timeline-item current"><div className="timeline-date">JUN 2023 — PRESENT</div><div className="timeline-dot"/><div className="timeline-info"><span className="eyebrow">KOCHI, INDIA · <button className="company-link" onClick={() => setCompanyModal("Toobler")}>TOOBLER TECHNOLOGIES ↗</button></span><h3>Data Engineer</h3><p>Enterprise insurance data analytics. AWS S3 source ingestion into Snowflake; Bronze / Silver / Gold Medallion Architecture; dbt SQL transformations; Python and PySpark processing and validation; data quality checks.</p><div className="experience-terms"><span>Source preservation</span><span>Raw / staging tables</span><span>Null handling</span><span>Deduplication</span><span>Standardization</span><span>Business transformations</span></div></div></article><article className="timeline-item"><div className="timeline-date">OCT 2021 — JUN 2023</div><div className="timeline-dot"/><div className="timeline-info"><span className="eyebrow">KOCHI, INDIA · <button className="company-link" onClick={() => setCompanyModal("Innovature")}>INNOVATURE SOFTWARE LABS ↗</button></span><h3>Full Stack Developer</h3><p>React · React Native · Flutter · Node.js · REST APIs · database integration · cross-platform applications.</p></div></article></div></section>

    <section id="projects" className="section-wrap section-block"><div className="section-heading project-heading"><p className="eyebrow">04 / SELECTED WORK</p><h2>Engineering for<br/><span>data and people.</span></h2><p>Current focus in data engineering, built on a foundation of application development.</p></div><article className="featured-project"><div className="featured-top"><span className="eyebrow">FEATURED CASE STUDY · DATA ENGINEERING</span></div><div className="featured-body"><div className="featured-copy"><h3>Enterprise Insurance<br/>Data Analytics Platform</h3><p>Insurance data across broker and customer domains, organized through S3 ingestion, Snowflake and Bronze / Silver / Gold transformations.</p><div className="badges">{["AWS S3", "Snowflake", "dbt", "Airflow", "Python", "PySpark", "Snowpark", "SQL"].map(x => <span key={x}>{x}</span>)}</div><button className="button primary" onClick={() => setModal(true)}>Explore architecture <span>↗</span></button></div><div className="featured-diagram"><p className="eyebrow">CONCEPTUAL DATA FLOW</p><Architecture compact onSelect={() => setModal(true)}/></div></div></article><div className="project-subhead"><div><p className="eyebrow">APPLICATION DEVELOPMENT</p><h3>Earlier projects</h3></div><p>Full-stack and mobile experience, retained as part of the story.</p></div><div className="old-projects">{oldProjects.map((project) => <article className="old-project" key={project.title}><h4>{project.title}</h4><p>{project.desc}</p><div className="old-project-tech">{project.tech}</div>{project.links && <div className="external-links">{project.links.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={label}>{label} ↗</a>)}</div>}</article>)}</div></section>

    <section className="section-wrap section-block education-section"><div className="section-heading"><p className="eyebrow">05 / EDUCATION</p><h2>Grounded in<br/><span>problem solving.</span></h2></div><div className="education-list"><article><span>POSTGRADUATE</span><h3>Master of Computer Applications</h3><p>Santhigiri College · 2022</p></article><article><span>UNDERGRADUATE</span><h3>Bachelor of Science in Mathematics</h3><p>St. Thomas College · 2020</p></article></div></section>

    <section id="contact" className="section-wrap contact-section"><p className="eyebrow">06 / GET IN TOUCH</p><h2>Let’s build something<br/><span>data-driven.</span></h2><p>I’m interested in Data Engineering opportunities, cloud data platforms, and building scalable data solutions. Let’s connect.</p><div className="contact-actions"><a className="button primary" href="mailto:aronjose63@gmail.com">aronjose63@gmail.com ↗</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a></div><div className="contact-form-wrap"><h3>Send a message</h3><form onSubmit={handleContactSubmit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Your name"/></label><label>Your email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label></div><label>Message<textarea name="message" required rows="4" placeholder="What would you like to talk about?"/></label><button className="button secondary" type="submit">Open email draft ↗</button></form></div><footer className="site-footer"><span>© {new Date().getFullYear()} Aron Jose</span><span>DATA ENGINEER · KOCHI, INDIA</span><a href="#home">Back to top ↑</a></footer></section>
    {modal && <ProjectModal onClose={() => setModal(false)}/>}
    {companyModal && <CompanyModal company={companyModal} onClose={() => setCompanyModal(null)}/>}
    {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)}/>}
  </main>;
}

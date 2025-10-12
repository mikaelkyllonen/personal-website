import Section from "@/app/ui/section/section";
import styles from "./experience-section.module.css";
import React from "react";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <h2>Experience</h2>
      <div className={styles.experienceContainer}>
        <div className={styles.companyHeader}>
          <h3 className={styles.companyName}>KajaPro Oy</h3>
          <p className={styles.duration}>2024 — Present</p>
        </div>
        <div className={styles.rolesContainer}>
          <div className={styles.role}>
            <div className={styles.header}>
              <div className={styles.circle}></div>
              <div className={styles.content}>
                <h4 className={styles.title}>
                  Lead Full Stack Developer
                </h4>
                <p className={styles.duration}>Nov — Present</p>
              </div>
            </div>
            <p className={styles.description}>
            Working as a lead developer building enterprise applications, managing technical architecture and development decisions. I develop applications using .NET and modern JavaScript frameworks while overseeing deployment automation through Azure DevOps.
            My role combines hands-on development with technical decision-making and strategic planning to ensure we deliver solutions that meet business requirements.
            </p>
            <ul className={styles.stack}>
              <li>.NET</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Angular</li>
              <li>SCSS</li>
              <li>Azure</li>
              <li>Terraform</li>
              <li>Azure DevOps</li>
            </ul>
          </div>
          <div className={styles.role}>
            <div className={styles.header}>
              <div className={styles.circle}></div>
              <div className={styles.content}>
                <h4 className={styles.title}>Thesis</h4>
                <p className={styles.duration}>June — Nov</p>
              </div>
            </div>
            <p className={styles.description}>
              My thesis involved designing an identity management system that integrated Azure Entra ID with Keycloak. The project's purpose was to solve the security and maintenance problems that arise from managing user permissions separately inside each application. The resulting prototype showed how a central system could handle authentication for both internal and external users, automate access control, and reduce manual configuration.
            </p>
            <ul className={styles.stack}>
              <li>Azure</li>
              <li>Keycloak</li>
              <li>.NET</li>
              <li>OAuth 2.0</li>
              <li>OpenID Connect</li>
              <li>Authentication</li>
              <li>Authorization</li>
            </ul>
          </div>
          <div className={styles.role}>
            <div className={styles.header}>
              <div className={styles.circle}></div>
              <div className={styles.content}>
                <h4 className={styles.title}>Full Stack Developer Trainee</h4>
                <p className={styles.duration}>Jan — June</p>
              </div>
            </div>
            <p className={styles.description}>
              Worked on enterprise applications, developing both frontend and backend components while gaining hands-on experience with Azure cloud services. I built API integrations that connected internal systems with external platforms and created automation solutions that streamlined business processes. Beyond coding, I mentored fellow trainees in .NET development practices and Azure fundamentals.
            </p>
            <ul className={styles.stack}>
              <li>.NET</li>
              <li>JavaScript</li>
              <li>Angular</li>
              <li>HTML/CSS</li>
              <li>Azure</li>
              <li>Azure DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

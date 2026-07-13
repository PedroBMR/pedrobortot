import { motion } from 'framer-motion';
import './Projects.css';
import { useTranslation } from 'react-i18next';
import { REPO_URL } from '../lib/config';

function isLinkable(entry) {
  return entry.startsWith('http') || entry.startsWith('/');
}

function resolveEvidenceLink(path) {
  if (path.startsWith('http')) {
    return path;
  }
  if (REPO_URL) {
    return `${REPO_URL}/blob/main${path}`;
  }
  return path;
}

function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>{t('projects.title')}</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.3) }}
          >
            <header>
              <h3>{project.title}</h3>
              <p className="project-objective">{project.objective}</p>
            </header>

            <div className="project-block">
              <h4>{t('projects.labels.scope', { defaultValue: 'Escopo' })}</h4>
              <ul>
                {project.scope.map((item, scopeIndex) => (
                  <li key={scopeIndex}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-block">
              <h4>{t('projects.labels.tools', { defaultValue: 'Ferramentas' })}</h4>
              <div className="project-badges">
                {project.tools.map((tool, toolIndex) => (
                  <span className="badge" key={toolIndex}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-block">
              <h4>{t('projects.labels.evidence', { defaultValue: 'Evidências' })}</h4>
              <ul className="project-links">
                {project.evidence.map((entry, linkIndex) => (
                  <li key={linkIndex}>
                    {isLinkable(entry) ? (
                      <a
                        href={resolveEvidenceLink(entry)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {entry}
                      </a>
                    ) : (
                      <span className="evidence-note">{entry}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-block">
              <h4>{t('projects.labels.learnings', { defaultValue: 'Aprendizados' })}</h4>
              <ul>
                {project.learnings.map((learning, learningIndex) => (
                  <li key={learningIndex}>{learning}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

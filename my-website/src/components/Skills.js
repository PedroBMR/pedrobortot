import { motion } from 'framer-motion';
import './Skills.css';
import { useTranslation } from 'react-i18next';
import blenderIcon from './assets/tech-icons/blender.svg';
import reactIcon from './assets/tech-icons/react.svg';
import htmlIcon from './assets/tech-icons/html.svg';
import cssIcon from './assets/tech-icons/css.svg';
import githubIcon from './assets/tech-icons/github.svg';
import photoshopIcon from './assets/tech-icons/photoshop.svg';
import illustratorIcon from './assets/tech-icons/AI.svg';
import printerIcon from './assets/tech-icons/3d_printer.svg';

const TOOLS = [
  { icon: blenderIcon, label: 'Blender' },
  { icon: reactIcon, label: 'React' },
  { icon: htmlIcon, label: 'HTML5' },
  { icon: cssIcon, label: 'CSS' },
  { icon: githubIcon, label: 'Git & GitHub' },
  { icon: photoshopIcon, label: 'Photoshop' },
  { icon: illustratorIcon, label: 'Illustrator' },
  { icon: printerIcon, label: '3D Printing' },
];

function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });
  const processSteps = t('skills.process.steps', { returnObjects: true });

  return (
    <section id="skills" className="skills-section">
      <h2>{t('skills.title')}</h2>

      <div className="tools-strip">
        {TOOLS.map((tool) => (
          <motion.div
            className="tool-badge"
            key={tool.label}
            whileHover={{ y: -4, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <img src={tool.icon} alt="" aria-hidden="true" />
            <span>{tool.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="skills-grid">
        {categories.map((category, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="skills-process">
        <h3>{t('skills.process.title')}</h3>
        <ol>
          {processSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Skills;

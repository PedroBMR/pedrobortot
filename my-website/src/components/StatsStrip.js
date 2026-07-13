import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './StatsStrip.css';
import Counter from './Counter';

function StatsStrip() {
  const { t } = useTranslation();
  const stats = t('home.stats', { returnObjects: true });

  return (
    <div className="stats-strip">
      {stats.map((stat, index) => (
        <motion.div
          className="stat-item"
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <span className="stat-value">
            <Counter value={stat.value} suffix={stat.suffix} />
          </span>
          <span className="stat-label">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsStrip;

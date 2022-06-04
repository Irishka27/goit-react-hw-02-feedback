
import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <Section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </Section>
  );
}

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
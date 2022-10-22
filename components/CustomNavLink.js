import Link from 'next/link';
import styles from '../styles/CustomNavLink.module.css';

function CustomNavLink({ text, href }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}

export default CustomNavLink;

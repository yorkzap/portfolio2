import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';
import ReactLogo from 'assets/nextjs.png';
import ThreeJS from 'assets/threejs-removebg-preview.png';
import Image from 'next/image';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center" style={{ display: 'flex', alignItems: 'center' }}>
      <span className={styles.date}></span>
      <span style={{ marginRight: '10px' }}>Built with </span>
      <Image src={ReactLogo} width={40} height={40}></Image>{' '}
      <span style={{ marginRight: '10px', marginLeft: '10px' }}>and </span>
      <span style={{ fontFamily: 'Roboto-Mono', fontWeight: 'bold' }}>three.js</span>,
      inspired by Hamish Williams.
    </Text>
  </footer>
);

import styles from '../styles/Logo.module.css';
import logo from '../public/images/logo.png';
import Image from 'next/image';

const Logo = () => (
    <div className={[styles.logo, styles.header_logo].join(' ')}>
        <div className={[styles.logo_img, 'full-bleed'].join(' ') }>
            <Image  src={logo} alt="Logo" fill="fill" width={75} height={55} />
        </div>
        <p className={styles.logo_title}>дарвет</p>
        <p className={styles.logo_tagline}>ветклініка</p>
    </div>
)

export default Logo

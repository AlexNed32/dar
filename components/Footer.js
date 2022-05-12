import styles from '../styles/Footer.module.css';
import Link from 'next/link'
import { location } from "../pages/api/data/location";
import { navigation } from "../pages/api/data/navigation";
import { socials } from '../pages/api/data/socials';
import { messengers } from '../pages/api/data/messengers';
import Image from 'next/image';

const Footer = () => (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_inner}>
                    <div className={styles.footer_services}>
                        <h3 className={styles.footer_title}>Послуги</h3>
                        <ul className={styles.footer_services_list}>
                            {navigation.map(({ id, title, path }) =>
                                <li className={styles.footer_menu_item} key={id}>
                                    <Link href={path} >
                                        <a className={styles.footer_menu_link}>{title}</a>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={styles.footer_info}>
                        <div className={styles.footer_location}>
                            <h3 className={styles.footer_title}>Адреса</h3>
                            <ul className={styles.footer_info_list}>
                                {location.map(({ id, adress, phone}) =>
                                    <li className={styles.footer_info_item} key={id}>
                                        <p className={styles.footer_info_adress}>{adress}</p>
                                        <a className={styles.footer_info_phone}>{phone}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className={styles.footer_working}>
                            <h3 className={styles.footer_title}>Режим роботи</h3>
                            <p>ПН-ПТ з 8:00 - 20:00</p>
                            <p>СБ-ВС з 10:00 - 20:00</p>
                        </div>
                    </div>
                    <div className={styles.footer_contacts}>
                        <div className={styles.footer_socials}>
                            <h3 className={styles.footer_title}>Ми в соц мережах</h3>
                            <ul className={styles.footer_socials_list}>
                                {socials.map(({ id, image, link }) =>
                                    <li className={styles.footer_socials_item} key={id}>
                                        <Link href={link}>
                                            <a className={styles.footer_socials_link}>
                                                <Image
                                                    src={image}
                                                    layout='fixed'
                                                    width={32}
                                                    height={32}
                                                    // className={styles.achievements_img}
                                                    />
                                            </a>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className={styles.footer_messengers}>
                            <h3 className={styles.footer_title}>Або напишіть нам</h3>
                            <ul className={styles.footer_socials_list}>
                                {messengers.map(({ id, image, link }) =>
                                    <li className={styles.footer_socials_item} key={id}>
                                        <Link href={link}>
                                            <a className={styles.footer_socials_link}>
                                                <Image
                                                    src={image}
                                                    layout='fixed'
                                                    width={32}
                                                    height={32}
                                                    // className={styles.achievements_img}
                                                    />
                                            </a>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={styles.footer_copy}>
                    <span>© 2022 DAR VET</span>
                </div>
            </div>
        </footer>
)

export default Footer

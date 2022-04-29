import styles from '../styles/Services.module.css';
import Image from 'next/image';
import Link from 'next/link'

const Services = () => {
    return (
        <section className={styles.services}>
            <h2 className={styles.services_title}>Послуги</h2>
            <ul className={styles.services_list}>
                <li className={styles.services_item}>
                    <div className={styles.services_img}>
                        <Image
                            src="/images/services/узд.jpg"
                            width="100vw"
                            heigth="84vw"
                            layout='fill'
                            objectFit='cover'
                            className={styles.services_image}
                        />
                    </div>
                    <p className={styles.services_text}>УЗД</p>
                    <Link href="/" >
                        <a className={styles.services_link}>Дізнатись більше</a>
                    </Link>
                    <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                </li>
                <li className={styles.services_item}>
                    <div className={styles.services_img}>
                        <Image
                            src="/images/services/кардіологія.jpg"
                            width="100vw"
                            heigth="84vw"
                            layout='fill'
                            objectFit='cover'
                            className={styles.services_image}
                        />
                    </div>
                    <p className={styles.services_text}>Кардіологія </p>
                    <Link href="/" >
                        <a className={styles.services_link}>Дізнатись більше</a>
                    </Link>
                    <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                </li>
                <li className={styles.services_item}>
                    <div className={styles.services_img}>
                        <Image
                            src="/images/services/стаціонар.jpg"
                            width="100vw"
                            heigth="84vw"
                            layout='fill'
                            objectFit='cover'
                            className={styles.services_image}
                        />
                    </div>
                    <p className={styles.services_text}>Стаціонарне відділення </p>
                    <Link href="/" >
                        <a className={styles.services_link}>Дізнатись більше</a>
                    </Link>
                    <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                </li>
                <li className={styles.services_item}>
                    <div className={styles.services_img}>
                        <Image
                            src="/images/services/узд.jpg"
                            width="100vw"
                            heigth="100vw"
                            layout='fill'
                            objectFit='cover'
                            className={styles.services_image}
                        />
                    </div>
                    <p className={styles.services_text}>УЗД </p>
                    <Link href="/" >
                        <a className={styles.services_link}>Дізнатись більше</a>
                    </Link>
                        <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                </li>
                <li className={styles.services_item}>
                    <div className={styles.services_img}>
                        <Image
                            src="/images/services/кардіологія.jpg"
                            width="100vw"
                            heigth="84vw"
                            layout='fill'
                            objectFit='cover'
                            className={styles.services_image}
                        />
                    </div>
                    <p className={styles.services_text}>Кардіологія </p>
                    <Link href="/" >
                        <a className={styles.services_link}>Дізнатись більше</a>
                    </Link>
                    <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                </li>
                <li className={styles.services_item}>
                    <div className={styles.services_img}>
                        <Image
                            src="/images/services/стаціонар.jpg"
                            width="100vw"
                            heigth="84vw"
                            layout='fill'
                            objectFit='cover'
                            className={styles.services_image}
                        />
                    </div>
                    <p className={styles.services_text}>Стаціонарне відділення </p>
                    <Link href="/" >
                        <a className={styles.services_link}>Дізнатись більше</a>
                    </Link>
                    <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                </li>
            </ul>
        </section>

    )
}

export default Services

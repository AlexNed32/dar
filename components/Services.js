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
                    <p className={styles.services_text}>УЗД діагностування в нашій клініці
                    виконується на апараті GE Healhtcare( США).
                    Обладнання дозволяє визначити хворобу на ранніх стадіях, що знижує ризики перенесення
                    важких операцій для тварин. Крім звичайного діагностування внутрішніх органів виявляємо відхилення в розвитку плода при вагітності, а також та визначати екстрені стани( тромбоз судин, гострий холецистит і т.д.
                    УЗД діагностування в нашій клініці
                    виконується на апараті GE Healhtcare( США).
                    Обладнання дозволяє визначити хворобу на ранніх стадіях, що знижує ризики перенесення
                    важких операцій для тварин. Крім звичайного діагностування внутрішніх органів виявляємо відхилення в розвитку плода при вагітності, а також та визначати екстрені стани( тромбоз судин, гострий холецистит і т.д.
                    </p>
                    <div className={styles.services_buttons}>
                        <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                        <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>Вартість</button>
                    </div>
                </li>
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
                    <p className={styles.services_text}>УЗД діагностування в нашій клініці
                    виконується на апараті GE Healhtcare( США).
                    Обладнання дозволяє визначити хворобу на ранніх стадіях, що знижує ризики перенесення
                    важких операцій для тварин. Крім звичайного діагностування внутрішніх органів виявляємо відхилення в розвитку плода при вагітності, а також та визначати екстрені стани( тромбоз судин, гострий холецистит і т.д.
                    </p>
                    <div className={styles.services_buttons}>
                        <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                        <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>Вартість</button>
                    </div>
                </li>
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
                    <p className={styles.services_text}>УЗД діагностування в нашій клініці
                    виконується на апараті GE Healhtcare( США).
                    Обладнання дозволяє визначити хворобу на ранніх стадіях, що знижує ризики перенесення
                    важких операцій для тварин. Крім звичайного діагностування внутрішніх органів виявляємо відхилення в розвитку плода при вагітності, а також та визначати екстрені стани( тромбоз судин, гострий холецистит і т.д.
                    </p>
                    <div className={styles.services_buttons}>
                        <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>OnLine Запис</button>
                        <button type="button" className={[styles.services_btn, 'cta'].join(' ')}>Вартість</button>
                    </div>
                </li>
            </ul>
        </section>

    )
}

export default Services

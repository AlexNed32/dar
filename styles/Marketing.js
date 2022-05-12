import Image from "next/image";
import styles from '../styles/Marketing.module.css';
import dog from '../public/images/marketing/1.png'

const Marketing = () => {
    return (
        <section className={styles.marketing}>
            <div className={styles.marketing_img}>
                <Image
                    src={dog}
                    width="100vw"
                    height="150vw"
                    // className={styles.marketing_img}
                    layout="fill"
                    objectFit="containe"
                />
            </div>
            <div className={styles.marketing_tagline}>
                <h3 className={styles.marketing_text}>
                    Записуйся на прийом сьогодні!
                </h3>
                <h3 className={styles.marketing_text}>
                    Отримай знижку -15% на будь-яку процедуру!
                </h3>
            </div>
            <div className={styles.marketing_phones}>
                <p className={styles.marketing_phones_item}>093-425-36-52</p>
                <p className={styles.marketing_phones_item}>093-425-36-52</p>
            </div>
            <button type="btn" className={[styles.marketing_btn, 'cta'].join(' ')}>OnLine Запис</button>
            <span className={styles.marketing_duration}>
                акція діє з 12.04.22 по 12.05.22
            </span>
        </section>
    )
}

export default Marketing

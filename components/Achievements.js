import styles from '../styles/Achievements.module.css';
import Image from 'next/image';


const Achievements = () => (
    <section className={styles.achievements}>
        <ul className={styles.achievements_list}>
            <li className={styles.achievements_item}>
                <Image
                src='/images/achivments/heart.svg'
                layout='intrinsic'
                width={32}
                height={32}
                className={styles.achievements_img}
                />
                <p className={styles.achievements_text}>Вдячні пухнастики
            </p>
                <span className={styles.achievements_couter}>2639</span>
            </li>
            <li className={styles.achievements_item}>
                <Image
                src='/images/achivments/clients.svg'
                layout='intrinsic'
                width={32}
                height={32}
                className={styles.achievements_img}
                />
                <p className={styles.achievements_text}>Задоволені клїєнти</p>
                <span className={styles.achievements_couter}>2312</span>
            </li>
            <li className={styles.achievements_item}>
                <Image
                src='/images/achivments/star.svg'
                layout='intrinsic'
                width={32}
                height={32}
                className={styles.achievements_img}
                />
                <p className={styles.achievements_text}>Відзнаки</p>
                <span className={styles.achievements_couter}>32</span>
            </li>
        </ul>
    </section>
)

export default Achievements;

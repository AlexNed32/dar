import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Achievements from '../components/Achievements';
import Services from '../components/Services';
import Marketing from '../components/Marketing';
import Specialists from '../components/Specialists';

export const getStaticProps = async () => {
    try{
        const response = await fetch(`${process.env.API_URL}/specialistsApi`);
        const data = await response.json();
        console.log('data', data)
        if (!data) {
            return{
                notFound: true,
            }
        }

        return {
            props: { specialists: data},
        }
    } catch {
        return {
            props: { specialists: []}
        }
    }
}

const Home = ( {specialists} ) => {

  return (
    <div className={styles.container}>
        <main>
            <section className={styles.main}>
                <div className={styles.main_descr}>
                    <h1 className={styles.main_title}>Дарвет</h1>
                    <p className={styles.main_text}>
                        Сучасні технології, кваліфікований персонал
                        індивідуальний підхід до кожного пухнастого
                        вихованця! Великий спектр послуг та досвід
                        в наданні необхідної допомоги вашим улюбленцям.
                        Здоров’я вашої тварини у надійних руках наших ветеренарів!
                    </p>
                    <button type='button' className={[styles.main_btn, 'cta'].join(' ')}>Дізнатися більше</button>
                </div>
                <div className={styles.main_img}>
                    <Image
                        src="/images/slider/1.jpg"
                        layout="fill"
                        height="68vw"
                        width="100vw"
                        objectFit="cover"
                        className={styles.main_image}
                    />
                </div>

            </section>
            <Achievements />
            <Services />
            <Marketing />
            <section className={styles.specialists}>
                <h1>Hello</h1>
                <Specialists specialists={specialists} />
            </section>
        </main>
    </div>
  )
}

export default Home

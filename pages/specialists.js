import styles from '../styles/Specialist.module.css';

import Specialists from '../components/Specialists';

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/specialists');
    const data = await response.json();

    if (!data) {
        return{
            notFound: true,
        }
    }

    return {
        props: { specialists: data},
    }
}

const Specialist = ( specialists ) =>{

    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Наші фахівці</h1>
                <section className={styles.galerry}>
                    <Specialists data={specialists} />
                </section>
            </div>
        </main>
    )
}

export default Specialist

import styles from '../../styles/Specialist.module.css';

import Specialists from '../../components/Specialists';

export const getStaticProps = async () => {
    try{
        const response = await fetch(`${process.env.API_HOST}/specialistsApi`);
        const data = await response.json();

        if (!data) {
            return{
                notFound: true,
            }
        }

        return {
            props: { specialists: data },
        }
    } catch {
        return {
            props: { specialists: null }
        }
    }
}

const Specialist = ( {specialists} ) =>{

    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Наші фахівці</h1>
                <section className={styles.galerry}>
                    <Specialists specialists={specialists} />
                </section>
            </div>
        </main>
    )
}

export default Specialist

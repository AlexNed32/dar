import Image from 'next/image';
import styles from '../styles/Specialist.module.css';
import stylesMain from '../styles/SpecialistMain.module.css';
import { useRouter } from 'next/router';


const Specialists = ({ specialists }) => {
    console.log(specialists)
    const router = useRouter();

    let expanded = false;
    const accordionOpen = '';

    if (!specialists){
        return null
    }

    const handlerClick = (e) => {
        e.target.setAttribute('aria-expanded', !expanded)
        if(!expanded){
            document.querySelector(`#accordion${e.target.id}`).classList.toggle(styles.accordion__open)
        }
    }

    let style = `${styles}`;
    if(router.pathname === '/'){
        style = `${stylesMain}`

    }

    return (
        <ul className={router.pathname === '/' ? stylesMain.galerry_list : styles.galerry_list}>
            {specialists && specialists.map(({ id, name, exp, qualification, image }) =>
                <li className={router.pathname === '/' ? stylesMain.specialist : styles.specialist} key={id}>
                    <div className={router.pathname === '/' ? stylesMain.specialist_img : styles.specialist_img}>
                        <Image
                            src={image}
                            alt={`Foto1`}
                            layout="responsive"
                            height={120}
                            width={100}
                            objectFit='contain'
                            className={router.pathname === '/' ? stylesMain.specialist_image : styles.specialist_image}
                        />
                    </div>
                    <div className={router.pathname === '/' ? stylesMain.specialist_info : styles.specialist_info}>
                        <h3 className={router.pathname === '/' ? stylesMain.specialist_name : styles.specialist_name}>{name}</h3>
                        <h4 className={router.pathname === '/' ? stylesMain.specialist_exp : styles.specialist_exp}>{exp}</h4>
                        <div className={[router.pathname === '/' ? stylesMain.accordion : styles.accordion, `${accordionOpen}`].join(' ')} id={`accordion${id}`} >
                            <h5 className={router.pathname === '/' ? stylesMain.specialist_serv : styles.specialist_serv}>?????????? ????????????????????:</h5>
                            <ul className={router.pathname === '/' ? stylesMain.serv_menu : styles.serv_menu}>
                                {qualification.map((i, z)=>
                                    <li key={z} className={router.pathname === '/' ? stylesMain.serv_menu_item : styles.serv_menu_item}>{i}</li>
                                )}
                            </ul>
                        </div>
                        <button type='button' className={[router.pathname === '/' ? stylesMain.accordion_btn : styles.accordion_btn, ''].join(' ')}
                        aria-expanded={`${expanded}`} id={id} onClick={(e) => handlerClick(e)}
                        >????????????????????</button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Specialists

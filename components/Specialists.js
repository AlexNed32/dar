import Image from 'next/image';
import styles from '../styles/Specialist.module.css';
import { useState, useRef, useEffect } from 'react';


const Specialists = ({ data }) => {

    let expanded = false;
    const accordionOpen = '';

    if (!data.specialists){
        return null
    }

    const handlerClick = (e) => {
        // expanded = !expanded
        e.target.setAttribute('aria-expanded', !expanded)
        if(!expanded){
            document.querySelector(`#accordion${e.target.id}`).classList.toggle(styles.accordion__open)
        }
    }

    return (
        <ul className={styles.galerry_list}>
            {data.specialists && data.specialists.map(({ id, name, exp, qualification, image }) =>
                <li className={styles.specialist} key={id}>
                    <div className={styles.specialist_img}>
                        <Image
                            src={image}
                            alt={`Foto1`}
                            layout="responsive"
                            height="150vw"
                            width="100vw"
                        />
                    </div>
                    <div className={styles.specialist_info}>
                        <h3 className={styles.specialist_name}>{name}</h3>
                        <h4 className={styles.specialist_exp}>{exp}</h4>
                        <div className={[styles.accordion, `${accordionOpen}`].join(' ')} id={`accordion${id}`} >
                            <h5 className={styles.specialist_serv}>Можна звертатися:</h5>
                            <ul className={styles.serv_menu}>
                                {qualification.map((i, z)=>
                                    <li key={z} className={styles.serv_menu_item}>{i}</li>
                                )}
                            </ul>
                        </div>
                        <button type='button' className={[styles.accordion_btn, ''].join(' ')}
                        aria-expanded={`${expanded}`} id={id} onClick={(e) => handlerClick(e)}
                        >Детальніше</button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Specialists

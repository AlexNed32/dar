import styles from "../styles/Header.module.css"
import Link from 'next/link'
import Logo from "./Logo";
import { useState } from 'react';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import icons
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab)

const navigation = [
    {id: 1, title: 'Узи', path: "/"},
    {id: 2, title: 'Кардиология', path: "/"},
    {id: 3, title: 'Ренген', path: "/"},
    {id: 4, title: 'Хириругия', path: "/"},
    {id: 5, title: 'Ренген диагностика', path: "/"},
    {id: 6, title: 'Стационарное лечение', path: "/"},
    {id: 7, title: 'Контакты', path: "/"},

]

const location = [
    {id: 1, adress: 'вул. Пантелеймонівська, 50', phone: '048-123-45-67'},
    {id: 2, adress: 'вул. Маршала Говорова, 10/2', phone: '048-67-89-123'},
]

const Header = () => {

    const [menuListOpen, setMenuListOpen] = useState('')
    const [menuButtonOpen, setMenuButtonOpen] = useState('');
    const [expanded, setExpanded] = useState(false);

    const handlerClick = (e) =>{
        setExpanded(!expanded)

        if(!expanded) {
            setMenuButtonOpen('menu_button__open')
            setMenuListOpen(styles.menu_list__open);
        } else {
            setMenuButtonOpen('');
            setMenuListOpen('');
        }
    }

    return (
        <header className={`${styles.header}`}>
            <Logo />
            <nav className={`${styles.menu} ${styles.header_menu}`}>
                <button className={[styles.menu_button, `${menuButtonOpen}`].join(' ')} type="button" aria-expanded={`${expanded}`} aria-controls="menu_list" onClick={(e) => handlerClick(e)}>
                    <svg className="menu_icon" aria-hidden="true" width={32} height={32}>
                        <use className="menu_icon__menu" href="images/sprite.svg#menu"></use>
                        <use className="menu_icon__cross" href="images/sprite.svg#cross"></use>
                    </svg>
                </button>
                <div className={[styles.menu_list, `${menuListOpen}`].join(' ')} id="menu_list">
                    <div className={[styles.menu, styles.services].join(' ')}>
                        <h3 className={styles.services_title}>Послуги</h3>
                        <ul className={styles.services_list}>
                            {navigation.map(({ id, title, path }) =>
                                <li className={styles.menu_item} key={id}>
                                    <Link href={path} >
                                        <a className={styles.menu_link}>{title}</a>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={[styles.menu_contacts, styles.header_contacts].join(' ')}>
                        <h3 className={styles.menu_contacts_title}>Контакти</h3>
                        <ul className={styles.menu_contacts_list}>
                            {location.map(({ id, adress, phone}) =>
                                <li className={styles.menu_contacts_item} key={id}>
                                    <p className={styles.menu_contacts_adress}>{adress}</p>
                                    <a className={styles.menu_contacts_phone}>{phone}</a>
                                </li>
                            )}
                        </ul>
                        <button type="button" className={[styles.header_brn, "cta"].join(' ')}>Записатися</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;

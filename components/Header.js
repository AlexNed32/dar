import styles from "../styles/Header.module.css"
import Link from 'next/link'
import Logo from "./Logo";
import { useState } from 'react';
import { location } from "../pages/api/data/location";
import { navigation } from "../pages/api/data/navigation";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import icons
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab)





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

import React from 'react'
import Styles from "./styles/navbar.module.css"

import UserMenu from '../userMenu/UserMenu'
import MenuApps from "../menuApps/MenuApps"

const Navbar = () => {
  return (
    <nav className={Styles.nav}>
        <ul className={Styles.ul}>
            <li className={Styles.list}>Gmail</li>
            <li className={Styles.list}>Imágenes</li>
            <li className={Styles.list}>< MenuApps /></li>
            <li className={Styles.listIcons}><UserMenu /></li>
        </ul>
    </nav>
  )
}

export default Navbar
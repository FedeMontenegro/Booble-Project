import { useState, useRef, useEffect } from 'react'

import Styles from "./styles/dropDownApps.module.css"
import { sectionOne, sectionTwo } from "../../../../../../../mocks/menuApps.items"

import Avatar from '@mui/material/Avatar';
import GoogleIcon from '@mui/icons-material/Google';

const DropDownApps = ({activeMenu}) => {

    const [activeHover, setActiveHover] = useState(false)
    const containerRef = useRef();

    useEffect(() => {
      containerRef.current.style.display = activeMenu
    }, [activeMenu])

    return (
        <div className={Styles.container} ref={containerRef}>

            <ul className={Styles.ul}>
                {sectionOne?.map((element, id) => {

                    return element.name.length > 10
                        ?
                        (<li
                            className={Styles.li}
                            key={id}
                            onMouseEnter={() => setActiveHover(true)}
                            onMouseOut={() => setActiveHover(false)}
                        >
                            {
                                activeHover === false
                                    ?
                                    element.name.substring(0, 9) + "..."
                                    :
                                    element.name
                            }
                        </li>)
                        :
                        (< li
                            className={Styles.li}
                            key={id}
                        >
                            {element.name}
                        </li>)
                })
                }
            </ul>

        </div >
    )
}

export default DropDownApps
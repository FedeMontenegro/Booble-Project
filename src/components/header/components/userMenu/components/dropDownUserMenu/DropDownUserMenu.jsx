import {useRef, useEffect} from 'react'
import Styles from "./styles/dropDownUserMenu.module.css"

import Avatar from '@mui/material/Avatar'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import IconButton from '@mui/material/IconButton'

const DropDownUserMenu = ({activeMenu}) => {

    const menuRef = useRef()

    useEffect(() => {
      
        menuRef.current.style.display = activeMenu
    }, [activeMenu])

    return (
        <div className={Styles.container} ref={menuRef}>
            <ul className={Styles.accountMenu}>
                <li className={Styles.listItemSectionOne}>
                    <div className={Styles.listItemAvatar}>
                        <div className={Styles.avatarContainer}>
                            <Avatar
                                sx={{
                                    bgcolor: "gray",
                                    height: 70,
                                    width: 70,
                                    fontSize: 35,
                                }}
                            >
                                F
                            </Avatar>

                            <IconButton
                                sx={{
                                    alignItems: "center",
                                    bgcolor: "white",
                                    border: "solid 1px gray",
                                    display: "flex",
                                    justifyContent: "center",
                                    /* margin: "1px", */
                                    position: "absolute",
                                    top: 50,
                                    right: -0,
                                    height: 25,
                                    width: 25,
                                    "&:hover": {
                                        bgcolor: "white",
                                    }
                                }}
                            >
                                <CameraAltOutlinedIcon
                                    sx={{
                                        width: 20,
                                    }}
                                />
                            </IconButton>
                        </div>

                        <div className={Styles.userDataContainer}>
                            <div className={Styles.userData}>
                                <h4>Federico Montenegro</h4>
                                <p>fedejulianmontenegro@gmail.com</p>
                            </div>

                            <button>Administrar tu Cuenta de Google</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={Styles.addAccount}>
                        <PersonAddOutlinedIcon
                            className={Styles.icon}
                        />
                        <p>Agregar otra cuenta</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default DropDownUserMenu
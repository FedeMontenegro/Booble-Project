import { useState, useEffect } from "react"

import Styles from "./styles/userMenu.module.css"

import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import DropDownUserMenu from "./components/dropDownUserMenu/DropDownUserMenu"

const UserMenu = () => {

    const [activeMenu, setActiveMenu] = useState("none")
    const toggleMenu = () => activeMenu === "none" ? setActiveMenu("block") : setActiveMenu("none")
    const foreignClick = e => e.target.id !== "accountMenu" && setActiveMenu("none")

    useEffect(() => {
        document.addEventListener("click", e => foreignClick(e))

        return () => {
            document.removeEventListener("click", e => foreignClick(e))
        }
    }, [])

    return (
        <div onClick={toggleMenu} id="accountMenu">
            <IconButton id="accountMenu">
                <Avatar
                    id="accountMenu"
                    sx={{
                        bgcolor: "gray",
                    }}
                >
                    F
                </Avatar>
            </IconButton>

            <DropDownUserMenu activeMenu={activeMenu} />
        </div>
    )
}

export default UserMenu
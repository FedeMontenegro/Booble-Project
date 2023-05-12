import {useState, useEffect} from "react"

import AppsIcon from '@mui/icons-material/Apps'
import IconButton from '@mui/material/IconButton'
import DropDownApps from './components/dropDownApps/DropDownApps'

const MenuApps = () => {

    const [activeMenu, setActiveMenu] = useState("none")

    const handleClick = () => activeMenu === "block" ? setActiveMenu("none") : setActiveMenu("block")
    const foreignClick = (e) => {
        e.target.id !== "appsBtn" && setActiveMenu("none")
    }

    useEffect(() => {
        
        document.addEventListener('click', (e)=> foreignClick(e))

        return () => {
          document.removeEventListener('click', () => foreignClick())
        }
      }, [])

    return (
        <div onClick={handleClick}>
            <IconButton id="appsBtn" onClick={handleClick}>
                <AppsIcon id="appsBtn"/>
            </IconButton>

            <DropDownApps activeMenu = {activeMenu} />
        </div>
    )
}

export default MenuApps
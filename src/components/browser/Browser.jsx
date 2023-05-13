import Styles from "./styles/browser.module.css"

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

const Browser = () => {
    return (
        <div className={Styles.container}>
            <SearchOutlinedIcon
                className={Styles.icon}
                sx={{
                    color: "gainsboro",
                    left: 15,
                    top: 15,
                }}
            />
            <input
                type="text"
                name="browser"
                id="browser"
                className={Styles.input}
            />

            <CameraAltOutlinedIcon
                className={Styles.icon}
                sx={{
                    cursor: "pointer",
                    right: 20,
                    top: 15,
                }}
                />

            <MicOutlinedIcon
                className={Styles.icon}
                sx={{
                    cursor: "pointer",
                    right: 60,
                    top: 15,
                }}
            />
        </div>
    )
}

export default Browser
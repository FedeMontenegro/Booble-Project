import Google from "../../assets/google.svg"
import Styles from "./styles/logo.module.css"

const Logo = () => {
    return (
        <div className={Styles.container}>
            <img
                className={Styles.img}
                src={Google}
                alt=""
            />
        </div>
    )
}

export default Logo
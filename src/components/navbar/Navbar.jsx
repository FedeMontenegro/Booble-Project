import Styles from "./styles/navbar.module.css"

const Navbar = ({ options = [] }) => {
    return (
        <ul className={Styles.ul}>
            {
                options?.map((element, id) => (
                    <li
                        className={Styles.item}
                        key={id}
                    >
                        {element.name}
                    </li>
                ))
            }
        </ul>
    )
}

export default Navbar
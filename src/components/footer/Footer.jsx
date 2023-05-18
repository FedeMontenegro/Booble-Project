import Styles from "./styles/footer.module.css"

const Footer = (props) => {
    return (
        <footer className={Styles.container}>
            {...props.children}
        </footer>
    )
}

export default Footer
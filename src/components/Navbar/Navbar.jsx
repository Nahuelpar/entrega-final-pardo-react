import Button from "../Button/Button";
import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <p>Home</p>
        <p>Productos</p>
        <p>Contacto</p>
    </nav>
  )
}

export default Navbar

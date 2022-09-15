import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to={"/"}>
        <div className={styles.app_icon}>MoViePLUS</div>
      </Link>
      <Link to={"/"}>
        <div>홈</div>
      </Link>
    </nav>
  );
}

export default Nav;

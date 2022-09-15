import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LoadingIcon.module.css";

function LoadingIcon() {
  return <FontAwesomeIcon className={styles.icon} icon={faSpinner} size="3x" />;
}

export default LoadingIcon;

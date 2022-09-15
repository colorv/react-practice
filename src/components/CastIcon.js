import styles from "./CastIcon.module.css";

function CastIcon() {
  return (
    <svg
      id={styles.castIcon}
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M16 13a2 2 0 11-8 0 4 4 0 018 0zM12 18a8 8 0 00-7 7h14a8 8 0 00-7-7z"
      />
    </svg>
  );
}

export default CastIcon;

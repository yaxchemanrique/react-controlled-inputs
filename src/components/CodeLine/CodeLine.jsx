import styles from "./CodeLine.module.css"

function CodeLine({ children }) {
  return <code className={styles.codeLine}>{children}</code>;
}

export default CodeLine;

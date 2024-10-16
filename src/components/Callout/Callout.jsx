import { MessageSquare, AlertTriangle, AlertCircle } from "feather-icons-react";
import styles from "./Callout.module.css";

function Callout({ type, children }) {
  let Icon = null;
  switch (type) {
    case "info":
      Icon = MessageSquare;
      break;
    case "warning":
      Icon = AlertTriangle;
      break;
    case "error":
      Icon = AlertCircle;
      break;
  }

  return (
    <aside className={`${styles.callout} ${styles[type]}`}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <div>{children}</div>
    </aside>
  );
}

export default Callout;

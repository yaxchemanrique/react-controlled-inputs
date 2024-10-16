import { MessageSquare, AlertTriangle, AlertCircle } from "feather-icons-react";
import styles from "./Callout.module.css";

function Callout({ type, children }) {
  let bgColor = "";
  let accentColor = "";
  let Icon = null;
  switch (type) {
    case "info":
      bgColor = "var(--clr-accent-100-100)";
      accentColor = "var(--clr-accent-400-100)";
      Icon = MessageSquare;
      break;
    case "warning":
      bgColor = "var(--clr-accent-100-100)";
      accentColor = "var(--clr-accent-400-100)";
      Icon = AlertTriangle;
      break;
    case "error":
      bgColor = "var(--clr-accent-100-100)";
      accentColor = "var(--clr-accent-400-100)";
      Icon = AlertCircle;
      break;

    default:
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

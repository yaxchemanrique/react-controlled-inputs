import { highlight } from "sugar-high";
import styles from './CodeBlock.module.css'

function CodeBlock({ children }) {
  const code = highlight(children);
  return (
    <pre className={styles.codeBlock}>
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}

export default CodeBlock;

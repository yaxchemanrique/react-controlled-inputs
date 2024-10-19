import { highlight } from "sugar-high";
import styles from "./CodeBlock.module.css";

function CodeBlock({ children, highlightedLines = [] }) {
  const code = highlight(children);
  const highlightedCode = code.split("\n").map((line, index) => {
    const lineNumber = index + 1;

    if (highlightedLines.includes(lineNumber)) {
      return line.replace(
        '<span class="sh__line"',
        `<span class="${styles.sh__line} ${styles.highlight}"`
      );
    } else {
      return line.replace(
        '<span class="sh__line"',
        `<span class=${styles.sh__line}`
      );
    }

  }).join("\n");

  return (
    <pre className={styles.codeBlock}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
}

export default CodeBlock;

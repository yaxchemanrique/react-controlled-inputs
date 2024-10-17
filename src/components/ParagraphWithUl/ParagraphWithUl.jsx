import styles from "./ParagraphWithUl.module.css";

function ParagraphWithUl({ paragraph, liArray }) {
  return (
    <>
      <p className={styles.paragraphUlSibling}>{paragraph}</p>
      <ul className={styles.ulParagraphSibling}>
        {liArray.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    </>
  );
}

export default ParagraphWithUl;

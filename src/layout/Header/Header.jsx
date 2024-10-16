import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>Yaxche Manrique</div>
          <ul>
            <li>
              <a href="https://flexbox.yaxchemanrique.com/">Flexbox</a>
            </li>
            <li>
              <a href="https://notion.com">Más Recursos</a>
            </li>
          </ul>
        </nav>
        <div className={styles.meshTitle}>
					<h1>controlled inputs en react</h1>
					<div>
						<object data="/flexbox-title.svg"></object>
					</div>
					<address rel="author" className={styles.authorTag}>by Yaxche Manrique</address>
				</div>
      </div>
    </header>
  );
}

export default Header;

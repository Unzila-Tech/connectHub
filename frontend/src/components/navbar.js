import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="ConnectHub Logo" />
        </Link>

        {/* Navigation */}
        <div className={styles.navLinks}>
          <Link href="/people">Top Content</Link>

          <Link href="/people">People</Link>

          <Link href="/learning">Learning</Link>

          <Link href="/jobs">Jobs</Link>

          <Link href="/games">Games</Link>

          <span className={styles.divider}></span>

          <Link href="/get-app">Get the app</Link>

          <Link href="/signIn" className={styles.signIn}>
            Sign in
          </Link>

          <Link href="/signUp" className={styles.joinNow}>
            Join now
          </Link>
        </div>
      </div>
    </nav>
  );
}
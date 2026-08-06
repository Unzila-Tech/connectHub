import Link from "next/link";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar-expand-lg ">

        <div className={styles.navbarNav}>

          <div className="" id="">
            <div className={styles.navItem}>
              <div className={styles.logo}>
                <Link href="/"><img src="images/logo.png" alt="logo" style={{ height: '90px', width: '100px', paddingBottom: '40px' }}></img></Link>
              </div>
              <Link href="/people">Top Content</Link>
              <Link href="/people"> people</Link>
              <Link href="/people">Learning</Link>
              <Link href="/people">Jobs</Link>
              <Link href="/people">Games</Link>
              <Link href="/people"> | Get the app |</Link>
              <button className={styles.sgnIn}><Link href="/signIn">Sign in</Link></button>
              <button className={styles.btn}><Link href="/signUp">join now</Link></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
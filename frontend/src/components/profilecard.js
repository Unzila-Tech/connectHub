import Link from "next/link";
import styles from "../styles/profile.module.css";

export default function Profile({ user }) {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={`${styles.card} ${styles.profileCard}`}>
        
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <span className={styles.bannerTitle}>
              {user.firstName} {user.lastName}
            </span>

            <span className={styles.bannerSub}>
              {user.headLine || "Add your headline"}
            </span>
          </div>
        </div>

        <div className={styles.avatarContainer}>
          <img
            src={user.profilePhoto || "/images/profile.avif"}
            alt="Profile Picture"
            className={styles.avatar}
          />
        </div>

        <div className={styles.profileInfo}>
          <h2 className={styles.name}>
            {user.firstName} {user.lastName}

            <span className={styles.verifiedBadge}>✓</span>

            <div className={styles.update}>
              <Link href="/updateProfile">
                <i className="fa-solid fa-pencil"></i>
              </Link>
            </div>
          </h2>

          <p className={styles.headline}>
            {user.headLine || "Add a headline"}
          </p>

          <p className={styles.location}>
            {user.location?.city || "Add city"}
            {user.location?.country
              ? `, ${user.location.country}`
              : ""}
              <span className={styles.headline}>
            <Link href="/contactInfo"> Contact Info</Link>
          </span>
          </p>

          

          <div className={styles.companyRow}>
            <div className={styles.companyLogo}>
              {user.headLine
                ? user.headLine.charAt(0).toUpperCase()
                : "CH"}
            </div>

            <span className={styles.companyName}>
              {user.headLine || "ConnectHub Member"}
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.card} ${styles.shadowCard}`}>
        <span className={styles.subtext}>
          Grow your career with Premium
        </span>

        <div className={styles.premiumRow}>
          <span className={styles.squareIcon}></span>
          <strong>Don’t miss: Premium for ₹0</strong>
        </div>
      </div>

      <div className={`${styles.card} ${styles.connectionsCard}`}>
        <div>
          <div className={styles.connectionsTitle}>
            Connections
          </div>

          <div className={styles.connectionsSubtitle}>
            Grow your network
          </div>
        </div>

        <div className={styles.connectionsCount}>
          {user.connections || 0}
        </div>
      </div>

      {/* Yahan space missing tha tumhare original code me */}
      <div className={`${styles.card} ${styles.menuCard}`}>
        
        <Link href="#" className={styles.menuItem}>
          <i className="fa-solid fa-bookmark"></i>
          Saved items
        </Link>

        <Link href="#" className={styles.menuItem}>
          <i className="fa-solid fa-user-group"></i>
          Groups
        </Link>

        <Link href="#" className={styles.menuItem}>
          <i className="fa-regular fa-newspaper"></i>
          Newsletters
        </Link>

        <Link href="#" className={styles.menuItem}>
          <i className="fa-regular fa-calendar-days"></i>
          Events
        </Link>
      </div>
    </>
  );
}
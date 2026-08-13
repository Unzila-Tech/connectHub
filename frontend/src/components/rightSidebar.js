import Link from "next/link";
import styles from "../styles/rightSidebar.module.css";

export default function RightSidebar(){
    return(
        <>
           <aside className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>LinkedIn News</h2>
        <span className={styles.infoIcon} title="Information">
          i
        </span>
      </div>

      <p className={styles.subtitle}>Top stories</p>

      {/* News List */}
      <ul className={styles.newsList}>
        <li className={styles.newsItem}>
          <h3 className={styles.storyTitle}>
            The sports conversations to join this week
          </h3>
          <p className={styles.storyMeta}>2d ago • 21,273 readers</p>
        </li>

        <li className={styles.newsItem}>
          <h3 className={styles.storyTitle}>
            Top tech &amp; startup experts to follow
          </h3>
          <p className={styles.storyMeta}>2d ago • 5,087 readers</p>
        </li>

        <li className={styles.newsItem}>
          <h3 className={styles.storyTitle}>
            Top finance experts to follow
          </h3>
          <p className={styles.storyMeta}>2d ago • 2,833 readers</p>
        </li>

        <li className={styles.newsItem}>
          <h3 className={styles.storyTitle}>
            Top marketing experts to follow
          </h3>
          <p className={styles.storyMeta}>2d ago • 2,561 readers</p>
        </li>

        <li className={styles.newsItem}>
          <h3 className={styles.storyTitle}>
            EV push sparks the next job boom
          </h3>
          <p className={styles.storyMeta}>2d ago • 2,282 readers</p>
        </li>
      </ul>

      {/* Expand Footer */}
      <div className={styles.expandButton}>
        Show more news
        <svg className={styles.chevron} viewBox="0 0 16 16">
          <path d="M8 11L3 6h10l-5 5z" fill="currentColor" />
        </svg>
      </div>
    </aside>
        </>
    );
}
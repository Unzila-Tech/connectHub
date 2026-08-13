import Link from "next/link";
import styles from "../styles/createPost.module.css";
export default function CreatePost() {
   return (
      <>
         <div className={styles.feedContainer}>


            <div className={`${styles.card} ${styles.createPostCard}`}>
               <div className={styles.createPostInputContainer}>
                  <img className={styles.userAvatar} src="images/profile.avif" alt="User Profile" />
                  <button className={styles.startPostBtn}>Start a post</button>
               </div>

               <div className={styles.createPostActions}>
                  <button className={styles.actionItem}>
                     <i class="fa-solid fa-video icon-video"></i>
                     <span>Video</span>
                  </button>
                  <button className={styles.actionItem}>
                     <i class="fa-solid fa-image icon-photo"></i>
                     <span>Photo</span>
                  </button>
                  <button className={styles.actionItem}>
                     <i class="fa-solid fa-newspaper icon-article"></i>
                     <span>Write article</span>
                  </button>
               </div>
            </div>
            <div className={styles.sortBar}>
               <span>Sort by:</span>
               <strong>Top <i class="fa-solid fa-chevron-down"></i></strong>
            </div>

            
            <div className={`${styles.card } ${styles.recommendedCard}`}>
               <div className={styles.recommendedTitle}>Recommended for you</div>

               
               <div className={styles.recItem}>
                  <img className={styles.recLogo} src="https://picsum.photos/id/237/100/100" alt="ESIC" />
                  <div className={styles.recInfo}>
                     <div className={styles.recName}>ESIC - Employees' State Insurance Corporation</div>
                     <div className={styles.recDesc}>Official Account of Employees' State Insurance Corporation, Headquarters, Ministry of Labour & ...</div>
                     <div className={styles.recSub}>
                        <i class="fa-solid fa-arrow-trend-up"></i> Based on your profile
                     </div>
                  </div>
                  <button className={styles.followBtn}><i class="fa-solid fa-plus"></i> Follow</button>
               </div>

               
               <div className={styles.recItem}>
                  <img className={styles.recLogo} src="https://picsum.photos/id/1062/100/100" alt="HSSC" />
                  <div className={styles.recInfo}>
                     <div className={styles.recName}>Healthcare Sector Skill Council (HSSC)</div>
                     <div className={styles.recDesc}>Company • Hospitals and Health Care</div>
                     <div className={styles.recSub}>
                        <i class="fa-solid fa-arrow-trend-up"></i> Based on your profile
                     </div>
                  </div>
                  <button className={styles.followBtn}><i class="fa-solid fa-plus"></i> Follow</button>
               </div>

               
               <div className={styles.recItem}>
                  <img className={styles.recLogo} src="https://picsum.photos/id/1069/100/100" alt="Sir Ganga Ram Hospital" />
                  <div className={styles.recInfo}>
                     <div className={styles.recName}>Sir Ganga Ram Hospital</div>
                     <div className={styles.recDesc}>Establishing #bondoftrust</div>
                     <div className={styles.recSub}>
                        <i class="fa-solid fa-arrow-trend-up"></i> Based on your profile
                     </div>
                  </div>
                  <button className={styles.followBtn}><i class="fa-solid fa-plus"></i> Follow</button>
               </div>

            
               <button className={styles.showMoreBtn}>
                  Show more <i class="fa-solid fa-arrow-right"></i>
               </button>
            </div>

      
            <div className={`${styles.card}${styles.postCard}`}>
               <div className={styles.postHeader}>
                  <div className={styles.postAuthorDetails}>
                     <img className={styles.postAuthorLogo} src="https://picsum.photos/id/201/100/100" alt="LUIS Technology" />
                     <div>
                        <div className={styles.authorName}>
                           LUIS Technology <i class="fa-brands fa-linkedin" style={{ color: '#0a66c2' }}></i>
                        </div>
                        <div className={styles.authorFollowers}>4,316 followers</div>
                        <div className={styles.postType}>Promoted</div>
                     </div>
                  </div>
                  <button className={styles.moreOptionsBtn}><i class="fa-solid fa-ellipsis"></i></button>
               </div>

               <div className={styles.postContent}>
                  With LUIS PREVENT, safety events become valuable insights. Identify hotspots, analyze trends, and prevent accidents before they happen.
               </div>
               <img className={styles.postImage} src="https://picsum.photos/id/180/600/300" alt="Post graphic" />
            </div>

            
            <div className={`${styles.card } ${styles.postCard}`}>
               <div className={styles.postHeader}>
                  <div className={styles.postHeader}>
                     <img className={styles.postAuthorLogo} src="https://picsum.photos/id/1012/100/100" alt="Tech Corp" />
                     <div>
                        <div className={styles.authorName}>
                           Tech Solutions Inc. <i class="fa-brands fa-linkedin" style={{ color: '#0a66c2' }}></i>
                        </div>
                        <div className={styles.authorFollowers}>128,900 followers</div>
                        <div className={styles.postType}>1d • Edited</div>
                     </div>
                  </div>
                  <button className={styles.moreOptionsBtn}><i class="fa-solid fa-ellipsis"></i></button>
               </div>

               <div className={styles.postContent}>
                  We are thrilled to announce our next-generation web tools designed for maximum productivity and seamless integration across teams worldwide!
               </div>
            </div>

         </div>
      </>
   );
}


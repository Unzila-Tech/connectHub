import Link from "next/link";
import styles from "../styles/register.module.css";
export default function Login() {
  return (
    <>
      <div className="container">
        <div className="row">

          <h1 className={styles.mainHeading}> Welcome to your professional Community</h1>

          <div className={styles.card}>
            <form>
              <div className={styles.formGroup}>
                <label for="email">Email :</label>
                <input type="email" id="Email" name="Email" placeholder="Enter Email"></input>
              </div>
              <div className={styles.formGroup}>
                <label for="password">Password (6 or more characters)</label>
                <input type="password" id="password" name="password" placeholder="Enter Password"></input>
              </div>
              <button type="submit" className={styles.btnSubmit}>Sign in</button>
            </form>
            <div className={styles.divider}>
              <span>or</span>
            </div>
            <button className={styles.btnGoogle}> sign in with Google </button>
            <p className={styles.signinPrompt}>
              New to LinkedIn? <Link href="signUp">Join now</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
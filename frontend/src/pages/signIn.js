import Link from "next/link";
import styles from "../styles/register.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Login() {
 const router = useRouter();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:7070/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login Successful");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log("User Saved:", data.user);
      router.push("/home"); 
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong!");
  }
};
  return (
    <>
      <div className="container">
        <div className="row">

          <h1 className={styles.mainHeading}> Welcome to your professional Community</h1>

          <div className={styles.card}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlForfor="email">Email :</label>
                <input type="email" id="Email" name="email" placeholder="Enter Email"
                value={formData.email}onChange={handleChange}></input>
              </div>
              <div className={styles.formGroup}>
                <label htmlForor="password">Password (6 or more characters)</label>
                <input type="password" id="password" name="password" placeholder="Enter Password"
                value={formData.password}onChange={handleChange}></input>
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
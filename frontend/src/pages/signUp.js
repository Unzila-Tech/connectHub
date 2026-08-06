import { useState } from "react";


import Link from "next/link";
import styles from "../styles/register.module.css";
export default function Register() {

    const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
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
    const response = await fetch("http://localhost:7070/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      alert("Signup Successful");
        
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }

};
    return (
        <>
            <div className="container">
                <div className="row">

                    <h1 className={styles.mainHeading}>Make the most of your professional life</h1>

                    <div className={styles.card}>
                       <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName">FirstName :</label>
                                <input type="text" id="firstName" name="firstName"
                                 placeholder="Enter FirstName" value={formData.firstName}onChange={handleChange}></input>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName">LastName :</label>
                                <input type="text" id="lastName" name="lastName" placeholder="Enter LastName"
                                value={formData.lastName}onChange={handleChange}></input>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="password">Password (6 or more characters)</label>
                                <input type="password" id="password" name="password" placeholder="Enter Password"
                                value={formData.password}onChange={handleChange}></input>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email :</label>
                                <input type="email" id="email" name="email" placeholder="Enter Email"
                                value={formData.email}onChange={handleChange}></input>
                            </div>
                            <p className={styles.agreementText}>
                                By clicking Agree & Join, you agree to the LinkedIn
                                <Link href="/userAgreement">User Agreement</Link>
                                <Link href="/privacyPolicy">Privacy Policy</Link> , and
                                <Link href="/">Cookie Policy</Link>
                            </p>
                            <button type="submit" className={styles.btnSubmit}>Agree & Join</button>
                        </form>
                        <div className={styles.divider}>
                            <span>or</span>
                        </div>

                        <button className={styles.btnGoogle}> Join with Google </button>
                        <p className={styles.signinPrompt}>
                            Already on LinkedIn? <Link href="signIn">Sign in</Link>
                        </p>

                    </div>

                </div >
            </div >
        </>
    );
}
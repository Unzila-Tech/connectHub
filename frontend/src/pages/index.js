import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import Link from "next/link";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container ps-5 mt-5">
        <div className="row">
          <div className="col-md-6 ">
            <h3 className="para">Find your dream job and build your career</h3>
            <div>
              <button type="button" className="btn btn-primary ">Continue with google</button><br></br>
              <button type="button" className="btn "><img src="images/microsoft.png" alt="microsoft-icon" style={{ width: 20, height: 'auto' }} ></img> Continue with Microsoft</button><br></br>
              <button type="button" className="btn "><img src="images/google.jpg" alt="google-icon" style={{ width: 20, height: 'auto' }} ></img> Sign in with email</button>
            </div>
            <p className="about-h">
              By clicking Continue to join or sign in, you agree to LinkedIn’s <Link href="#" className="blue">User <br></br>Agreement</Link>,
              <Link href="#" className="blue">Privacy Policy</Link> , and <Link href="#" className="blue">Privacy Policy</Link>.
            </p>
            <div className="join">
              <p>New to LinkedIn? <Link href="/signUp" className="blue">Join now</Link></p>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-end">
            <img src="/images/sideImg.svg" alt="side" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Profile from "@/components/profilecard";
import CreatePost from "@/components/createPost";

import RightSidebar from "@/components/rightSidebar";

export default function Home() {
     const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUserProfile = async () => {
  //     const storedUser = localStorage.getItem("user");

  //     if (!storedUser) return;

  //     const loggedInUser = JSON.parse(storedUser);

  //     try {
  //       const response = await fetch(
  //         `http://localhost:7070/user/${loggedInUser._id}`
  //       );

  //       const data = await response.json();

  //       if (response.ok) {
  //         setUser(data);
  //       } else {
  //         console.log(data.message);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getUserProfile();
  // }, []);
useEffect(() => {
  const getUserProfile = async () => {
    const storedUser = localStorage.getItem("user");

    console.log("Stored User:", storedUser);

    if (!storedUser) {
      console.log("No user found in localStorage");
      return;
    }

    const loggedInUser = JSON.parse(storedUser);

    console.log("Logged In User:", loggedInUser);
    console.log("User ID:", loggedInUser._id);

    try {
     const response = await fetch(
  `http://localhost:7070/user/${loggedInUser._id}`
);
      
      const data = await response.json();

      console.log("API Response:", data);

      if (response.ok) {
        setUser(data);
      } else {
        console.log(data.message);
      }

    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  getUserProfile();
}, []);

  return (
    <>
   
    <Navbar/>
   
    <div className="container">
    <div className="row">

      <div className="col-md-3">
        <Profile user={user} />
      </div>

      <div className="col-md-6">
        <CreatePost />
      </div>

      <div className="col-md-3">
        <RightSidebar />
      </div>

    </div>
  </div>
    </>
  );
}
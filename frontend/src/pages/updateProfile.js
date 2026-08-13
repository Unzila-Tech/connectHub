import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function UpdateProfile() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profilePhoto: "",
    coverPhoto: "",
    headLine: "",
    city: "",
    country: "",
    about: "",
    skills: "",
    experience: [],
    education: [],
    projects: [],
    languages: [],
  });

  // =========================
  // Get logged-in user
  // =========================
  useEffect(() => {
    const getUser = () => {
      try {
        const savedUser = localStorage.getItem("user");

        console.log("SAVED USER:", savedUser);

        if (!savedUser) {
          throw new Error("User not found. Please login again.");
        }

        const userData = JSON.parse(savedUser);

        console.log("USER DATA:", userData);
        console.log("USER ID:", userData?._id);

        if (!userData?._id) {
          throw new Error("User ID not found.");
        }

        setUser(userData);

        setFormData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",

          profilePhoto: userData.profilePhoto || "",
          coverPhoto: userData.coverPhoto || "",

          headLine: userData.headLine || "",

          city: userData.location?.city || "",
          country: userData.location?.country || "",

          about: userData.about || "",

          skills: userData.skills
            ? userData.skills.join(", ")
            : "",

          experience: userData.experience || [],
          education: userData.education || [],
          projects: userData.projects || [],
          languages: userData.languages || [],
        });

      } catch (error) {
        console.error("GET USER ERROR:", error);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  // =========================
  // Normal input change
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // Experience change
  // =========================
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;

    const updatedExperience = [...formData.experience];

    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };

    setFormData((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  // =========================
  // Add experience
  // =========================
  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          companyName: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  // =========================
  // Remove experience
  // =========================
  const removeExperience = (index) => {
    const updatedExperience = formData.experience.filter(
      (_, i) => i !== index
    );

    setFormData((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  // =========================
  // Education change
  // =========================
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;

    const updatedEducation = [...formData.education];

    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };

    setFormData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  // =========================
  // Add education
  // =========================
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          schoolName: "",
          degree: "",
          fieldOfStudy: "",
          startYear: "",
          endYear: "",
        },
      ],
    }));
  };

  // =========================
  // Remove education
  // =========================
  const removeEducation = (index) => {
    const updatedEducation = formData.education.filter(
      (_, i) => i !== index
    );

    setFormData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  // =========================
  // Project change
  // =========================
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;

    const updatedProjects = [...formData.projects];

    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value,
    };

    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  // =========================
  // Add project
  // =========================
  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "",
          technologies: [],
          githubLink: "",
        },
      ],
    }));
  };

  // =========================
  // Remove project
  // =========================
  const removeProject = (index) => {
    const updatedProjects = formData.projects.filter(
      (_, i) => i !== index
    );

    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  // =========================
  // Language change
  // =========================
  const handleLanguageChange = (index, e) => {
    const { name, value } = e.target;

    const updatedLanguages = [...formData.languages];

    updatedLanguages[index] = {
      ...updatedLanguages[index],
      [name]: value,
    };

    setFormData((prev) => ({
      ...prev,
      languages: updatedLanguages,
    }));
  };

  // =========================
  // Add language
  // =========================
  const addLanguage = () => {
    setFormData((prev) => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          type: "",
          proficiency: "",
        },
      ],
    }));
  };

  // =========================
  // Remove language
  // =========================
  const removeLanguage = (index) => {
    const updatedLanguages = formData.languages.filter(
      (_, i) => i !== index
    );

    setFormData((prev) => ({
      ...prev,
      languages: updatedLanguages,
    }));
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check user ID
      if (!user?._id) {
        alert("User ID not found. Please login again.");
        return;
      }

      // Data to send backend
      const updatedData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,

        profilePhoto: formData.profilePhoto,
        coverPhoto: formData.coverPhoto,

        headLine: formData.headLine,

        location: {
          city: formData.city,
          country: formData.country,
        },

        about: formData.about,

        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill !== ""),

        experience: formData.experience,

        education: formData.education,

        projects: formData.projects.map((project) => ({
          ...project,

          technologies:
            typeof project.technologies === "string"
              ? project.technologies
                  .split(",")
                  .map((tech) => tech.trim())
                  .filter((tech) => tech !== "")
              : project.technologies,
        })),

        languages: formData.languages,
      };

      console.log("USER ID:", user._id);
      console.log("UPDATED DATA:", updatedData);

      // PUT request
      const response = await fetch(
        `http://localhost:7070/user/${user._id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(updatedData),
        }
      );

      const data = await response.json();

      console.log("UPDATE RESPONSE:", data);

      if (!response.ok) {
        alert(data.message || "Profile update failed");
        return;
      }

      // Save updated user in localStorage
      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        setUser(data.user);
      }

      alert("Profile updated successfully!");

      router.push("/profile");

    } catch (error) {
      console.error("UPDATE ERROR:", error);

      alert(
        error.message || "Something went wrong"
      );
    }
  };

  // =========================
  // Loading
  // =========================
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // =========================
  // No user
  // =========================
  if (!user) {
    return (
      <div>
        <h2>User not found</h2>
        <button onClick={() => router.push("/signIn")}>
          Login Again
        </button>
      </div>
    );
  }

  // =========================
  // Your existing form
  // =========================
  return (
    <div>
      <form onSubmit={handleSubmit}>

        {/* BASIC INFORMATION */}

        <h2>Basic Information</h2>

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <br /><br />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        {/* PHOTO */}

        <h2>Profile Photo</h2>

        <label>Profile Photo</label>
        <input
          type="text"
          name="profilePhoto"
          value={formData.profilePhoto}
          onChange={handleChange}
          placeholder="Profile photo URL"
        />

        <br /><br />

        <label>Cover Photo</label>
        <input
          type="text"
          name="coverPhoto"
          value={formData.coverPhoto}
          onChange={handleChange}
          placeholder="Cover photo URL"
        />

        <br /><br />

        {/* HEADLINE */}

        <h2>Professional Information</h2>

        <label>Headline</label>
        <input
          type="text"
          name="headLine"
          value={formData.headLine}
          onChange={handleChange}
          placeholder="Software Developer | MERN Stack"
        />

        <br /><br />

        {/* LOCATION */}

        <h2>Location</h2>

        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Aligarh"
        />

        <br /><br />

        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="India"
        />

        <br /><br />

        {/* ABOUT */}

        <h2>About</h2>

        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="Tell something about yourself"
          rows="5"
        />

        <br /><br />

        {/* SKILLS */}

        <h2>Skills</h2>

        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="JavaScript, React, Node.js, MongoDB"
        />

        <small>
          Separate skills using comma
        </small>

        <br /><br />

        {/* EXPERIENCE */}

        <h2>Experience</h2>

        {formData.experience.map((experience, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={experience.companyName}
              onChange={(e) =>
                handleExperienceChange(index, e)
              }
            />

            <br /><br />

            <input
              type="text"
              name="position"
              placeholder="Position"
              value={experience.position}
              onChange={(e) =>
                handleExperienceChange(index, e)
              }
            />

            <br /><br />

            <input
              type="text"
              name="startDate"
              placeholder="Start Date"
              value={experience.startDate}
              onChange={(e) =>
                handleExperienceChange(index, e)
              }
            />

            <br /><br />

            <input
              type="text"
              name="endDate"
              placeholder="End Date"
              value={experience.endDate}
              onChange={(e) =>
                handleExperienceChange(index, e)
              }
            />

            <br /><br />

            <textarea
              name="description"
              placeholder="Description"
              value={experience.description}
              onChange={(e) =>
                handleExperienceChange(index, e)
              }
            />

            <br /><br />

            <button
              type="button"
              onClick={() => removeExperience(index)}
            >
              Remove Experience
            </button>
          </div>
        ))}

        <button type="button" onClick={addExperience}>
          + Add Experience
        </button>

        <br /><br />

        {/* EDUCATION */}

        <h2>Education</h2>

        {formData.education.map((education, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              name="schoolName"
              placeholder="School / University"
              value={education.schoolName}
              onChange={(e) =>
                handleEducationChange(index, e)
              }
            />

            <br /><br />

            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={education.degree}
              onChange={(e) =>
                handleEducationChange(index, e)
              }
            />

            <br /><br />

            <input
              type="text"
              name="fieldOfStudy"
              placeholder="Field of Study"
              value={education.fieldOfStudy}
              onChange={(e) =>
                handleEducationChange(index, e)
              }
            />

            <br /><br />

            <input
              type="number"
              name="startYear"
              placeholder="Start Year"
              value={education.startYear || ""}
              onChange={(e) =>
                handleEducationChange(index, e)
              }
            />

            <br /><br />

            <input
              type="number"
              name="endYear"
              placeholder="End Year"
              value={education.endYear || ""}
              onChange={(e) =>
                handleEducationChange(index, e)
              }
            />

            <br /><br />

            <button
              type="button"
              onClick={() => removeEducation(index)}
            >
              Remove Education
            </button>
          </div>
        ))}

        <button type="button" onClick={addEducation}>
          + Add Education
        </button>

        <br /><br />

        {/* PROJECTS */}

        <h2>Projects</h2>

        {formData.projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={project.title}
              onChange={(e) =>
                handleProjectChange(index, e)
              }
            />

            <br /><br />

            <input
              type="text"
              name="technologies"
              placeholder="React, Node.js, MongoDB"
              value={
                Array.isArray(project.technologies)
                  ? project.technologies.join(", ")
                  : project.technologies
              }
              onChange={(e) =>
                handleProjectChange(index, e)
              }
            />

            <br /><br />

            <input
              type="text"
              name="githubLink"
              placeholder="GitHub Link"
              value={project.githubLink}
              onChange={(e) =>
                handleProjectChange(index, e)
              }
            />

            <br /><br />

            <button
              type="button"
              onClick={() => removeProject(index)}
            >
              Remove Project
            </button>
          </div>
        ))}

        <button type="button" onClick={addProject}>
          + Add Project
        </button>

        <br /><br />

        {/* LANGUAGES */}

        <h2>Languages</h2>

        {formData.languages.map((language, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={language.language}
              onChange={(e) =>
                handleLanguageChange(index, e)
              }
            />

            <br /><br />

            <select
              name="proficiency"
              value={language.proficiency}
              onChange={(e) =>
                handleLanguageChange(index, e)
              }
            >
              <option value="">
                Select Proficiency
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">
                Intermediate
              </option>
              <option value="Advanced">Advanced</option>
              <option value="Fluent">Fluent</option>
              <option value="Native">Native</option>
            </select>

            <br /><br />

            <button
              type="button"
              onClick={() => removeLanguage(index)}
            >
              Remove Language
            </button>
          </div>
        ))}

        <button type="button" onClick={addLanguage}>
          + Add Language
        </button>

        <br /><br />

        {/* UPDATE */}

        <button type="submit">
          Update Profile
        </button>

      </form>
    

     
    </div>
  );
}
 
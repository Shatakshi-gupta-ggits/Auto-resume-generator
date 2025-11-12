import React, { useState } from "react";
import ResumeForm from "./components/form/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import DownloadButton from "./components/DownloadButton";
import "./App.css";

function App() {
  // 🧠 useState to store all resume data in one place (parent state)
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: [
      {
        institute: "",
        degree: "",
        startYear: "",
        endYear: "",
        description: "",
      },
    ],
     skills: [""], // skills are now an array
  });

  // 📩 This function will be passed to ResumeForm to update state
  const handleInputChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index][field] = value;
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const handleAddEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          institute: "",
          degree: "",
          startYear: "",
          endYear: "",
          description: "",
        },
      ],
    });
  };

  const handleSkillChange = (index, value) => {
  const updatedSkills = [...resumeData.skills];
  updatedSkills[index] = value;
  setResumeData({ ...resumeData, skills: updatedSkills });
};

const handleAddSkill = () => {
  setResumeData({
    ...resumeData,
    skills: [...resumeData.skills, ""],
  });
};


  return (
    <>
      {/* Top Heading */}
      <header className="app-header">
        <h1 className="app-title">GenerateMyResume.ai</h1>
      </header>

      <div className="container">
        {/* Left Side — form to fill data */}
        <div className="form-section">
          <ResumeForm
            resumeData={resumeData}
            onInputChange={handleInputChange}
            onAddEducation={handleAddEducation}
            onEducationChange={handleEducationChange}
          />
        </div>

        {/* Right Side — live preview of resume */}
        <div className="preview-section">
          {/* give an id so DownloadButton can capture this element for PDF */}
          <div id="resume-preview">
            <ResumePreview resumeData={resumeData} />
          </div>
          <DownloadButton resumeData={resumeData} />
        </div>
      </div>
    </>
  );
}

export default App;



// App.js is like the control center.
// It stores all your resume data (using useState) and sends it to other components.
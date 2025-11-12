import React from "react";
import Education from "./education";
import Skills from "./skills"; // <-- Import the new component

function ResumeForm({ resumeData, onInputChange, onAddEducation, onEducationChange, onAddSkill, onSkillChange }) {
  return (
    <div className="resume-form">
      <h2 className="form-title">Fill Your Details</h2>

      <input
        className="form-input"
        type="text"
        placeholder="Full Name"
        value={resumeData.name}
        onChange={(e) => onInputChange("name", e.target.value)}
      />

      <input
        className="form-input"
        type="email"
        placeholder="Email"
        value={resumeData.email}
        onChange={(e) => onInputChange("email", e.target.value)}
      />

      <input
        className="form-input"
        type="text"
        placeholder="Phone"
        value={resumeData.phone}
        onChange={(e) => onInputChange("phone", e.target.value)}
      />

      {/* Education section moved here */}
      <Education
        educationList={resumeData.education}
        onAddEducation={onAddEducation}
        onInputChange={onEducationChange}
      />
     {/* Skills Section */}
     <Skills
        skillsList={resumeData.skills}
        onAddSkill={onAddSkill}
        onSkillChange={onSkillChange}
      />

      <label className="field-label">Experience</label>
      <textarea
        className="form-textarea"
        placeholder="Experience"
        value={resumeData.experience}
        onChange={(e) => onInputChange("experience", e.target.value)}
      />
    </div>
  );
}

export default ResumeForm;

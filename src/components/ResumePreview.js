import React from "react";

function ResumePreview({ resumeData }) {
  const { name, email, phone, education, skills, experience } = resumeData;

  return (
    <div className="resume-preview">
      <header className="preview-header">
        <h2 className="preview-name">{name || "Your Name"}</h2>
        <div className="preview-contact">
          <span>{email || "email@example.com"}</span>
          <span className="dot">•</span>
          <span>{phone || "Your Phone"}</span>
        </div>
      </header>

      <section className="preview-section-block">
        <h3 className="section-title">Education</h3>
        {Array.isArray(education) && education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="education-item">
              {edu.institute && <p className="edu-institute"><strong>{edu.institute}</strong></p>}
              {edu.degree && <p className="edu-degree">{edu.degree}</p>}
              {(edu.startYear || edu.endYear) && (
                <p className="edu-years">{edu.startYear} - {edu.endYear}</p>
              )}
              {edu.description && <p className="section-content">{edu.description}</p>}
            </div>
          ))
        ) : (
          <p className="section-content">Your education details</p>
        )}
      </section>

      <section className="preview-section-block">
        <h3 className="section-title">Skills</h3>
        <p className="section-content">{skills || "Your skills"}</p>
      </section>

      <section className="preview-section-block">
        <h3 className="section-title">Experience</h3>
        <p className="section-content">{experience || "Your experience"}</p>
      </section>
    </div>
  );
}

export default ResumePreview;
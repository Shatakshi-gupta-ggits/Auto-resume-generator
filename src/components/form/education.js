import React from "react";

function Education({ educationList, onAddEducation, onInputChange }) {
  return (
    <div className="education-section">
      <label className="field-label">Education</label>

      {educationList.map((edu, index) => (
        <div key={index} className="education-entry">
          <input
            className="form-input"
            type="text"
            placeholder="Institute / School Name"
            value={edu.institute}
            onChange={(e) =>
              onInputChange(index, "institute", e.target.value)
            }
          />

          <input
            className="form-input"
            type="text"
            placeholder="Degree / Course"
            value={edu.degree}
            onChange={(e) => onInputChange(index, "degree", e.target.value)}
          />

          <input
            className="form-input"
            type="text"
            placeholder="Start Year"
            value={edu.startYear}
            onChange={(e) => onInputChange(index, "startYear", e.target.value)}
          />

          <input
            className="form-input"
            type="text"
            placeholder="End Year"
            value={edu.endYear}
            onChange={(e) => onInputChange(index, "endYear", e.target.value)}
          />

          <textarea
            className="form-textarea"
            placeholder="Description (optional)"
            value={edu.description}
            onChange={(e) =>
              onInputChange(index, "description", e.target.value)
            }
          />
        </div>
      ))}

      <button className="add-btn" onClick={onAddEducation}>
        ➕ Add Education
      </button>
    </div>
  );
}

export default Education;

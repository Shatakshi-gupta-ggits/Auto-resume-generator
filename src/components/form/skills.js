import React from "react";

function Skills({ skillsList, onAddSkill, onSkillChange }) {
  return (
    <div className="skills-section">
      <label className="field-label">Skills</label>

      {skillsList.map((skill, index) => (
        <div key={index} className="skill-entry">
          <input
            className="form-input"
            type="text"
            placeholder={`Skill ${index + 1}`}
            value={skill}
onChange={(e) => onSkillChange(index, e.target.value)}
          />
        </div>
      ))}

      <button className="add-btn" onClick={onAddSkill}>
        ➕ Add Skill
      </button>
    </div>
  );
}

export default Skills;

import React from "react";
import resume from "../../data/resume";

const Resume = () => {
  return (
    <div className="resume">
      <h1>{resume.name}</h1>
      <h2>Skills</h2>
      <ul>
        {resume.skills.programming.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h2>FrameWork</h2>
      <ul>
        {resume.skills.frameworks.map((framework) => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>
      <h2>Experience</h2>
      <ul>
        {resume.experience.map((company) => (
          <li key={company}>{company}</li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {resume.education.map((edu) => (
          <li key={edu}>{edu}</li>
        ))}
      </ul>
      {/* Add similar sections for projects and education */}
    </div>
  );
};

export default Resume;

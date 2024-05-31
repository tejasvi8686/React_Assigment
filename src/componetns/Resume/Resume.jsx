import React from "react";
import resume from "../../data/resume";

const Resume = () => {
  return (
    <div className="resume">
      <h1>{resume.name}</h1>
      {resume.skills?.programming?.length > 0 && (
        <>
          <h2>Skills</h2>
          <ul>
            {resume.skills.programming.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      )}
      {resume.skills.frameworks.length > 0 && (
        <>
          <h2>FrameWork</h2>
          <ul >
            {resume.skills.frameworks.map((framework) => (
              <li key={framework}>{framework}</li>
            ))}
          </ul>
        </>
      )}

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
    </div>
  );
};

export default Resume;

import React from 'react';
import Section from './Section';

function Skills() {
  return (
    <Section title="Skills">
      <table>
        <tbody>
          <tr>
            <td><strong>Programming Languages:</strong></td>
            <td>C++, C#, F#, Java, Python, JavaScript, TypeScript, Assembly, Bash, Kotlin</td>
          </tr>
          <tr>
            <td><strong>Frameworks:</strong></td>
            <td>.NET, React Native, FastAPI, Next.js, Node, React, Spring Boot, Django</td>
          </tr>
          <tr>
            <td><strong>Tools:</strong></td>
            <td>Git, Docker, Kubernetes, Ubuntu</td>
          </tr>
          <tr>
            <td><strong>Problem Solving:</strong></td>
            <td>Solved over 2500 competitive programming problems.</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}

export default Skills;

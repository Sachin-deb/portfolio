import React from "react";

function Research() {
  return (
    <div className="research-section">
      <h2>Research</h2>
      <p>
        My research focuses on improving optimization techniques for federated learning, with a specific emphasis on addressing challenges posed by Non-IID (Non-Independent and Identically Distributed) datasets. Below are the key highlights of my work:
      </p>
      <ul className="research-highlights">
        <li>
          Developed a <strong>hybrid optimization algorithm</strong> combining gradient descent and simulated annealing to enhance federated learning performance.
        </li>
        <li>
          Proposed a <strong>maximum likelihood-based client weighting method</strong> to dynamically shuffle client contributions, achieving improved aggregation accuracy.
        </li>
        <li>
          Evaluated the model on datasets such as CIFAR-10 and CIFAR-100, achieving a global model test accuracy of <strong>71%</strong>, significantly outperforming baseline methods like FedAvg (61–65%).
        </li>
        <li>
          Presented an <strong>extended abstract</strong>, available at:{" "}
          <a
            href="https://drive.google.com/file/d/1XQWrXt-5JjRTEPkYbbJ4a5iIqCHRif4E/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Extended Abstract
          </a>
        </li>
      </ul>
      <div className="research-links">
        <h3>Related Work</h3>
        <ul>
          <li>
            <a
              href="https://github.com/Sachin-deb/Federated-Learning-MOONLiHood"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>{" "}
            - Codebase for hybrid optimization methods.
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1XQWrXt-5JjRTEPkYbbJ4a5iIqCHRif4E/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Extended Abstract
            </a>{" "}
            - Detailed write-up of the research work.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Research;

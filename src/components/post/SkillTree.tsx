import React, { useState, useEffect } from "react";
import Image from 'next/image'; // Import Image from Next.js

// Refined skills for the job market, excluding the "Backend & Frameworks" category
const skills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  "Web Technologies": ["React.js", "Angular", "Vue.js", "Node.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Git", "Terraform", "Jenkins"],
};

const skillIconURLs: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  "Vue.js": "https://www.svgrepo.com/show/354528/vue.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  AWS: "https://www.svgrepo.com/show/331300/aws.svg",
  Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  Terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
};

const SkillTree = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black-700 text-white-200 font-sans px-6 py-10 space-y-16">
      {Object.entries(skills).map(([category, skillList], index) => (
        <div
          key={category}
          className={`flex flex-col items-center space-y-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          style={{ transitionDelay: `${index * 900}ms` }}
        >
          <h2 className="text-3xl font-bold text-gray-200 border-b border-gray-600 pb-2 text-center">
            {category}
          </h2>

          <div className={`flex flex-wrap justify-center gap-6 transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
            {skillList.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div
                  className={`w-16 h-16 bg-gray-800 border-2 border-gray-400 text-gray-200 flex items-center justify-center hexagon transition-all`}
                >
                  {skillIconURLs[skill] ? (
                    <Image
                      src={skillIconURLs[skill]}
                      alt={skill}
                      width={32} // Adjusted to match your image size needs
                      height={32} // Adjusted to match your image size needs
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs font-semibold">💡</span>
                  )}
                </div>
                <div className="text-xs text-center">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Hexagon Style */}
      <style jsx>{`
        .hexagon {
          clip-path: polygon(
            25% 5.77%,
            75% 5.77%,
            100% 50%,
            75% 94.23%,
            25% 94.23%,
            0% 50%
          );
          
        }

        .hexagon:hover {
          background-color: #3498db; /* Change background color on hover */
          border-color: #2980b9; /* Change border color on hover */
          box-shadow: 0 0 15px 5px rgba(52, 152, 219, 0.7); /* Glowing effect */
          transform: scale(1.5); /* Scale the hexagon to make it expand */
        }
      `}</style>
    </div>
  );
};

export default SkillTree;

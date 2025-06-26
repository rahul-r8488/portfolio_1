
const Resume = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "Java", "TypeScript", "C", "C++", "PHP", "HTML", "CSS", "SQL", "Oracle SQL"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "Firebase"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["ReactJS", "Tailwind CSS", "Express.js", "Node.js"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "IntelliJ", "Jupyter Notebook", "Postman"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Graphic Era Hill University, Dehradun",
      period: "Aug 2022 – Jun 2026",
      grade: "GPA: 8.09% (current)"
    },
    {
      degree: "12th Grade",
      institution: "Whitehall School",
      period: "2020",
      grade: "Marks: 88%"
    },
    {
      degree: "10th Grade",
      institution: "Whitehall School",
      period: "2018",
      grade: "Marks: 84%"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Resume
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-400 mb-2">{edu.degree}</h4>
                      <p className="text-gray-300 mb-1">{edu.institution}</p>
                      <p className="text-gray-400">{edu.period}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

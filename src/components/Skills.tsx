
const Skills = () => {
  const hardSkills = [
    { name: "HTML", level: 85, icon: "🌐" },
    { name: "CSS", level: 80, icon: "🎨" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "C Language", level: 70, icon: "⚡" },
    { name: "AI Tools (LLMs)", level: 65, icon: "🤖" },
    { name: "Machine Learning", level: 60, icon: "🧠" },
  ];

  const softSkills = [
    { name: "Leadership", icon: "👑" },
    { name: "Communication", icon: "💬" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Problem Solving", icon: "🧩" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuously developing technical and soft skills to excel in AI/ML
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="mr-3">💻</span>
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="mr-3">🌟</span>
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Learning Goals</h4>
              <p className="text-gray-700 text-sm">
                Currently focusing on deepening my understanding of deep learning frameworks, 
                data analysis tools, and advancing my Python programming skills for AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

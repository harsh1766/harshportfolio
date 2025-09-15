
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about AI and ML, constantly learning and growing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                I'm a dedicated second-year B.Tech student specializing in Artificial Intelligence 
                and Machine Learning at my university. My journey in tech is driven by an insatiable 
                curiosity to understand how AI can solve real-world problems and transform industries.
              </p>
              
              <p>
                Beyond academics, I believe in learning through practical experience. I'm currently 
                pursuing internships that involve market analysis, business analysis, and data 
                visualization to gain insights into the business applications of AI/ML technologies.
              </p>
              
              <p>
                My goal is to bridge the gap between theoretical knowledge and practical implementation, 
                constantly updating my skills to stay relevant in this rapidly evolving field.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Team Player</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Quick Learner</span>
              </div>
            </div>
          </div>

          {/* Right Content - Education Stats */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Educational Background</h3>
            
            <div className="space-y-6">
              {/* SSC */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900">Secondary School Certificate (SSC)</h4>
                  <span className="text-2xl font-bold text-purple-600">84.60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{width: '84.6%'}}></div>
                </div>
              </div>

              {/* HSC */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900">Higher Secondary Certificate (HSC)</h4>
                  <span className="text-2xl font-bold text-blue-600">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>

              {/* Current SGPA */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900">Current CGPA</h4>
                  <span className="text-2xl font-bold text-green-600">9.00</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

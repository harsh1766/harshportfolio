
const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gaining practical insights through hands-on experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Experience */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Current Internship Experience
                </h3>
                <p className="text-purple-600 font-semibold">Ongoing</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mt-4 lg:mt-0 w-fit">
                Active Learning
              </div>
            </div>

            <div className="prose prose-lg text-gray-700 mb-6">
              <p>
                Currently pursuing an internship involving market analysis, business analysis, 
                and data visualization to gain real-world insights into the business and data 
                side of AI/ML applications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="font-semibold text-gray-900 mb-2">Market Analysis</h4>
                <p className="text-gray-600 text-sm">
                  Learning to analyze market trends and patterns using data-driven approaches
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Analysis</h4>
                <p className="text-gray-600 text-sm">
                  Understanding business processes and how AI/ML can optimize operations
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-semibold text-gray-900 mb-2">Data Visualization</h4>
                <p className="text-gray-600 text-sm">
                  Creating meaningful visualizations to communicate insights effectively
                </p>
              </div>
            </div>
          </div>

          {/* Learning Process */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              My Learning Process
            </h3>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Research</h4>
                <p className="text-gray-600 text-sm">
                  Studying latest trends and technologies in AI/ML
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Practice</h4>
                <p className="text-gray-600 text-sm">
                  Hands-on coding and implementation of concepts
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Apply</h4>
                <p className="text-gray-600 text-sm">
                  Real-world application through internships and projects
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Improve</h4>
                <p className="text-gray-600 text-sm">
                  Continuous learning and skill refinement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

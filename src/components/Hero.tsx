

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700 mb-4">
                👋 Hello, I'm
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Harsh
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Borse
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Aspiring AIML Engineer | Passionate Learner | Problem Solver
              </h2>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                First-year B.Tech student specializing in Artificial Intelligence and Machine Learning, 
                dedicated to exploring the fascinating world of AI through continuous learning and practical experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3"
                >
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl p-2">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/hGfZJP4y/file-00000000b96061fb85aa2a0b8eb3027f-1.png" 
                    alt="Harsh Borse"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold">AI</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


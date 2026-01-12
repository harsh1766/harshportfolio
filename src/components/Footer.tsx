const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Harsh Borse
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Aspiring AIML Engineer passionate about learning and creating innovative solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a 
              href="mailto:harshborse1809@gmail.com"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              harshborse1809@gmail.com
            </a>
            <a 
              href="tel:9130911367"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              +91 9130911367
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 Harsh Shekhar Borse. Built with passion for AI and ML.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


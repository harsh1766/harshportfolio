import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Download = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger download automatically when component mounts
    const downloadResume = () => {
      try {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = '/Harsh_Borse_Resume.pdf';
        link.download = 'Harsh_Borse_Resume.pdf';
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate('/');
        }, 500);
      } catch (error) {
        console.error('Download failed:', error);
        // Still redirect to home even if download fails
        navigate('/');
      }
    };

    downloadResume();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Downloading resume...</p>
        <p className="text-sm text-gray-500 mt-2">You will be redirected shortly</p>
      </div>
    </div>
  );
};

export default Download;
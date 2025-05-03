import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Maximize, Minimize } from 'lucide-react';

const ImageViewer = ({ originalImage, enhancedImage }) => {
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 3));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleComparison = () => {
    setShowComparison(!showComparison);
  };

  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      <div className="absolute top-2 right-2 bg-white/80 rounded-lg shadow-md p-1 z-10">
        <div className="flex space-x-1">
          <button 
            onClick={zoomIn} 
            className="p-1 rounded hover:bg-gray-200 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button 
            onClick={zoomOut} 
            className="p-1 rounded hover:bg-gray-200 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button 
            onClick={toggleFullscreen} 
            className="p-1 rounded hover:bg-gray-200 transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={toggleComparison}
          className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors"
        >
          {showComparison ? "View Enhanced" : "Compare Original"}
        </button>
      </div>
      
      <div className="relative overflow-hidden" style={{ height: isFullscreen ? '100vh' : '500px' }}>
        <div 
          className="absolute inset-0 cursor-move transition-transform duration-200 bg-black flex items-center justify-center"
          style={{ transform: `scale(${scale})` }}
        >
          {showComparison ? (
            <div className="w-full h-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={originalImage} alt="Original mammography" className="max-h-full max-w-full" />
              </div>
              <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs">
                Original
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={enhancedImage} alt="Enhanced mammography" className="max-h-full max-w-full" />
              </div>
              <div className="absolute top-2 left-2 bg-teal-600 text-white px-3 py-1 rounded-full text-xs">
                Enhanced
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;

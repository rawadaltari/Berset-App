import React, { useState } from 'react';
import { Upload, X, Image } from 'lucide-react';

const ImageUploader = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    if (!file.type.match('image.*')) {
      alert('الرجاء رفع ملف صورة');
      return;
    }

    setSelectedFile(file);
    onImageUpload(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        setPreview(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!preview ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
            isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-400'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput')?.click()}
        >
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileInput}
            accept="image/*"
          />
          <Upload className="h-12 w-12 mx-auto mb-4 text-blue-800" />
          <h3 className="text-lg font-medium text-gray-700 mb-1">رفع صورة الثدي الشعاعية</h3>
          <p className="text-sm text-gray-500 mb-4">
            اسحب وأفلت الصورة هنا، أو انقر لاختيار ملف
          </p>
          <p className="text-xs text-gray-400">
            الصيغ المدعومة: JPEG, PNG, DICOM
          </p>
        </div>
      ) : (
        <div className="relative border rounded-lg overflow-hidden bg-black">
          <button
            onClick={clearSelection}
            className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full z-10 hover:bg-red-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative">
            <img
              src={preview}
              alt="معاينة الصورة الشعاعية"
              className="w-full object-contain max-h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm truncate">
                {selectedFile?.name} ({Math.round(selectedFile?.size / 1024)} كيلوبايت)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PDFView = () => {
  const navigate = useNavigate();

  const handleExtractData = () => {
    navigate('/pdf-data');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">PDF Viewer</h2>
        <embed src="example.pdf" width="500" height="600" />
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleExtractData}>
          Extract Data
        </button>
      </div>
    </div>
  );
};

export default PDFView;

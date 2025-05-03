import React, { useState } from 'react';
import { User, Calendar } from 'lucide-react';

const PatientInfo = ({ onSave }) => {
  const [patient, setPatient] = useState({
    id: crypto.randomUUID(),
    name: '',
    age: 0,
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(patient);
  };

  return (
    <div className="bg-pink-200 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">معلومات المريضة</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              اسم المريضة
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={patient.name}
                onChange={handleChange}
                className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="أدخل اسم المريضة"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              العمر
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={patient.age || ''}
              onChange={handleChange}
              min="0"
              max="120"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              تاريخ الفحص
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                id="date"
                name="date"
                value={patient.date}
                onChange={handleChange}
                className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            حفظ معلومات المريضة
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientInfo;

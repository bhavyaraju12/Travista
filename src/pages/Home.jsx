import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const SelectionPopup = ({ onSelect, onClose }) => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const options = [
    { id: 'solo', label: 'Solo', icon: '👤', description: 'Perfect for individual travelers' },
    { id: 'couples', label: 'Couples', icon: '💑', description: 'Ideal for romantic getaways' },
    { id: 'friends', label: 'Friends', icon: '👥', description: 'Great for group adventures' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', description: 'Suitable for family trips' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full m-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome to Travista!</h2>
          <p className="text-gray-600 mt-2">Please select your travel group type</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <button
              key={option.id}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                hoveredOption === option.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
              }`}
              onMouseEnter={() => setHoveredOption(option.id)}
              onMouseLeave={() => setHoveredOption(null)}
              onClick={() => onSelect(option.id)}
            >
              <div className="text-3xl mb-2">{option.icon}</div>
              <div className="font-medium text-gray-900">{option.label}</div>
              <div className="text-sm text-gray-500 mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home({token}) {
    let navigate = useNavigate();
    const [showTypeSelection, setShowTypeSelection] = useState(true); // Show popup by default

    function handleLogout() {
        sessionStorage.removeItem('token')
        navigate('./login')
    }

    const handleSelectionComplete = (selectedType) => {
        setShowTypeSelection(false);
        // You can save the selection to your backend here if needed
        console.log('Selected type:', selectedType);
    };

    return (
        <div>
            Welcome back <button onClick={handleLogout}>Logout</button>
            
            {showTypeSelection && (
                <SelectionPopup 
                    onSelect={handleSelectionComplete}
                    onClose={() => setShowTypeSelection(false)}
                />
            )}
        </div>
    )
}
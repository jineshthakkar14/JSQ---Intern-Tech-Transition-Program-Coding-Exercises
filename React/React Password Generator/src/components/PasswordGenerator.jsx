import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Password Generator</h1>

        {/* Password Display */}
        <div className="bg-gray-200 p-3 mb-6 rounded-md text-center text-lg font-mono">
          {password || "Your password will appear here"}
        </div>

        {/*Password Length slider*/}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Password Length: {length}</label>
          <input
            type="range"
            className="w-full"
            value={length}
            min="1"
            max="20"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

      </div>
    </div>
  );
};

export default PasswordGenerator;

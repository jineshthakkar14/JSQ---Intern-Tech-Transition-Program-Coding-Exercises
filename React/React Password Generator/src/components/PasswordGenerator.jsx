import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(1);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  //Generate Password logic
  const generatePassword = () => {
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      alert('Please select at least one character type!');
      return;
    }

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:",.<>?/';

    let characters = '';
    if (includeLowercase) characters += lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopyMessage('Copied!'); // Set the copy message
    setTimeout(() => setCopyMessage(''), 2000); // Clear the message after 2 seconds
  };

  //Password strength logic
  const evaluatePasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (password.length >= 16) strength++;

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+[\]{}|;:",.<>?/]/.test(password);

    const characterVariety = [hasLowercase, hasUppercase, hasNumbers, hasSymbols].filter(Boolean).length;

    if (characterVariety === 1) strength++;
    if (characterVariety === 2) strength += 2;
    if (characterVariety === 3) strength += 3;
    if (characterVariety === 4) strength += 4;

    if (strength <= 2) {
        setPasswordStrength('Weak');
    } else if (strength <= 4) {
        setPasswordStrength('Medium');
    } else if (strength <= 6) {
        setPasswordStrength('Strong');
    } else {
        setPasswordStrength('Very Strong');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Password Generator</h1>

        {/* Password Display */}
        <div className="flex items-center justify-between bg-gray-200 p-3 mb-2 rounded-md text-lg font-mono">
            <span className="mr-2">{password || 'Your password will appear here'}</span>
            <FaClipboard
                className="h-6 w-6 cursor-pointer text-gray-600 hover:text-gray-800"
                onClick={copyToClipboard}
            />
        </div>


        {/* Copy Message Display */}
        {copyMessage && <div className="text-green-500 text-center mb-2">{copyMessage}</div>}

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

        {/* Checkbox Options */}
        <div className="mb-4">
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="mr-2"
            />
            Include Uppercase Letters
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="mr-2"
            />
            Include Lowercase Letters
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>

        {/* Password Strength Display */}
        <div className={`text-center mb-4 ${passwordStrength === 'Very Strong' ? 'text-blue-600' : passwordStrength === 'Strong' ? 'text-green-500' : passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
          Password Strength: {passwordStrength || 'N/A'}
        </div>

        {/* Generate Password Button */}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          onClick={generatePassword}
        >
          Generate Password
        </button>


      </div>
    </div>
  );
};

export default PasswordGenerator;

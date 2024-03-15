"use client";
import { useState } from 'react';

const APICallExam = ({ list }) => {
  const [secretCode, setSecretCode] = useState(null);

  const handleClick = async () => {
    try {
      const passcode = "ehen2rfow";
      const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`);
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Secret Code
      </button>
      {secretCode && (
        <p className="mt-4">The secret code is: {secretCode}</p>
      )}
    </div>
  );
};

export default APICallExam;

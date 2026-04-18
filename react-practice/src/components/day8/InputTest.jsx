import React, { useState } from "react";

const InputTest = () => {
  const [inputData, setInputData] = useState("");

  return (
    <div>
      <input
        className="border border-green-600 rounded"
        placeholder="Search Users"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        type="search"
      />
      <h1>{inputData.trim()}</h1>
    </div>
  );
};

export default InputTest;

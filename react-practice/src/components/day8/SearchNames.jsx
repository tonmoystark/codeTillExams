import React, { useState } from "react";

let namesArr = ["Tonmoy", "Johnny", "Sony", "Mahmud", "Rakib", "Tanvir"];

const SearchNames = () => {
  const [inputData, setInputData] = useState("");
  let filterNames = namesArr.filter((name) =>
    name.toLowerCase().includes(inputData.trim().toLowerCase()),
  );
  return (
    <div>
      <h1>Search names</h1>
      <input
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        type="search"
        placeholder="Search here"
        className="border rounded"
      />
      {filterNames.length !== 0 ? (
        filterNames.map((name, idx) => <h1 key={idx}>{name.toLowerCase()}</h1>)
      ) : (
        <h1>'No data found'</h1>
      )}
    </div>
  );
};

export default SearchNames;

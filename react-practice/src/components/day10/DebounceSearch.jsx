import axios from "axios";
import React, { useEffect, useState } from "react";

const DebounceSearch = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [debounceVal, setDebounceVal] = useState('')

  async function fetchData() {
    try {
      let data = await axios.get("https://jsonplaceholder.typicode.com/users");
      setAllUsers(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    
    let debounce = setTimeout(() => {
        setDebounceVal(inputVal)
    }, 300);
    return () => clearTimeout(debounce)
  }, [inputVal]);

  if (loading) {
    return (
      <div>
        <input type="search" name="" id="" />
        <h1>Loading data</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <input type="search" name="" id="" />
        <h1>{error}</h1>
      </div>
    );
  }

  let filterUser = allUsers.filter((user) => user.name.toLowerCase().includes(debounceVal.toLowerCase()))

  return (
    <div>
      <input
        type="search"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        name=""
        id=""
      />
      {filterUser.length !== 0
        ? filterUser.map((user) => <h1 key={user.id}>{user.name}</h1>)
        : "No user found"}
    </div>
  );
};

export default DebounceSearch;

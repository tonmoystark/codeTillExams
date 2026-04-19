import axios from "axios";
import React, { useEffect, useState } from "react";

const LearnAxios = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setAllUsers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }


  
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Data is Loading</h1>
      </div>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {allUsers.length !== 0
        ? allUsers.map((user) => <h1 key={user.id}>{user.name}</h1>)
        : ""}
    </div>
  );
};

export default LearnAxios;

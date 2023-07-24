import React, { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await resp.json();
      setUser(json);

      console.log(json);
    };
    fetchUsers();
  }, []);

  let renderUsers = user.map((person) => {
    return (
      <div key={person.id}>
        <p>{person.name}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>UserList</h1>
      <p>{renderUsers}</p>
    </div>
  );
}

import React, { useEffect, useState } from "react";

function Fetch2() {
  const [data, setData] = useState("");
  const [error, setErr] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.ypicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network Error: could not fetch");
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : data ? (
        <ul>
          {data.map((posts) => (
            <li key={posts.id}>
              <h3>{posts.name}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Fetch2;

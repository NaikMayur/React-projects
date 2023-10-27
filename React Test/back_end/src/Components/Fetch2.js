import React, { useEffect, useState } from "react";

function Fetch2() {
  const [data, setData] = useState("");
  const [error, setErr] = useState(null);

  useEffect(() => {
    fetch("https://sonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);

  console.log(data);

  return (
    <>
      <ul>
        {error ? (
          <p>Error: {error}</p>
        ) : data ? (
          <div>
            {data.map((posts) => (
              <li key={posts.id}>
                <h3>{posts.name}</h3>
              </li>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default Fetch2;

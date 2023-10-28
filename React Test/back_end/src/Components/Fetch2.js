import React, { useEffect, useState } from "react";
import axios from "axios";
function Fetch2() {
  const [data, setData] = useState("");
  const [error, setErr] = useState(null);

  useEffect(() => {
    const obj = {
      id: 1,
      title: "Sample Title",
      body: "Sample body content",
    };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log("data:", obj);
        console.log("data sent :", res);
      })
      .catch((err) => {
        setErr(`${err.message}`);
      });

    // axios.post("https://jsonplaceholder.typicode.com/users", obj, {
    //   headers: { "Content-Type": "application/json" },
    // });
  }, []);

  return (
    <>
      <ul>
        {error ? (
          <p>Error: {error}</p>
        ) : data ? (
          <div>
            <p>Data sent: {data.title}</p>
            <br />
            {/* {data.map((posts) => (
              <li key={posts.id}>
                <i>
                  <h4>{posts.name}</h4>
                </i>
              </li>
            ))} */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default Fetch2;

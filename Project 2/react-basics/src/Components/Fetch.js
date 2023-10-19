import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = "https://dummyjson.com/posts";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Check the URL properly!!");
        }
        return res.json();
      })
      .then((res) => {
        setData(res.posts); // Extract the "posts" array from the response
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <p>
        Today is <span className="date">October 25, 2023</span>.
      </p>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;

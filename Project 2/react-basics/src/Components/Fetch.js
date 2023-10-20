import React, { useEffect, useState } from "react";

function Fetch() {
  const postData = {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 9,
    tags: ["history", "american", "crime"],
    reactions: 2,
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = "https://dummyjson.com/posts";

  // useEffect(() => {
  fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((res) => {
      setTimeout(() => {
        setData(res.posts);
      }, 5000); // Extract the "posts" array from the response
    })
    .catch((err) => {
      setError(err);
    });
  // }, []);
  const date = new Date();
  const datee = date.toDateString();
  return (
    <div>
      <p>
        Today is <span className="date">{datee}</span>.
      </p>
      <ul>
        {error ? (
          <p>Error :{error}</p>
        ) : (
          <div>
            {data ? (
              <li>
                {data.map((post) => (
                  <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </li>
                ))}
              </li>
            ) : (
              <p>Loading....</p>
            )}
          </div>
        )}
      </ul>
    </div>
  );
}

export default Fetch;

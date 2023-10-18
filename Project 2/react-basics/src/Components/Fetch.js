import React, { useEffect, useState } from "react";
function Fetch(props) {
  const url = "https://api.github.com/users/NaikMayur";
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchApi = new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Check the url properly!!");
          }
          return res.json();
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          setError(err.message);
          reject(err);
        });
    });
    fetchApi
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        <li>{props.userName}</li>
        <li>{data.login}</li>
      </ul>
    </div>
  );
}

export default Fetch;

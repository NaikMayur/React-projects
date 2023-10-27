import React, { useEffect, useState } from "react";

function Fetch2() {
  const [data, setData] = useState("");
  const [err, setErr] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network Error: ");
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(data);
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* {data ? (
        <ul>
          <li>{data}</li>
        </ul>
      ) : (
        <h2>{err}</h2>
      )} */}
    </>
  );
}

export default Fetch2;

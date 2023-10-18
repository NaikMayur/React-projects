import React, { useEffect, useState } from "react";
function Fetch() {
  const [data, setData] = useState("");
  const url = "https://api.github.com/users/NaikMayur";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div>
      <ul>
        <li>{data.login && <li>{data}</li>}</li>
      </ul>
    </div>
  );
}

export default Fetch;

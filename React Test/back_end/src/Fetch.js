import React, { useState } from "react";
const [data, setData] = useState(null);
function Fetch() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setData(res);
    });
  console.log(data);
  return (
    <div>
      <li>{data}</li>
    </div>
  );
}

export default Fetch;

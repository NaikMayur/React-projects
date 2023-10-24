import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setData(res);
    //   });

    const data = {
      id: 1,
      title: "Sample Title",
      body: "Sample body content",
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Correct content type for JSON
      },
      body: JSON.stringify(data), // Send the JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Data sent:", data); // Log the data you sent
        console.log("Response Data:", responseData); // Log the response data
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <li>
        {data.map((posts) => (
          <ul>
            <li key={posts.id}>
              <li>{posts.name}</li>
              <li>{posts.username}</li>
            </li>
          </ul>
        ))}
      </li>
    </div>
  );
}

export default Fetch;

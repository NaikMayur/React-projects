import { useEffect, useState } from "react";
import "./App.css";
import Fetch from "./Components/Fetch";
import NavBar from "./Components/NavBar";

export default function MyApp() {
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Welcome to my app</h1>
      <NavBar />
      <Fetch userName={data} error={error} just="mayur" />
    </div>
  );
}

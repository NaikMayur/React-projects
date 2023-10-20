import { useEffect, useState } from "react";
import "./App.css";
import Fetch from "./Components/Fetch";
import NavBar from "./Components/NavBar";
import Test2 from "./Components/Test2";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Test from "./Components/Test";
export default function MyApp() {
  const url = "https://api.github.com/users/NaikMayur";
  const [data, setData] = useState(null); // Initialize as null
  const [error, setError] = useState(null);

  const fetchData = () => {
    const fetchApi = new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Check the URL properly!!");
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
        setData(res); // Set the data to the state here
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Router>
        <NavBar fetchData={fetchData} />
        <h1>Welcome to my app</h1>
        {/* <button onClick={fetchData}>Fetch Data</button> */}
        {data && !error && (
          <div>
            <img src={data.avatar_url} alt="Mayur" />
            <ul>
              <li>{data.login}</li>
            </ul>
          </div>
        )}
        {error && <p>Error: {error}</p>}
        <div>{/* <Fetch /> */}</div>
        <Link to={"/fetch"}>GO TO FETCH</Link>
        <Routes>
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </Router>
    </>
  );
}

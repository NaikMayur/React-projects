import { useEffect, useState } from "react";
import "./App.css";
import Fetch from "./Components/Fetch";
import NavBar from "./Components/NavBar";
import Test2 from "./Components/Test2";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Test from "./Components/Test";
import Form from "./Components/Form";
import Form2 from "./Components/Form2";
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
        <Form />
        {/* <button onClick={fetchData}>Fetch Data</button> */}
        {data && !error && (
          <div>
            <img
              className="d-block mx-auto  rounded-circle"
              style={{ height: "200px" }}
              src={data.avatar_url}
              alt="Mayur"
            />
            <ul>
              <li>{data.login}</li>
            </ul>
          </div>
        )}
        {error && <p>Error: {error}</p>}
        <div>{/* <Fetch /> */}</div>
        <Link to={"/fetch"}>
          <li className="mt-3 bg-dark text-warning">GO TO FETCH</li>
        </Link>
        <br />
        <Link to={"/test2"}>
          <li className="pt-2 bg-warning-subtle text-danger ">GO TO test2</li>
        </Link>
        <Routes>
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
        <Form2 />
      </Router>
    </>
  );
}

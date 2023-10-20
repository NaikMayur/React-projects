import React from "react";

function NavBar({ fetchData }) {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default behavior
    fetchData(); // Call the fetchData function
  };
  return (
    <>
      <div className="mt-2 mr-5">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/"
              id="btn1"
              onClick={handleClick}
            >
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;

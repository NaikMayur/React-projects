import React, { useState } from "react";

function Form2() {
  const [data, setData] = useState({ name: "", password: "" });

  const handleValue = (e) => {
    console.log(data.name);
    const { name, value } = e.target;
    console.log(e.target.name, e.target.value);
    setData({ ...data, [name]: value });
    console.log(`${name}:${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={data.name}
            onChange={handleValue}
          />
          {/* {console.log(data.name)} */}
          <br />
          <label htmlFor="pass">Password: </label>
          <input
            className="form-control"
            id="pass"
            name="password"
            value={data.password}
            onChange={handleValue}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form2;

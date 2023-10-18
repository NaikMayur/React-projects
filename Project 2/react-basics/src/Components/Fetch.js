function Fetch({ userName, error }) {
  return (
    <div>
      {/* {error && <p>Error: {error}</p>} */}
      <div>
        <img src={userName.avatar_url} alt="Mayur" />
      </div>
      <ul>
        <li>{userName.login}</li>
      </ul>
    </div>
  );
}

export default Fetch;

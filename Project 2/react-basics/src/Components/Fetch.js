function Fetch({ userName, error }) {
  return (
    <div>
      {userName && !error && (
        <div>
          <img src={userName.avatar_url} alt="Mayur" />
          <ul>
            <li>{userName.login}</li>
          </ul>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Fetch;

import "./App.css";
import Fetch from "./Components/Fetch";
function App() {
  return (
    <div>
      <button>Hello</button>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <App />
      <Fetch />
    </div>
  );
}

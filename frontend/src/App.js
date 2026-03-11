import logo from "./logo.svg";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./login";

function App() {
  console.log(process.env.react_app_google_key);
  return (
    <GoogleOAuthProvider clientId={process.env.react_app_google_key}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Login />
    </GoogleOAuthProvider>
  );
}

export default App;

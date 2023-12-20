// React Bootstrap Installed
// React-Router-Dom Installed
// React-Icon Installed

// import "./assets/Style.css";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from "./components/header/MainNavBar";
import Nav from "./components/header/Nav";
function App() {
  return (
    <div>
      <Nav />
      <MainNavBar />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;

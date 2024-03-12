import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Foooter from "./Components/Footer";
import Welcome from "./Components/Welcome";
import AllTheBooks from "./Components/AllTheBooks";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <Foooter />
    </div>
  );
}

export default App;

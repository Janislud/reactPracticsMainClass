import { Outlet } from "react-router-dom";
import { Header } from "./layouts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

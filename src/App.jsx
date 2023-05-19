import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./component/ShareLayout/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./component/ShareLayout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <hr />
      <div className="md:min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

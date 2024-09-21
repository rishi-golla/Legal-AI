// import './App.css';

import Landing from "./components/landing";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App bg-primary h-full w-screen py-6 px-10">
      <header className="App-header text-black w-full ">
          <Navbar/>
          <Landing/>
      </header>
    </div>
  );
}

export default App;

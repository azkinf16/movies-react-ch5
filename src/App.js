// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import DetailMovie from "./pages/DetailMovie";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<DetailMovie />}/> 
      </Routes>
    </div>
  );
}

export default App;

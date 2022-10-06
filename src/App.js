// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";

import DetailMovie from "./pages/DetailMovie";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<DetailMovie />}/>
        <Route path="/category/:cat" element={<Category />}/>
        <Route path="/search/:search" element={<Search />}/>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Create from "./Pages/Create/Create";
import Recipe from "./Pages/Recipe/Recipe";
import Search from "./Pages/Search/Search";
import Navbar from "./Componnets/Navbar";
import Themeselector from "./Componnets/Themeselector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <Themeselector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Recipe/:id" element={<Recipe />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

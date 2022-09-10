import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Home";
import { NotFound404 } from "./Components/Pages/NotFound404/NotFound404";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

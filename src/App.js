import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./styles.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:movieId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

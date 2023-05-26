import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Home from "./routes/Home/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header title="NeatFlix" link={["Home", "About", "Links"]} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

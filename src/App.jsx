import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Homepage } from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

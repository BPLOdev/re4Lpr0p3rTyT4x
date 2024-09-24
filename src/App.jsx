import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Layout from "./components/ui/layout";
import AssessmentRoll from "./pages/assessment_roll";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="" element={<AssessmentRoll />} />
      </Route>
    </Routes>
  );
}

export default App;

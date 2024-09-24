import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Layout from "./components/ui/layout";
import AssessmentRoll from "./pages/assessment_roll";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/components/ui/theme/createtheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<AssessmentRoll />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

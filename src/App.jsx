import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<CountryPage />} />
      </Route>
    </Routes>
  )
}

export default App

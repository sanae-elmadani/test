import "./App.css";

import {
  WelcomePage,
  AnonymSearchResult,
  MonCompte,
  AreYouALawyer,
  Error,
} from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/moncompte" element={<MonCompte />} />
        <Route path="/areyoualawyer" element={<AreYouALawyer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

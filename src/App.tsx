import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Page from "./routes/Page";
import { Reset } from "styled-reset";
import Login from "./routes/Login";
import SideNav from "./Component/SideNav";
import Header from "./Component/Header";
import Router from "./Router";
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;

import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Calculate from "./components/Tabs/Calculate";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
interface Money {
  money: {};
  loading: boolean;
  error: string | null;
}
interface State {
  state?: Money;
}
function App() {
  const moneyState: State = useSelector((state) => state);
  console.log(moneyState.state.loading, "app");

  return (
    <BrowserRouter>
      <Home />
      {!moneyState.state.loading ? (
        <Routes>
          <Route path="/tabs">
            <Route path="/tabs/usd" element={<Calculate currency={"USD"} />} />
            <Route path="/tabs/eur" element={<Calculate currency={"EUR"} />} />
            <Route path="/tabs/pln" element={<Calculate currency={"PLN"} />} />
          </Route>
          <Route path="*" element={<Navigate to="/tabs/usd" replace />} />
        </Routes>
      ) : (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;

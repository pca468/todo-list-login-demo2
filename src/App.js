import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import React, { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import api from "./utils/api";

function App() {
  const [user, setUser] = useState(null)
  const getUser = async () => {
    try{ // sessionStorage에 있는 token값 불러오기
      const token = sessionStorage.getItem("token");
      const response = api.get("/api") // 어디로 보내줘야 할지 backend 작업 필요
    }catch(error) {

    }
  }
  return (
    // todoPage는 유저 토큰값이 있는 사람에게만 열릴 수 있도록 보호할 수 있는 코드(private Route)
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute user = {user}>
            <TodoPage />
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

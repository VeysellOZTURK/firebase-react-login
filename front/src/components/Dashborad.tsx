import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, password } = location.state || {};

  if (!username || !password) {
    // Eğer kullanıcı giriş yapmadan dashboard'a gelmeye çalışırsa giriş sayfasına yönlendir
    navigate("/");
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Kullanıcı Adı: {username}</p>
      <p>Şifre: {password}</p>
      <button onClick={() => navigate("/")}>Çıkış Yap</button>
    </div>
  );
};

export default Dashboard;

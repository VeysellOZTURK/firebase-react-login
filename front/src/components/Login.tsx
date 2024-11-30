import React, { useState } from 'react';
import axios from 'axios';
import { LoginData } from '../types';
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({ username: '', password: '' });
  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      alert('Giriş başarılı!');
      localStorage.setItem('token', response.data.token);
      navigate("/dashboard", { state: { username: formData.username, password: formData.password } });       
    } catch (error: any) {
      alert(`Giriş başarısız: ${error.response?.data?.message || 'Bilinmeyen bir hata oluştu.'}`);
    }
  };

  return (
    <div>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;

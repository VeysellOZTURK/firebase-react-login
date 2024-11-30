import React, { useState } from 'react';
import axios from 'axios';
import { RegisterData } from '../types';

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', formData);
      alert('Kayıt başarılı!');
    } catch (error: any) {
      alert(`Kayıt başarısız: ${error.response?.data?.message || 'Bilinmeyen bir hata oluştu.'}`);
    }
  };

  return (
    <div>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default Register;

import { useState } from 'react';
import Display from './Display';

export default function Login() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [userData, setUserData] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await res.json();
      setUserData(data);

    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // If user data exists, show Display page
  if (userData) return <Display user={userData} />;

  // Otherwise show the login/register form
  


return (
  <form onSubmit={handleSubmit}>
    <h2>Register User</h2>
    <input
      name="username"
      placeholder="Username"
      value={form.username}
      onChange={handleChange}
      required
    />
    <input
      name="email"
      placeholder="Email"
      value={form.email}
      onChange={handleChange}
      required
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      value={form.password}
      onChange={handleChange}
      required
    />
    <button type="submit">Submit</button>
  </form>
);
}
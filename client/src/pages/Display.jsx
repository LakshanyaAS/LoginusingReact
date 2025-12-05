export default function Display({ user }) {
  return (
    <div className="display-card">
      <h1>Hi {user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Hashed Password: {user.password}</p>
    </div>
  );
}

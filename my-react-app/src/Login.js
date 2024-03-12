// src/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextInput, Button } from 'carbon-components-react';
import bcrypt from 'bcrypt';

const Login = () => {
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync('bawbootcamp', 10);
    if (bcrypt.compareSync(password, hashedPassword)) {
      history.push('/home');
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="password"
          labelText="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;

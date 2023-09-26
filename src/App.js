import { React } from "react";
import Login from './components/login/Login.js';
import './components/login/Login.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

// continues below (1)
// continues from above (1)
export default function App() {
  const [login, setLogin] = useState([]);
  const [error, setError] = useState(null);

// continues below (2)
// continues from above (2)
useEffect(() => {
  axios("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setLogin(response.data);
      setError(null);
    })
    .catch(setError);

  /* Using Fetch
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((response) => {
      setContacts(response);
      setError(null);
    })
    .catch(setError);
  */
}, []);

// continues below (3)
// continues from above (3)

if (error) return <p>An error occurred</p>

return (
<div className="App">
  {login.map(({ id, name, email, company }) => (
    <Login
      key={id}
      name={name}
      email={email}
      tagline={company.catchPhrase}
    />
  ))}
</div>
);
}


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/forms/Login';
import Home from './pages/Home';
// import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path="*" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
// const Client = new ApolloClient({
//   uri: "https://rickandmortyapi.com/graphql",
//   // uri: "https://jsonplaceholder.typicode.com/users",
//   cache: new InMemoryCache(),
// })
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ApolloProvider client = {Client}>
//       <App />
//     </ApolloProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

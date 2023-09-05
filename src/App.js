import { React } from "react";
import Login from './components/login/Login.js';
import './components/login/Login.css';

export default function App() {
  return (
    <div className="">
      <div className="container">
        <div className="row">
        <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <Login/>
          </div>
        <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

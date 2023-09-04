import { React } from "react";
import Gallery from './components/Gallery.js';
import './components/Gallery.css';

export default function App() {
  return (
    <div className="front">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Gallery/>
          </div>
          <div className="col-lg-4">
          <Gallery/>
          </div>
          <div className="col-lg-4">
          <Gallery/>
          </div>
        </div>
      </div>
    </div>
  );
}

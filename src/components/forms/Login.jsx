import { React } from "react";
// import  { useState } from 'react';


export default function Login() {
  const Avatar = "https://loremflickr.com/320/240/dog";
  // const [count,setCount] = useState(0);
  // function handleClick(){
    //   setCount(count + 1);
    // }
    // const [data, setData] = useState({});
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //     await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: 'dsd',
    //       body: 'ds',
    //       userId: 2,
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    //   // const result = await response.json();
    //   // console.log(result);
    // }


  return (
    <div className="container">
     <div className="row">
        <div className="col-lg-12">
        <div className="login-wrapper mt-5 p-4 shadow-lg mx-auto">
      <h2>
        <img
          src={Avatar}
          alt=""
          width={64}
          className="rounded-pill img-fluid"
        />{" "}
        Create Your Account
      </h2>
      <form>
            <div className="mb-3">
              <label className="form-label ">
                Full Name
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="title"
                placeholder="John Doe"
                // onChange={e => setData({...data, name: e.target.value})} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label ">
                Email address
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="body"
                placeholder=""
              />
            </div>
            <div className="mb-3">
              <label  className="form-label mb-3">
               Password
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="userId"
                placeholder="Password"          
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary mb-3">
              Submit
              </button>
            </div>
      </form>
      </div>
        </div>
     </div>
    </div>
  );
}

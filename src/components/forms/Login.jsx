import { React, useState } from "react";
import {motion} from "framer-motion"


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

    const [fName,setfName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [allEntry,setAllEntry] = useState([]);
    
    const submitForm = (e) => {
      e.preventDefault()
      
        const NewEntry = {id: new Date().getTime().toString(),fName:fName,email:email, password:password}
        setAllEntry([...allEntry,NewEntry])
        console.log(allEntry);
     
        localStorage.setItem('firstname', JSON.stringify(fName));   ////set data in LocalStorage
        localStorage.setItem('emailid', JSON.stringify(email));
        localStorage.getItem('emailid');
        console.log(localStorage.getItem('emailid'));   ////get data from LocalStorage
        setfName("");
        setEmail("");
        setPassword("");
      }
     
   
  return (
    <div className="container">
     <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="row">
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
      <form action="" onSubmit={submitForm} >
            <div className="mb-3">
              <label className="form-label ">
                Full Name
              </label>
              <input
                type="text"
                className="form-control mb-3"
              value={fName}
                placeholder="John Doe"
                autoComplete="off"
                onChange={(e) => setfName(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label ">
                Email address
              </label>
              <input
                type="email"
                className="form-control mb-3"
                value={email}
                placeholder=""
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)} 
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
                value={password}    
                autoComplete="off"  
                onChange={(e) => setPassword(e.target.value)}   
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary mb-3">
              Submit
              </button>
            </div>
      </form>
      <div>
          {
            allEntry.map((curElem) => {
              const{id,password,email,fName} = curElem;
                return(
                  <div  key={id} className="data">
                    <p> Your Full Name is: {fName}</p>
                    <p>Your Email ID is:  {email}</p>
                    <p>Your Password is:  {password}</p>
                  </div>
                )
            }
            )
          }
      </div>
      </div>
        </div>
     </motion.div>
    </div>
  );
}

import {React,useState} from 'react';

export default function Signup() {

  const [userRegistration, setRegistration] = useState({
    firstName:" ",
    lastName:" ",
    emailId:" ",
    contact:" ",
    password:" ",
  })
  const [Records, setRecords] = useState([])
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistration({...userRegistration,[name]: value})
  }

  const formHandle = (e) => {
    e.preventDefault()
    const newRecord = {...userRegistration, id: new Date().getTime().toString(),}
    setRecords([...Records,newRecord]);
    setRegistration({firstName:"",lastName:"",emailId:"",contact:"",password:""})
  }
  return (
    <>


    <div className='register-form Test'>
      <form action="" onSubmit={formHandle}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            name="firstName"
            id="fName"
            value={userRegistration.firstName}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
          type="text"
            name="lastName"
            id="lName"
            value={userRegistration.lastName}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
          type="email"
            name="emailId"
            id="email"
            value={userRegistration.emailId}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label>Contact</label>
          <input
          type="number"
            name="contact"
            id="contact"
            value={userRegistration.contact}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">password</label>
          <input
          type="password"
            name="password"
            id="password"
            value={userRegistration.password}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <button type='submit'>register</button>
      </form>
      </div>
    <div className='register-form Test'>
      <form action="" onSubmit={formHandle}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            name="firstName"
            id="fName"
            value={userRegistration.firstName}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
          type="text"
            name="lastName"
            id="lName"
            value={userRegistration.lastName}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
          type="email"
            name="emailId"
            id="email"
            value={userRegistration.emailId}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label>Contact</label>
          <input
          type="number"
            name="contact"
            id="contact"
            value={userRegistration.contact}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">password</label>
          <input
          type="password"
            name="password"
            id="password"
            value={userRegistration.password}
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <button type='submit'>register</button>
      </form>
      </div>
      <div>
          {
            Records.map((curElem) => {
              const{id,password,emailId,firstName,lastName,contact} = curElem;
                return(
                  <div  key={id} className="data">
                    <p> Your First Name is: {firstName}</p>
                    <p>Your Last Name is:  {lastName}</p>
                    <p>Your Email ID is:  {emailId}</p>
                    <p>Your Password is:  {password}</p>
                    <p>Your contact is:  {contact}</p>
                  </div>
                )
            }
            )
          }
      </div>
    </>
  );
}

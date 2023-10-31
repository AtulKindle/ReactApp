import { React } from "react";
import {useState, useEffect} from "react";



function Points({name,IsPacked}){
  return(
    <li className="Points">
       {IsPacked ? name + '---Correct' : name}
    </li>
  );
}

export  default function Home() {
  const [users, setUsers] = useState([])
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
    <div>
      <section className="text-primary container">
        <ul>
          <Points
            IsPacked={true}
            name="Atul"
          />
          <Points
          IsPacked={true}
            name="Ayaj"
          />
          <Points
          IsPacked={false}
            name="Aman"
          />
        </ul>
      </section>            
<button>Click me</button>
</div>
<div>  
      <table className="table table-striped">
        <thead>
         <tr>
         <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Phone</th>
         </tr>
        </thead>
        {users.length > 0 && (
        <tbody>
        {users.map(user => (
          <tr>
            <td key={user.id}>{user.name}</td>
            <td>{user.email}</td>
            <td >{user.website}</td>
            <td>{user.phone}</td>
          </tr>
          ))}
        </tbody>
        )}
      </table>
    </div>
    </>
  );
 }
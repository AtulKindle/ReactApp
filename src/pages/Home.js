import { React } from "react";



function Points({name,IsPacked}){
  return(
    <li className="Points">
       {IsPacked ? name + '---Correct' : name}
    </li>
  );
}



export default function Home() {
  function handleClick(){
    alert('Hello There!');
  }
  return (
    <div className="">
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
<button onClick={handleClick}>Click me</button>
    </div>
  );
}

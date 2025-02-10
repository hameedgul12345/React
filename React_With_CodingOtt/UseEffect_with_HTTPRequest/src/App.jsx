// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [user,setUser]=useState([])
//   const [loading, setLoading] = useState(true);
//   const fetchAPI = () => {
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => response.json())
//    .then((data)=>{
//     setUser(data)
//     setLoading(false)
//    })
//    .catch((err)=>{console.log(err)})
//   };
//   return (
//     <>
//       <button onClick={fetchAPI}>Clickk Me</button>
//     {loading?'loading':user.map((item,index)=>(
//     <h1 key={index}>{item.name}</h1>
//     ))}
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]); // State to store fetched data
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     fetch("https://fakerapi.it/api/v1/persons")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);  // Store data in state
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []); // Empty dependency array = runs once when component mounts

//   return (
//     <div>
//       <h1>User List</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {users.map((user,index) => (
//             <li key={index}>{user.name} - {user.email}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]); // Store fetched users
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/persons") // Fetch users
      .then((response) => response.json()) 
      .then((data) => {
        if (data && data.data) {
          setUsers(data.data);  // Extract `data` property
        } else {
          setUsers([]); // Set empty array if no valid data
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.firstname} {user.lastname} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

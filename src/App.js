// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// function App() {
//   const [loading, setloading] =useState(false);
//   const [posts, setPosts]=useState([]);
//   const [searchTitle, setSearchTitle]=useState(" ");
//   useEffect(() => {
//     const loadPosts = async() =>{
//       setloading(true);
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(response.data);
//       setloading(false);
//     };
//     loadPosts();

//   },[]);

//   return (
//     <div className="App">
//       <h3>Search detail</h3>
//       <input
//         style={{ width: "30%", height: "25px" }}
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => setSearchTitle(e.target.value)}
//       />
//       {loading ? (
//         <h4>Loading ...</h4>
//       ) : (
//         posts
//           .filter((value) => {
//             if (searchTitle === "") {
//               return value;
//             } else if (
//               value.title.toLowerCase().includes(searchTitle.toLowerCase())
//             ) {
//               return value;
//             }
//           })
//           .map((item) => <h5 key={item.id}>{item.title}</h5>)
//       )}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, {useState, useEffect} from 'react';
// import './App.css';

// function App() {
   
//    const [arrData, setArrData] = useState([
//     {
//       "id":1,
//       "na":"Ram",
//       "rollNo":2,
//       "phoneNo":"765656565"
//     },
//     {
//       "id":2,
//       "name":"Sham",
//       "rollNo":3,
//       "phoneNo":"78676767676",

//     },
//     {
//       "id":3,
//       "name":"Pari",
//       "rollNo":4,
//       "phoneNo":"65656656565"
//     },
//     {
//     "id":5,
//     "name":"Nikita",
//     "rollNo":5,
//     "phoneNo":"6565445454"
//     },
//     {
//       "id":1,
//       "name":"Ram",
//       "rollNo":2,
//       "phoneNo":"765656565"
//     },
//     {
//       "id":2,
//       "name":"Sham",
//       "rollNo":3,
//       "phoneNo":"78676767676",

//     },
//     {
//       "id":3,
//       "name":"Pari",
//       "rollNo":4,
//       "phoneNo":"65656656565"
//     },
//     {
//     "id":5,
//     "name":"Nikita",
//     "rollNo":5,
//     "phoneNo":"6565445454"
//     },
//     {
//       "id":1,
//       "name":"Ram",
//       "rollNo":2,
//       "phoneNo":"765656565"
//     },
//     {
//       "id":2,
//       "name":"Sham",
//       "rollNo":3,
//       "phoneNo":"78676767676",

//     },
//     {
//       "id":3,
//       "name":"Pari",
//       "rollNo":4,
//       "phoneNo":"65656656565"
//     },
//     {
//     "id":5,
//     "name":"Nikita",
//     "rollNo":5,
//     "phoneNo":"6565445454"
//     }
//    ])

//   function onChangeHandle(e){ 
//     console.log("e.target.value", e.target.value);
//     if(e.target.value == '') {
//       window.location.reload(true)
//       const tempArr = arrData;
//       setArrData(tempArr)
//       return
//     }
//     const searchResult =  arrData.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.phoneNo.toLowerCase().startsWith(e.target.value.toLowerCase()))
//     setArrData(searchResult);
//   }

//   return (
//     <div className="App">
//       {
//         console.log("arrData", arrData)
//       }
//         <input type="text" onChange={onChangeHandle} style={{marginTop:"50px"}}/>
//         <div>
//           <table style={{border:"1px solid #000", marginLeft:"20px"}}>
//            <tr style={{border:"1px solid #000"}}>
//              <th>Name</th>
//              <th>Phone No</th>
//              <th>Roll No</th>
//            </tr>

//               {
//                 arrData.map(item => {
//                   return(
//                     <tr>
//                       <td style={{border:"1px solid #000"}}>{item.name}</td>
//                       <td style={{border:"1px solid #000"}}>{item.phoneNo}</td>
//                       <td style={{border:"1px solid #000"}}>{item.rollNo}</td>
//                     </tr>
//                   )
//                 })
//               }
           
//           </table>
//         </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a project name..." data={BookData} />
    </div>
  );
}

export default App;
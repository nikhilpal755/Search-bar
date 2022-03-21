import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("")


  useEffect(()=>{
    const fetchUsers = async() =>{
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(users.data);
      setUsers(users.data);
    }
    fetchUsers();
  },[])

  return (
    <div className="App">
      <input 
      type="text" 
      placeholder="Search User"
      onChange={(e) => setSearch(e.target.value) }/>

      {
        users?.filter((user) =>{
          if(search ==""){
            return user
          }else if(user?.name.toLowerCase().includes(search.toLowerCase())){
            return user
          }
        }).map((user, key) =>{
          return <div key={key}>
            <p>{user.name}</p>
          </div>
        })
        
          
    
      }
    </div>
  );
}

export default App;

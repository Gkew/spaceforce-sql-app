import React, {useState} from 'react'
import Axios from 'axios'
import './Getusers.css'
function Fetching() {
    const [usersList, setUsersList] = useState([]);

    const getUser = () => {
        Axios.get("http://localhost:3001/users").then((response) => {
          setUsersList(response.data);
        });
      };

    return (

        <div className="users">
        <button onClick={getUser}>Show Users</button>
        {usersList.map((val, key) => {
          return (
            <div className="user-output">

              <p><strong>Name: </strong>{val.fname}</p>
              <p><strong>Lastname: </strong>{val.lname}</p>
              <p><strong>Email: </strong>{val.email}</p>
              <p><strong>Account: </strong>{val.account}</p>
              <p><strong>Role: </strong>{val.role}</p>
              <div>


              </div>
            </div>
          );
        })}

      </div>


  );
}
export default Fetching
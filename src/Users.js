import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users-container">

      <h1 className="users-title">
        Registered Users
      </h1>

      <table className="users-table">

        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>

                <td>
                  <div className="user-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </td>

                <td>{user.name}</td>

                <td>{user.email}</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="no-users">
                No Users Found
              </td>
            </tr>
          )}
        </tbody>

      </table>

    </div>
  );
}

export default Users;
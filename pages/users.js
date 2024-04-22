import Link from "next/link";
import { useState } from "react";
const users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Kuroko" },
    { id: 2, name: "Kagami" },
  ]);
  return (
    <div>
      <h1>User's list page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link legacyBehavior href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default users;

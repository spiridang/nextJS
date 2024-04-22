import Link from "next/link";

const users = ({ users }) => {
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

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  return {
    props: { users },
  };
}

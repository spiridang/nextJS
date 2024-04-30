import Link from "next/link";
import MainContainer from "../components/MainContainer";

const users = ({ users }) => {
  return (
    <MainContainer>
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
    </MainContainer>
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

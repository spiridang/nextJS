import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer>
      <div className={styles.user}>
        <h1>user with id {query.id}</h1>
        <div>Name:{user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return {
    props: { user },
  };
}

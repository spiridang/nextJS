import Link from "next/link";

const index = () => {
  return (
    <div>
      <Link href="/">
        <a>Main</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <h1>Main Page</h1>
    </div>
  );
};

export default index;
